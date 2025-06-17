import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/utils/db/mongodb";
import Car from "@/models/Car";
import { ICar, CarsResponse, ICreateCar, ICarFilters } from "@/types/car";

type ApiResponse = CarsResponse | { error: string };

// Define the MongoDB query type
type MongoQuery = {
  status?: string;
  make?: RegExp;
  model?: RegExp;
  $or?: Array<{ [key: string]: RegExp }>;
  price?: {
    $gte?: number;
    $lte?: number;
  };
  year?: {
    $gte?: number;
    $lte?: number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  await connectDB();

  switch (req.method) {
    case "GET":
      try {
        // Extract query parameters with type safety
        const {
          page = 1,
          limit = 10,
          search,
          status,
          make,
          model,
          minPrice,
          maxPrice,
          yearFrom,
          yearTo,
          sortBy = "createdAt",
          sortOrder = "desc",
        } = req.query as unknown as ICarFilters & {
          page: number;
          limit: number;
          sortBy: string;
          sortOrder: "asc" | "desc";
        };

        // Build query with type safety
        const query: MongoQuery = {};

        // Basic filters
        if (status) query.status = status;
        if (make) query.make = new RegExp(make, "i");
        if (model) query.model = new RegExp(model, "i");

        // Search functionality
        if (search) {
          query.$or = [
            { make: new RegExp(search, "i") },
            { model: new RegExp(search, "i") },
            { description: new RegExp(search, "i") },
            { fuelType: new RegExp(search, "i") },
            { transmission: new RegExp(search, "i") },
          ];
        }

        // Price range filter
        if (minPrice || maxPrice) {
          query.price = {};
          if (minPrice) query.price.$gte = Number(minPrice);
          if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        // Year range filter
        if (yearFrom || yearTo) {
          query.year = {};
          if (yearFrom) query.year.$gte = Number(yearFrom);
          if (yearTo) query.year.$lte = Number(yearTo);
        }

        // Build sort options
        const sortOptions: Record<string, 1 | -1> = {};
        sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

        // Execute query
        const cars = await Car.find(query)
          .limit(Number(limit))
          .skip((Number(page) - 1) * Number(limit))
          .sort(sortOptions)
          .lean() // Convert documents to plain JavaScript objects
          .exec();

        // Get total count for pagination
        const total = await Car.countDocuments(query);

        // Prepare response with proper typing
        const response: CarsResponse = {
          cars: cars as unknown as ICar[],
          currentPage: Number(page),
          totalPages: Math.ceil(total / Number(limit)),
          total,
          filters: {
            search: search || null,
            status: status || null,
            make: make || null,
            model: model || null,
            priceRange:
              minPrice || maxPrice
                ? { min: Number(minPrice), max: Number(maxPrice) }
                : null,
            yearRange:
              yearFrom || yearTo
                ? { from: Number(yearFrom), to: Number(yearTo) }
                : null,
            sorting: { field: sortBy, order: sortOrder },
          },
        };

        res.status(200).json(response);
      } catch (error: unknown) {
        console.error("Error fetching cars:", error);
        res.status(500).json({ error: "Error fetching cars" });
      }
      break;

    case "POST":
      try {
        // Validate and create new car with type safety
        const carData: ICreateCar = {
          make: req.body.make,
          model: req.body.model,
          year: Number(req.body.year),
          price: Number(req.body.price),
          mileage: Number(req.body.mileage),
          exteriorColor: req.body.exteriorColor,
          interiorColor: req.body.interiorColor,
          fuelType: req.body.fuelType,
          transmission: req.body.transmission,
          description: req.body.description,
          features: req.body.features || [],
          images: req.body.images || [],
          status: req.body.status || "available",
        };

        // Create new car document
        const newCar = await Car.create(carData);

        // Send response
        res.status(201).json({
          cars: [newCar as ICar],
          currentPage: 1,
          totalPages: 1,
          total: 1,
          filters: {
            search: null,
            status: null,
            make: null,
            model: null,
            priceRange: null,
            yearRange: null,
            sorting: { field: "createdAt", order: "desc" },
          },
        });
      } catch (error: unknown) {
        console.error("Error creating car:", error);
        res.status(400).json({
          error:
            error instanceof Error
              ? error.message
              : "Error creating car listing",
        });
      }
      break;

    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
