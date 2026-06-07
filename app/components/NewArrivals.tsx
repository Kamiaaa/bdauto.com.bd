import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Feature card data
const features = [
  {
    title: "Nitro",
    description:
      "Comprehensive academic programs designed for excellence and innovation in education.",
    image: "/img/glyder.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Alpha",
    description:
      "Experienced and dedicated faculty committed to student success and mentorship.",
    image: "/img/alpha.jpg",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Atlas",
    description:
      "State-of-the-art library with vast resources and quiet study spaces.",
    image: "/img/atlas.jpg",
    gradient: "from-green-500 to-emerald-500",
  },
];

// Type definitions
interface Feature {
  title: string;
  description: string;
  image: string;
  gradient: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

interface TopFeaturesProps {
  title?: string;
  description?: string;
}


// Feature Card Component
function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div
      className="group relative h-full bg-slate-900 dark:bg-gray-800 overflow-hidden shadow-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-t ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />

        {/* Title + Explore (Justified between) */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          {/* Feature Title */}
          <h3 className="text-xl font-semibold text-red-500 drop-shadow-md">
            {feature.title}
          </h3>

          {/* Explore Button */}
          <button className="group/btn inline-flex items-center gap-1.5 text-green-500 font-medium hover:transition-all">
            Explore
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-700 transition-all duration-500 pointer-events-none" />

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-linear-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 pointer-events-none`}
      />
    </div>
  );
}

// Main Component
export default function NewArrivals({
  title = "New Arrivals",
  description = "Discover our premium offerings designed to elevate your experience with cutting-edge technology and innovation.",
}: TopFeaturesProps) {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl tracking-tight font-source text-gray-50 dark:text-gray-900 sm:text-3xl md:text-5xl mb-4">
            {title}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
