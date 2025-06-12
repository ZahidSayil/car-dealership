// components/SearchFilters.tsx
import { useState, useEffect } from "react";
import { ICarFilters } from "@/types/car";

interface SearchFiltersProps {
  onFilterChange: (filters: ICarFilters) => void;
  initialFilters?: Partial<ICarFilters>;
}

const SearchFilters = ({
  onFilterChange,
  initialFilters,
}: SearchFiltersProps) => {
  const [filters, setFilters] = useState<ICarFilters>({
    search: "",
    status: "",
    make: "",
    model: "",
    minPrice: undefined,
    maxPrice: undefined,
    yearFrom: undefined,
    yearTo: undefined,
    ...initialFilters,
  });

  const handleFilterChange = (name: keyof ICarFilters, value: any) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search cars by make, model, or features..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={filters.search || ""}
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Make & Model Filters */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Make
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={filters.make || ""}
              onChange={(e) => handleFilterChange("make", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              value={filters.model || ""}
              onChange={(e) => handleFilterChange("model", e.target.value)}
            />
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range
          </label>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="Min Price"
              className="w-full p-2 border rounded-md"
              value={filters.minPrice || ""}
              onChange={(e) =>
                handleFilterChange(
                  "minPrice",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
            />
            <input
              type="number"
              placeholder="Max Price"
              className="w-full p-2 border rounded-md"
              value={filters.maxPrice || ""}
              onChange={(e) =>
                handleFilterChange(
                  "maxPrice",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
            />
          </div>
        </div>

        {/* Year Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year Range
          </label>
          <div className="space-y-2">
            <input
              type="number"
              placeholder="From Year"
              className="w-full p-2 border rounded-md"
              value={filters.yearFrom || ""}
              onChange={(e) =>
                handleFilterChange(
                  "yearFrom",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
            />
            <input
              type="number"
              placeholder="To Year"
              className="w-full p-2 border rounded-md"
              value={filters.yearTo || ""}
              onChange={(e) =>
                handleFilterChange(
                  "yearTo",
                  e.target.value ? Number(e.target.value) : undefined
                )
              }
            />
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            className="w-full p-2 border rounded-md"
            value={filters.status || ""}
            onChange={(e) => handleFilterChange("status", e.target.value)}
          >
            <option value="">All Status</option>
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => {
          if (value && value !== "") {
            return (
              <span
                key={key}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
              >
                {key}: {value}
                <button
                  onClick={() =>
                    handleFilterChange(key as keyof ICarFilters, "")
                  }
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            );
          }
          return null;
        })}
      </div>

      {/* Clear Filters Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => {
            const emptyFilters: ICarFilters = {
              search: "",
              status: "",
              make: "",
              model: "",
              minPrice: undefined,
              maxPrice: undefined,
              yearFrom: undefined,
              yearTo: undefined,
            };
            setFilters(emptyFilters);
            onFilterChange(emptyFilters);
          }}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
