// src/components/layout/Navbar.tsx
// Update the inventory link to use Next.js Link
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="logo.png" // Replace with your logo's path or URL
                alt="CarDealer Logo"
                className="h-20 w-auto" // Adjust height and width as needed
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/inventory"
              className="text-gray-600 hover:text-gray-900"
            >
              Inventory
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
