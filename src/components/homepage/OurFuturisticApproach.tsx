import React, { memo, useMemo, useEffect, useRef, useState } from "react";

interface Vehicle {
  title: string;
  image: string;
  description: string;
  registrationNo: string;
  assetNo: string;
  engineNo: string;
  chassisNo: string;
  quantity: string;
}

const fleetData: Vehicle[] = [
    {
      title: "Futuristic Skill on Wheels",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746022829/WhatsApp_Image_2025-04-30_at_5.37.40_PM_s3tcrn.jpg",
      description: "A state-of-the-art mobile lab equipped with AR/VR-based skill development modules, delivering immersive learning to remote areas.",
      registrationNo: "VOL-EXC-5678",
      assetNo: "A-002",
      engineNo: "ENG-480-2345",
      chassisNo: "CHS-480-9012",
      quantity: "3",
    },
    {
      title: "Advanced Operator Training Simulators",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746023415/WhatsApp_Image_2025-03-03_at_10.47.37_PM_1_ng3dvl.jpg",
      description: "Realistic simulators that replicate heavy machinery controls, helping trainees master equipment handling in a safe virtual environment.",
      registrationNo: "ACE-HYD-9012",
      assetNo: "A-003",
      engineNo: "ENG-014-6789",
      chassisNo: "CHS-014-3456",
      quantity: "2",
    },
    {
      title: "Large Scale Shipping Simulator",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746023414/WhatsApp_Image_2025-02-28_at_5.00.19_PM_l7dq7p.jpg",
      description: "A maritime simulation module designed for hands-on logistics and port operations training using realistic AR-based controls.",
      registrationNo: "CAT-LOD-3456",
      assetNo: "A-004",
      engineNo: "ENG-950-1234",
      chassisNo: "CHS-950-7890",
      quantity: "4",
    },
    {
      title: "Infrastructure Equipment Simulator",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746023907/WhatsApp_Image_2025-02-28_at_5.00.19_PM_1_ov0z9z.jpg",
      description: "Simulator module for construction site operations including bulldozers, backhoes, and graders to simulate field work conditions.",
      registrationNo: "CAT-HPK-7890",
      assetNo: "A-005",
      engineNo: "ENG-777-5678",
      chassisNo: "CHS-777-2345",
      quantity: "Coming soon",
    },
    {
      title: "Highend Welding Machinaries",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_1000,h_1000/v1746022829/welding_pfnxjr.webp",
      description: "Precision welding units integrated with simulation feedback for real-time skill correction and performance enhancement.",
      registrationNo: "PRO-EV-2345",
      assetNo: "A-006",
      engineNo: "ENG-EV-9012",
      chassisNo: "CHS-EV-6789",
      quantity: "3",
    },
    {
      title: "Electrician Training Simulators",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_600,h_1000/v1746022828/electrician_kdeqet.webp",
      description: "Interactive simulators for wiring, circuit assembly, and troubleshooting exercises using AR overlays and guided steps.",
      registrationNo: "ACE-TC-6040",
      assetNo: "A-007",
      engineNo: "ENG-TC-6040-5678",
      chassisNo: "CHS-TC-6040-1234",
      quantity: "1",
    },
  ];
  

interface VehicleCardProps {
  vehicle: Vehicle;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const VehicleCard = memo(
  ({ vehicle, onMouseEnter, onMouseLeave }: VehicleCardProps) => (
    <div
      className="relative w-80 h-[420px] bg-black rounded-2xl overflow-hidden shadow-xl border border-orange-500 hover:scale-[1.02] transition-transform duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={vehicle.image}
        alt={vehicle.title}
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent w-full px-4 py-4">
        <h3 className="text-lg font-semibold text-white">{vehicle.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-4">{vehicle.description}</p>
      </div>
    </div>
  ),
  (prev, next) => prev.vehicle.title === next.vehicle.title
);

VehicleCard.displayName = "VehicleCard";

const OurFuturisticApproach: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

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

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (container) scrollPositionRef.current = container.scrollLeft;
    setIsPaused(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-5xl font-extrabold text-white tracking-tight">
          Our <span className="text-orange-500">Futuristic Approach</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          A Glimpse into our Next-Gen Lab Equipments — powered by Advanced Simulators,
          AR/VR Modules, and Real-World Skill Training Infrastructure.
        </p>
      </div>

      {/* Fleet List */}
      <div className="relative max-w-[1440px] mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-6 px-6 pb-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {fleetList.map((vehicle, index) => (
            <div key={`${vehicle.title}-${index}`} className="flex-shrink-0 min-w-[320px]">
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
      {/* <div className="text-center mt-12">
        <button className="px-8 py-3 bg-orange-600 text-white text-lg font-medium rounded-full hover:bg-orange-700 transition duration-300">
          Explore Our Innovations
        </button>
      </div> */}
    </section>
  );
};

export default memo(OurFuturisticApproach, () => true);
