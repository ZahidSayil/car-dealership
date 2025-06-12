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
