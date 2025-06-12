// src/pages/inventory.tsx
import CarGrid from "@/components/cars/CarGrid";

export default function Inventory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Cars</h1>
        <p className="mt-2 text-gray-600">
          Browse our selection of quality vehicles
        </p>
      </div>
      <CarGrid />
    </div>
  );
}
