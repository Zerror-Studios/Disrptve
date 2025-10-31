import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import formidable from "formidable";
import fs from "fs";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import path from "path";

// Disable Next.js body parser for formidable
export const config = {
  api: { bodyParser: false },
};

// ---- Authenticate Google Sheets ----
async function authenticate() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

// ---- AWS S3 Client ----
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // ---- Parse Form Data ----
    const form = formidable({ multiples: false });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve([fields, files]);
      });
    });

    // Extract first element from each field array
    const fullName = fields.fullName?.[0] || "";
    const email = fields.email?.[0] || "";
    const phone = fields.phone?.[0] || "";
    const portfolio = fields.portfolio?.[0] || "";
    const message = fields.message?.[0] || "";
    const resume = files.resume?.[0];


    if (!fullName || !email || !phone || !portfolio || !resume) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    if (!resume) {
      return res.status(400).json({ error: "Resume file is missing" });
    }

    // ---- Prepare Date (IST) ----
    const dateInKolkata = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    const [datePart] = dateInKolkata.split(",");
    const formattedDate = datePart.trim();

    // ---- Upload Resume to S3 ----
    const fileBuffer = fs.readFileSync(resume.filepath);
    const fileName = `resumes/${Date.now()}-${path.basename(resume.originalFilename)}`;

    const uploadParams = {
      Bucket: "disrptive",
      Key: fileName,
      Body: fileBuffer,
      ContentType: resume.mimetype,
    };

    await s3.send(new PutObjectCommand(uploadParams));

    const resumeUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

    // ---- Append Data to Google Sheet ----
    const sheets = await authenticate();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const newRow = [
      formattedDate, // Date
      fullName,
      email,
      phone,
      portfolio,
      message || "-",
      resumeUrl,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet2!A:G",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [newRow] },
    });

    // ---- Send Email Notification ----
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ["bestscenebs01@gmail.com"],
      subject: "New Career Form Submission",
      html: `
        <div style="font-family:Arial,sans-serif;background:#f9f9f9;padding:20px;border-radius:8px;">
          <h2 style="color:#D70000;">New Career Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:20px;">
            <tr><td><b>Date</b></td><td>${formattedDate}</td></tr>
            <tr><td><b>Full Name</b></td><td>${fullName}</td></tr>
            <tr><td><b>Email</b></td><td>${email}</td></tr>
            <tr><td><b>Phone</b></td><td>${phone}</td></tr>
            <tr><td><b>portfolio</b></td><td>${portfolio}</td></tr>
            <tr><td><b>Message</b></td><td>${message || "-"}</td></tr>
            <tr><td><b>Resume</b></td><td><a href="${resumeUrl}" target="_blank">View Resume</a></td></tr>
          </table>
          <p style="text-align:center;margin-top:20px;font-size:12px;color:#666;">This is an automated email — please do not reply.</p>
        </div>
      `,
    };

    await transport.sendMail(mailOptions);

    // ✅ Final Success Response
    return res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error submitting career form:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message || error,
    });
  }
}
