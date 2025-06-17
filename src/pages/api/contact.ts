// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/utils/db/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, preferredContact, subject } = req.body;

    // Add your email sending logic here
    // Example: Send email using nodemailer or any email service

    // Store in database if needed
    await connectDB();
    // Add database logic here

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
}