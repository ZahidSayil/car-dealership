// Types for a single car
export interface ICar {
    _id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    exteriorColor?: string;
    interiorColor?: string;
    fuelType?: string;
    transmission?: string;
    description?: string;
    features: string[];
    images: string[];
    status: 'available' | 'sold' | 'pending';
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Types for query filters
  export interface ICarFilters {
    search?: string;
    status?: string;
    make?: string;
    model?: string;
    minPrice?: number;
    maxPrice?: number;
    yearFrom?: number;
    yearTo?: number;
  }
  
  // Types for API response
  export interface CarsResponse {
    cars: ICar[];
    currentPage: number;
    totalPages: number;
    total: number;
    filters: {
      search: string | null;
      status: string | null;
      make: string | null;
      model: string | null;
      priceRange: { min: number; max: number } | null;
      yearRange: { from: number; to: number } | null;
      sorting: { field: string; order: string };
    };
  }
  
  // Types for creating a new car
  export interface ICreateCar extends Omit<ICar, '_id' | 'createdAt' | 'updatedAt'> {}
  
  // Types for updating a car
  export interface IUpdateCar extends Partial<ICreateCar> {}