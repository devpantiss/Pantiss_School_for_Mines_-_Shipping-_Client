import React, { memo, useMemo } from "react";
import { FiUsers, FiMapPin, FiBriefcase, FiCheckCircle } from "react-icons/fi";

// Define the Card interface
interface Card {
  title: string;
  subtitle: string;
  impacts: { number: string; description: string }[]; // Changed structure
  bgColor: string;
  textColor: string;
  icon: React.ReactNode;
  position: string;
}

// Updated card data
const cardData: Card[] = [
  {
    title: "Skill Candor",
    subtitle: "Transparent skill pathways",
    impacts: [
      { number: "10,000+", description: "Counselling Sessions" },
      { number: "35%", description: "Higher Enrollments" },
    ],
    bgColor: "bg-yellow-600/90",
    textColor: "text-white",
    icon: <FiMapPin className="text-7xl" />,
    position: "top-0 left-0",
  },
  {
    title: "Skill Mobilizers Connect",
    subtitle: "Linking skilled workers to industry",
    impacts: [
      { number: "5,000+", description: "Workers Connected" },
      { number: "100+", description: "Districts Covered" },
    ],
    bgColor: "bg-red-900",
    textColor: "text-white",
    icon: <FiUsers className="text-7xl" />,
    position: "top-64 left-60",
  },
  {
    title: "Skill Cafe",
    subtitle: "Innovation for professionals",
    impacts: [
      { number: "2,000+", description: "Graduated Technicians" },
      { number: "80%", description: "Placement Rate" },
    ],
    bgColor: "bg-white",
    textColor: "text-gray-900",
    icon: <FiCheckCircle className="text-7xl" />,
    position: "top-[500px] left-[500px]",
  },
  {
    title: "Blue Collars Foundry",
    subtitle: "Support for industrial workers",
    impacts: [
      { number: "70%", description: "Faster Hiring" },
      { number: "3,000+", description: "Alumni Network" },
    ],
    bgColor: "bg-blue-400",
    textColor: "text-white",
    icon: <FiBriefcase className="text-7xl" />,
    position: "top-[750px] left-[750px]",
  },
];

// Memoized CardItem component
const CardItem = memo(({ card }: { card: Card }) => {
  return (
    <div
      className={`absolute ${card.position} ${card.bgColor} ${card.textColor} p-6 rounded-lg shadow-lg w-[400px] h-[320px] transition-transform duration-300 ease-in-out [will-change:transform]`}
    >
      <h3 className="text-lg font-bold mb-2">{card.title}</h3>
      <h4 className="text-xl font-semibold mb-6">{card.subtitle}</h4>

      {/* Impacts in side-by-side format */}
      <div className="flex justify-between mt-4 space-x-6">
        {card.impacts.map((impact, idx) => (
          <div key={idx} className="text-center">
            <div className="text-3xl lg:text-4xl font-extrabold">
              {impact.number}
            </div>
            <div className="text-sm mt-1">{impact.description}</div>
          </div>
        ))}
      </div>

      {/* Icon */}
      <div></div>
      <div className="absolute bottom-6 text-4xl lg:left-6 left-1/2 -translate-x-1/2 lg:translate-x-0 transform">
        {card.icon}
      </div>
    </div>
  );
});
CardItem.displayName = "CardItem";

const OverLappingCards2: React.FC = () => {
  const cardItems = useMemo(() => {
    return cardData.map((card) => <CardItem key={card.title} card={card} />);
  }, []);

  return (
    <div className="relative py-10 bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742994033/video-poster_kzq1zq.jpg"
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994033/12700136_1920_1080_30fps_zajh9b.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto p-8">
        {/* Desktop Layout */}
        <div className="hidden lg:block h-[1000px]">
          <div className="absolute right-0 text-left flex flex-end mb-10">
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
              Our In-House <br />
              <span className="text-orange-500">Solutions</span>
            </h1>
          </div>
          {cardItems}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white leading-snug">
              Our In-House <br />
              <span className="text-orange-500">Solutions</span>
            </h1>
          </div>
          <div className="space-y-8">
            {cardData.map((card) => (
              <div
                key={card.title}
                className={`relative ${card.bgColor} ${card.textColor} p-6 rounded-lg shadow-lg w-full h-auto`}
              >
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <h4 className="text-xl font-semibold mb-6">{card.subtitle}</h4>
                <div className="flex justify-between mt-4 space-x-6">
                  {card.impacts.map((impact, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-extrabold">
                        {impact.number}
                      </div>
                      <div className="text-sm mt-1">{impact.description}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-10 left-8">{card.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OverLappingCards2, () => true);
