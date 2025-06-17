# Car Dealership Project

Application Architecture:

[_app.tsx] (Root)
│
├── [Layout.tsx] (Wrapper Component)
│ │
│ ├── [Header.tsx]
│ │ └── [Navbar.tsx]
│ │
│ └── [Footer.tsx]
│
├── [pages/index.tsx] (Homepage)
│
├── [pages/inventory.tsx] (Car Listing Page)
│ │
│ ├── [SearchFilters.tsx]
│ │
│ ├── [CarGrid.tsx]
│ │ └── Multiple [CarCard.tsx]
│ │
│ └── [Pagination.tsx]
│
└── [pages/cars/[id].tsx] (Individual Car Page)
└── [CarDetails.tsx]

Data Flow:
┌─────────────────┐
│ MongoDB │
└────────┬────────┘
│
┌────────┴────────┐
│ API Routes │
│ (/api/cars) │
└────────┬────────┘
│
┌────────┴────────┐
│ React Components│
└─────────────────┘

Component Relationships:

1. Layout Wrapper:

   - Every page wrapped in Layout
   - Header & Footer consistent across pages
   - Navbar part of Header

2. Main Pages:
   Homepage (index.tsx)
   ├── Featured cars
   └── Quick search

   Inventory (inventory.tsx)
   ├── Search/Filter functionality
   ├── Grid of car listings
   └── Pagination

   Car Detail ([id].tsx)
   └── Detailed car information

Base URL: http://localhost:3000/api

1. GET All Cars (with filters)
   GET http://localhost:3000/api/cars
   Query Params:

- search
- status
- make
- model
- minPrice
- maxPrice
- yearFrom
- yearTo
- page
- limit
- sortBy
- sortOrder

Example URLs:

- http://localhost:3000/api/cars?page=1&limit=10
- http://localhost:3000/api/cars?make=Toyota&minPrice=20000
- http://localhost:3000/api/cars?status=available&sortBy=price&sortOrder=desc

2. GET Single Car
   GET http://localhost:3000/api/cars/:id
   Example: http://localhost:3000/api/cars/12345

3. Create Car
   POST http://localhost:3000/api/cars
   Body (JSON):
   {
   "make": "Toyota",
   "model": "Camry",
   "year": 2020,
   "price": 25000,
   "mileage": 15000,
   "exteriorColor": "Silver",
   "interiorColor": "Black",
   "fuelType": "Gasoline",
   "transmission": "Automatic",
   "description": "Well-maintained sedan",
   "features": ["Bluetooth", "Backup Camera"],
   "images": ["image1.jpg", "image2.jpg"],
   "status": "available"
   }

4. Update Car
   PUT http://localhost:3000/api/cars/:id
   Example: http://localhost:3000/api/cars/12345
   Body (JSON - partial update):
   {
   "price": 24000,
   "status": "pending"
   }

5. Delete Car
   DELETE http://localhost:3000/api/cars/:id
   Example: http://localhost:3000/api/cars/12345
