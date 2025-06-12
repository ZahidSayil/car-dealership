// pages/index.tsx
import { useState, useEffect } from "react";
import { ICarFilters, CarsResponse } from "@/types/car";
import SearchFilters from "@/components/cars/SearchFilters";
import CarCard from "@/components/cars/CarCard";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const [carsData, setCarsData] = useState<CarsResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCars = async (filters: ICarFilters) => {
    setLoading(true);
    try {
      // Convert filters to URLSearchParams
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value.toString());
      });

      const response = await fetch(`/api/cars?${params.toString()}`);
      const data: CarsResponse = await response.json();
      setCarsData(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filters: ICarFilters) => {
    fetchCars(filters);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <SearchFilters onFilterChange={handleFilterChange} />

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="mt-8">
          {carsData && (
            <>
              <div className="mb-4 text-gray-600">
                Found {carsData.total} cars
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {carsData.cars.map((car) => (
                  <CarCard key={car._id} car={car} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
