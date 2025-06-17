import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, message, preferredContact, subject } = req.body;

    // Example: Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Preferred Contact: ${preferredContact}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    // Example: Store in database (if needed)
    // await Database.saveContactForm({ name, email, phone, message, preferredContact, subject });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
