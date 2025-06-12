// components/HeroSection.tsx
import Image from "next/image";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Luxury car showcase"
          fill
          className="object-cover"
          priority
        />
        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Your Next Car Awaits
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover our collection of premium vehicles at competitive prices
          </p>
          <button
            onClick={() => router.push("/inventory")}
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 
                     rounded-md text-lg font-medium transition-colors"
          >
            View Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
