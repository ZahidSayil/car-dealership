import { connectDB } from "@/utils/db/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
    res.status(200).json({ message: "Connected to MongoDB!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to MongoDB" });
  }
}
