import React, { memo, useMemo, useEffect, useRef, useState } from "react";

// Define the Vehicle interface
interface Vehicle {
  title: string;
  image: string;
  description: string;
  registrationNo: string;
  assetNo: string;
  engineNo: string;
  chassisNo: string;
  quantity: string; // Added quantity field
}

// Static fleet data with quantities
const fleetData: Vehicle[] = [
  {
    title: "Volvo 460 Dumper",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752927/volvo-460_ycjwtr.avif",
    description: "A heavy-duty articulated dumper with a 46-ton capacity, designed for rugged terrains and efficient material transport.",
    registrationNo: "VOL-460-1234",
    assetNo: "A-001",
    engineNo: "ENG-460-7890",
    chassisNo: "CHS-460-5678",
    quantity: "3",
  },
  {
    title: "Volvo Excavator",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752928/volvo-excavator_i51rgi.webp",
    description: "A versatile EC480 excavator with advanced hydraulics, delivering precision and power for large-scale digging operations.",
    registrationNo: "VOL-EXC-5678",
    assetNo: "A-002",
    engineNo: "ENG-480-2345",
    chassisNo: "CHS-480-9012",
    quantity: "3",
  },
  {
    title: "Ace Hydra Crane",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752927/Ace-hydra-crane_fsn7an.jpg",
    description: "A mobile hydraulic crane with a 14-ton lifting capacity, ideal for construction and industrial lifting tasks.",
    registrationNo: "ACE-HYD-9012",
    assetNo: "A-003",
    engineNo: "ENG-014-6789",
    chassisNo: "CHS-014-3456",
    quantity: "2",
  },
  {
    title: "Caterpillar Loader",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752927/loader-caterpillar_n4nnhu.jpg",
    description: "A robust 950M wheel loader with superior digging and loading capabilities for heavy-duty applications.",
    registrationNo: "CAT-LOD-3456",
    assetNo: "A-004",
    engineNo: "ENG-950-1234",
    chassisNo: "CHS-950-7890",
    quantity: "4",
  },
  {
    title: "Caterpillar Haulpack",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752928/Cat-haulpack_umgycb.jpg",
    description: "A high-capacity 777G haul truck built for mining, offering durability and efficiency in material hauling.",
    registrationNo: "CAT-HPK-7890",
    assetNo: "A-005",
    engineNo: "ENG-777-5678",
    chassisNo: "CHS-777-2345",
    quantity: "Coming soon",
  },
  {
    title: "Propel Electric Tipper",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752928/Propel-EV_osbg1b.jpg",
    description: "An electric tipper truck designed for sustainable mining operations, combining efficiency with zero emissions.",
    registrationNo: "PRO-EV-2345",
    assetNo: "A-006",
    engineNo: "ENG-EV-9012",
    chassisNo: "CHS-EV-6789",
    quantity: "3",
  },
  {
    title: "Ace TC 6040 Tower Crane",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1745666949/ace_TC6040_yvsb9z.jpg",
    description: "A high-performance tower crane with a 60-meter jib and 40-ton lifting capacity, ideal for heavy construction sites.",
    registrationNo: "ACE-TC-6040",
    assetNo: "A-007",
    engineNo: "ENG-TC-6040-5678",
    chassisNo: "CHS-TC-6040-1234",
    quantity: "1",
  },
  {
    title: "Toyota Core IC Pneumatic Forklift",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1745667511/Mid-IC-Pneumatic-Application_bkgb2w.webp",
    description: "A mid-size IC pneumatic forklift designed for outdoor heavy lifting tasks, delivering excellent durability and performance.",
    registrationNo: "TOY-IC-4321",
    assetNo: "A-008",
    engineNo: "ENG-IC-6789",
    chassisNo: "CHS-IC-4321",
    quantity: "4",
  },
  {
    title: "Komatsu Bulldozer",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743752928/peakpx_urebbm.jpg",
    description: "A powerful bulldozer for earthmoving and grading, equipped with advanced blade control for precision work.",
    registrationNo: "KOM-6789",
    assetNo: "A-009",
    engineNo: "ENG-BML-3456",
    chassisNo: "CHS-BML-1234",
    quantity: "2",
  },
  {
    title: "Tata Prima 2830K",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1745668174/prima_tvnkp2.jpg",
    description: "A robust 28-ton tipper truck built for construction and mining applications, offering high durability and performance.",
    registrationNo: "TATA-PRIMA-2830K",
    assetNo: "A-010",
    engineNo: "ENG-PRIMA-2830",
    chassisNo: "CHS-PRIMA-2830",
    quantity: "5",
  },
];

// VehicleCard Component
interface VehicleCardProps {
  vehicle: Vehicle;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const VehicleCard = memo(
  ({ vehicle, onMouseEnter, onMouseLeave }: VehicleCardProps) => {
    const isComingSoon = vehicle.quantity.toLowerCase() === "coming soon";

    return (
      <div
        className="relative w-80 h-[500px] group cursor-pointer bg-gradient-to-b from-black to-purple-900 rounded-xl overflow-hidden shadow-2xl border-2 border-orange-600 flex flex-col"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Top: Vehicle Name and Quantity */}
        <div className="bg-purple-600/30 text-white text-center py-3">
          <h3 className="text-xl font-bold">{vehicle.title}</h3>
          <p className="text-sm text-orange-400">Numbers: {vehicle.quantity}</p>
        </div>

        {/* Middle: Vehicle Image */}
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="h-full object-cover w-[600px] transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />

        {/* Bottom: Trump Card Details or Coming Soon */}
        <div className="bg-black/60 text-white text-sm p-4">
          {isComingSoon ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-bold text-orange-500">Coming Soon</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="font-semibold text-purple-400">Registration No:</p>
                <p>{vehicle.registrationNo}</p>
              </div>
              <div>
                <p className="font-semibold text-purple-400">Asset No:</p>
                <p>{vehicle.assetNo}</p>
              </div>
              <div>
                <p className="font-semibold text-purple-400">Engine No:</p>
                <p>{vehicle.engineNo}</p>
              </div>
              <div>
                <p className="font-semibold text-purple-400">Chassis No:</p>
                <p>{vehicle.chassisNo}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.vehicle.title === nextProps.vehicle.title
);
VehicleCard.displayName = "VehicleCard";

// FleetSection Component
const FleetSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0); // Track scroll position persistently

  const fleetList = useMemo(() => [...fleetData, ...fleetData], []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const scroll = () => {
      if (!isPaused) {
        scrollPositionRef.current += scrollSpeed;
        container.scrollLeft = scrollPositionRef.current;

        const totalWidth = fleetData.length * 320;
        if (scrollPositionRef.current >= totalWidth) {
          scrollPositionRef.current = 0;
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (container) {
      scrollPositionRef.current = container.scrollLeft;
    }
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Discover Our <span className="text-orange-500">Elite Fleet</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-3xl mx-auto">
          Owned and Operated By Us, Engineered for excellence, our vehicles power operations with unmatched reliability and innovation in the field of Practical Skill Training.
        </p>
      </div>

      {/* Scrollable Fleet Container */}
      <div className="relative max-w-[1440px] mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-6 px-4 pb-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {fleetList.map((vehicle, index) => (
            <div
              key={`${vehicle.title}-${index}`}
              className="flex-shrink-0 min-w-[320px]"
            >
              <VehicleCard
                vehicle={vehicle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300">
          Explore Our Operations
        </button>
      </div>
    </section>
  );
};

export default memo(FleetSection, () => true);