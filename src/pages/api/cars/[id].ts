import type { NextApiRequest, NextApiResponse } from 'next';

import Car from '@/models/Car';
import { connectDB } from '@/utils/db/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();
  
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const car = await Car.findById(id);
        if (!car) {
          return res.status(404).json({ error: 'Car not found' });
        }
        res.status(200).json(car);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching car' });
      }
      break;

    case 'PUT':
      try {
        const car = await Car.findByIdAndUpdate(
          id,
          req.body,
          { new: true, runValidators: true }
        );
        if (!car) {
          return res.status(404).json({ error: 'Car not found' });
        }
        res.status(200).json(car);
      } catch (error: any) {
        res.status(400).json({ 
          error: error.message || 'Error updating car' 
        });
      }
      break;

    case 'DELETE':
      try {
        const car = await Car.findByIdAndDelete(id);
        if (!car) {
          return res.status(404).json({ error: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error deleting car' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}