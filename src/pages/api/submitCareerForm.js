import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';
import formidable from 'formidable';

const spreadsheetId = '161dLj4f-aDZ6deyyFR5lotPGjqm9hzL-JlsZULZQeA0';

export const config = {
  api: {
    bodyParser: false, 
  },
};

async function authenticate() {
  const auth = new JWT({
    email: "zerror-service-email@spartan-thunder-476511-r2.iam.gserviceaccount.com",
    key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCFq7veMKeJdcCn\nAbaXjT/Yn5JcOBTh4WR1bhCCUGaLOObem9kZ4AbCfeLRbow97WRNnGKwv+6Dm0xs\nmCZgJXpH6GAR1dkUYQfPLcXLnbWE7/bT5nHNlA/Zz2p9k6rcp2c8X9JgsSFyXsnd\nioBlNPA3vzQAjBtO5LFy7tKXk4Lyxwjh3MMtskHJBoiOMo8OJq6r2AnpDD3MBN/K\nJOhpcYD918FY15RJyOPWe6g4aZJqavOFE4U3bMIzDWiBgqsvuzZE9RTK9cWrS0pn\nI6P8HOqzV0wGhorTyiZBPOjcjCBT5hByT+wtBejD3x7IKM98ipIV7AKv0bN6MTHX\nFVsUiIt5AgMBAAECggEANLBHKqMh/rhX+lxeBSnLj08CyW/fp1OJHhKG1l7rtJf2\nxKtIrX7VG0e0ppm9FNHkdgUdD49v7BdETg/BHKfZJcvuRkl1OievBNaFfyeIe8B8\nmfTdScvBXbj4wEv7DuO7eRxKGAvp46OCTV2BE6OExmyLCmYvg274lRWXE+E0vg3t\nVaXmVhXjIQ8ykclEf1mT8rdbp2a7ZdaXChfq2eywADKXbsgzmzXhsfjScML6pVbt\nBzkoUyiewDOfkY3IE5jASwJWbt6l+EPzMRwrvJtJXDUFWqpQ+e0henPGJtL8EvX/\na5fWa8aCJVJ3eOAu0LHJIRmO9gVXzaZ75Opl9qf/0wKBgQC7Xjz8UV8fBV2isNX+\n/dAu0alxoywspEbMLc20ZsKvggyY3v2n7Rt7A5ENbTuQn5PB03Fb+WlLA16+9G8G\nSvAOosBspVXvRBFyKBVEOMy5qgfrD9SlantD7jQrl04KzlNJBcHbSnN9lPCHvPCQ\nfde1P6PRE6USQ56+pGl9NyUrCwKBgQC2ojqUvbDT5qxqKIpZXUsQtrTFwyD8BDrp\n/y7xwPlpXYXIKXcJmO4nBJwkpBIZ8yOOkaMd788w9LREyNNaCi5FT70E2looLm68\nGzVFt3sAyN8aVAuermoZDnMSlGg8vHWLshIuUlKecIPmqYzZzNmzoKCevjyn7BxH\nHUNK6K5WCwKBgAJmD3PPet9Dy1IU33h3OV4QExJAW4VqyPk+MN75Xc6vZIfkeuzW\nbT6i6g1484VDdbnKgi4CQGXUcjcRnAZBmVcmoD4D09jPT0Xd23/XFk/eLGHG/xrr\nBQ72krZoJnie8ZQCvduX1WirKnUiZxYCdmt8mBVKIhfcw8B/DFatCQ3HAoGBAJs6\noh4AaMaCvrLwSD8Si5XmJRod8vAhTE3NBoKWqabDxczOaY3vvSPOyERga75AqU0p\nPgJY7LrIklwQcYuLMa7ZymfQi2axqI8bdRkPjW2qTe6b1tCFoEoxvN7i4wIUkLgu\nn0Nd1zkxmvq3y67nbXY+paanPPjhN1u+ZI7L3DnnAoGAH1ZGXtmPWHKpsIgLIWpu\nVL0aJ3N2KxbV4kQ0sYoBThSxS1mrd93jIksk5xA3E2h+XdEjcsNHnlxwFjG+snIt\n4p4Gj2J6miAkoaXxAgCCW7s/8FD47bG6dKMIRX2vBUJqcWRG37Lql+KlFjIR8y8Y\nRd6D7dBgoifWynOd/eQpoLE=\n-----END PRIVATE KEY-----\n",
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form parsing error:", err);
      return res.status(400).json({ error: "Form data parsing failed" });
    }

    const fullName = fields.fullName?.[0] || fields.fullName;
    const email = fields.email?.[0] || fields.email;
    const phone = fields.phone?.[0] || fields.phone;
    const portfolio = fields.portfolio?.[0] || fields.portfolio;
    const message = fields.message?.[0] || fields.message || "-";
    const resumeFile = files.resume?.[0] || files.resume;

    console.log("Received:", fullName, email, phone, portfolio, message);

    // ✅ Validate required fields
    if (!fullName || !email || !phone || !portfolio || !resumeFile) {
      return res.status(400).json({ error: "Please fill all required fields." });
    }

    // You can upload the file to Cloudinary, S3, or Drive if needed
    // For now, just use the file path as a placeholder link
    const resumeLink = resumeFile?.filepath || "Uploaded file";

    try {
      const sheets = await authenticate();

      // Format date for India
      const dateInKolkata = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });
      const [datePart] = dateInKolkata.split(",");
      const formattedDate = datePart.trim();

      const newRow = [
        formattedDate,
        fullName,
        email,
        phone,
        portfolio,
        resumeLink,
        message,
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet2!A:G",
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values: [newRow] },
      });

      // Send email
      const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "hello@zerrorstudios.com",
          pass: "byaqczanjvrarkan",
        },
      });

      const mailOptions = {
        from: "hello@zerrorstudios.com",
        to: ["bestscenebs01@gmail.com"],
        subject: "New Career Application - DISRPTVE",
        html: `
          <html>
            <body style="font-family: Arial, sans-serif;">
              <div style="padding:20px;background:#f9f9f9;border-radius:8px;">
                <h2 style="color:#FB0401;text-align:center;">DISRPTIVE New Career Application</h2>
                <table style="width:100%;border-collapse:collapse;margin-top:20px;">
                  <tr><td><b>Date</b></td><td>${formattedDate}</td></tr>
                  <tr><td><b>Full Name</b></td><td>${fullName}</td></tr>
                  <tr><td><b>Email</b></td><td>${email}</td></tr>
                  <tr><td><b>Phone</b></td><td>${phone}</td></tr>
                  <tr><td><b>Portfolio</b></td><td><a href="${portfolio}" target="_blank">${portfolio}</a></td></tr>
                  <tr><td><b>Resume</b></td><td>${resumeLink}</td></tr>
                  <tr><td><b>Message</b></td><td>${message}</td></tr>
                </table>
              </div>
            </body>
          </html>`,
      };

      await transport.sendMail(mailOptions);

      res.status(200).json({ message: "Career form submitted successfully." });
    } catch (error) {
      console.error("Error submitting career form:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
}