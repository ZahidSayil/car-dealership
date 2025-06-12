// src/components/cars/CarCard.tsx
import { ICar } from "@/types/car";

interface CarCardProps {
  car: ICar;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        {car.images[0] && (
          <img
            src={car.images[0]}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">
          {car.year} {car.make} {car.model}
        </h3>
        <div className="mt-2 space-y-1">
          <p className="text-lg font-bold text-gray-900">
            ${car.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">
            {car.mileage.toLocaleString()} miles
          </p>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            {car.transmission} • {car.fuelType}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              car.status === "available"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {car.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
