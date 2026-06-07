'use client'
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Car data with links
const cars = [
  {
    title: "SURGE Z",
    description:
      "Premium Electric SUV . 402 km ELTC range",
    image: "/img/surge-z-hero-1.jpg",
    gradient: "from-red-500 to-orange-500",
    link: "https://www.mevauto.com/", // Add link for each car
  },
  {
    title: "SURGE H",
    description:
      "Plug-in Hybrid SUV · 200 km EV + 1000 km combined",
    image: "/img/surge-h-2.jpg",
    gradient: "from-blue-500 to-cyan-500",
    link: "/cars/surge-h",
  },
  {
    title: "ATLAS",
    description:
      "Heavy-duty cargo platform · Flatbed",
    image: "/img/atlas-3.jpg",
    gradient: "from-purple-500 to-pink-500",
    link: "/cars/atlas",
  },
  {
    title: "DELTA",
    description:
      "20-tonne dump truck · 140 kW · 4×2 RHD",
    image: "/img/delta-4.jpg",
    gradient: "from-green-500 to-emerald-500",
    link: "/cars/delta",
  },
  {
    title: "CURRENT 4.5T",
    description:
      "Light-duty cargo · Urban delivery",
    image: "/img/current-45t-5.jpg",
    gradient: "from-yellow-500 to-amber-500",
    link: "/cars/current-4-5t",
  },
  {
    title: "CURRENT 8T BEV",
    description:
      "All-electric light-duty truck · RHD",
    image: "/img/current-8t-6.jpg",
    gradient: "from-indigo-500 to-purple-500",
    link: "/cars/current-8t-bev",
  },
];

// Type definitions
interface Car {
  title: string;
  description: string;
  image: string;
  gradient: string;
  link: string; // Add link to type
}

interface CarCardProps {
  car: Car;
  index: number;
}

interface AllCarsProps {
  title?: string;
  description?: string;
  heroImage?: string;
}

// Car Card Component
function CarCard({ car, index }: CarCardProps) {
  return (
    <div
      className="group relative h-full bg-slate-900 dark:bg-gray-800 overflow-hidden shadow-lg flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-t ${car.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Title and Button Row */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-red-500">
            {car.title}
          </h3>
          
          {/* Explore Button with Link */}
          <Link href={car.link}>
            <button className="group/btn inline-flex items-center gap-1.5 text-green-500 font-medium hover:transition-all">
              Explore
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {car.description}
        </p>
      </div>

      {/* Optional: Make the whole card clickable */}
      {/* <Link href={car.link} className="absolute inset-0 z-10" aria-label={`View ${car.title} details`} /> */}

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-700 transition-all duration-500 pointer-events-none" />

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-linear-to-r ${car.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none`}
      />
    </div>
  );
}

// Hero Section Component
function HeroSection({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/slide-03.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bail text-white mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slide-up">
          {description}
        </p>
      </div>
    </div>
  );
}

// Main Component
export default function AllCars({
  title = "All Cars",
  description = "Discover our premium collection of luxury and performance vehicles designed to elevate your driving experience.",
}: AllCarsProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title={title} description={description} />

      {/* Cars Section - No gap, no extra title */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <CarCard key={index} car={car} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}