import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

// Define the Metric interface for TypeScript
interface Metric {
  value: number;
  label: string;
  suffix?: string;
}

const ImpactSection: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const metrics: Metric[] = [
    { value: 7500, label: "Counselled for TVET Program" },
    { value: 9500, label: "Trained & Certified" },
    { value: 5000, label: "Placed", suffix: "+" },
    { value: 300, label: "Mega Industries Connected", suffix: "+" },
    { value: 1500, label: "Nano Contractors Onboarded", suffix: "+" },
    { value: 50, label: "Revenue Generated", suffix: "Cr+" },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-fixed bg-cover bg-center bg-no-repeat py-20 px-8 lg:h-[600px] text-white"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743679033/shahnawaz-shamim-rbiknJHleHI-unsplash_jt41sl.jpg)",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Header Section */}
        <div className="flex items-center">
          <h2 className="text-5xl font-semibold leading-snug">
            Making markets.
            <br />
            <span className="text-orange-400">Lifting Livelihoods.</span>
          </h2>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          {metrics.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-5xl font-extrabold text-orange-400">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    suffix={item.suffix || ""}
                  />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-lg mt-3 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
