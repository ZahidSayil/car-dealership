import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import Car from "@/models/Car";
import { connectDB } from "@/utils/db/mongodb";

type CarResponse = {
  id: string;
  make: string;
  model: string;
  year: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarResponse | { error: string }>
) {
  await connectDB();

  const { id } = req.query;

  // Validate `id`
  if (!id || typeof id !== "string" || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid or missing ID" });
  }

  // Restrict to GET method
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    return res.status(200).json(car);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
