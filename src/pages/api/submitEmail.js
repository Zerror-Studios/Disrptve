import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';

const spreadsheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

// Authenticate Google Sheets
async function authenticate() {
  const auth = new JWT({
    email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
    key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let { fullName, email, phone, company, message, heardAboutUs, services } = req.body;

    // ✅ Validation for required fields
    if (!fullName || !email || !company || !message) {
      return res.status(400).json({ error: "All required fields must be filled" });
    }

    if (!services || services.length === 0) {
      return res.status(400).json({ error: "Please select at least one service." });
    }

    // ✅ Optional fields default to "-"
    if (!phone || phone.trim() === "") phone = "-";
    if (!heardAboutUs || heardAboutUs.trim() === "") heardAboutUs = "-";

    const sheets = await authenticate();

    // Format date for India
    const dateInKolkata = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    const [datePart] = dateInKolkata.split(",");
    const formattedDate = datePart.trim();

    // ✅ Fetch existing rows to check duplicates by email
    const getRows = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:H", // Updated columns (Date, FullName, Email, Phone, Company, Message, Services, HeardAboutUs)
    });

    const rows = getRows.data.values || [];
    const emailColumnIndex = 2; // Column C (Email)
    const existingRowIndex = rows.findIndex(
      (row, index) => index > 0 && row[emailColumnIndex] === email
    );

    const servicesString = Array.isArray(services)
      ? services.join(", ")
      : services;

    // ✅ Add all new fields in correct order
    const newRow = [
      formattedDate,
      fullName,
      email,
      phone,
      company,
      message,
      servicesString,
      heardAboutUs,
    ];

    if (existingRowIndex !== -1) {
      // Update existing row
      const rowNumber = existingRowIndex + 1;
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `Sheet1!A${rowNumber}:H${rowNumber}`,
        valueInputOption: "RAW",
        requestBody: { values: [newRow] },
      });
    } else {
      // Append new row
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:H",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values: [newRow] },
      });
    }

    // ✅ Send Email with all details
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: ["bestscenebs01@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="padding:20px;background:#f9f9f9;border-radius:8px;">
              <h2 style="color:#D70000;text-align:center;">DISRPTIVE New Contact Form Submission</h2>
              <table style="width:100%;border-collapse:collapse;margin-top:20px;">
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Date</b></td><td style="border:1px solid #ddd;padding:8px;">${formattedDate}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Full Name</b></td><td style="border:1px solid #ddd;padding:8px;">${fullName}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Email</b></td><td style="border:1px solid #ddd;padding:8px;">${email}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Phone</b></td><td style="border:1px solid #ddd;padding:8px;">${phone}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Company</b></td><td style="border:1px solid #ddd;padding:8px;">${company}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Message</b></td><td style="border:1px solid #ddd;padding:8px;white-space:pre-wrap;">${message}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Selected Services</b></td><td style="border:1px solid #ddd;padding:8px;white-space:pre-wrap;">${servicesString}</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;"><b>Heard About Us</b></td><td style="border:1px solid #ddd;padding:8px;">${heardAboutUs}</td></tr>
              </table>
              <p style="text-align:center;margin-top:20px;font-size:14px;color:#888;">This is an automated email — please do not reply.</p>
            </div>
          </body>
        </html>
      `,
    };

    await transport.sendMail(mailOptions);
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
