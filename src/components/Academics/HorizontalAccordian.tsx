import React, { useState } from "react";
import {
  FaGraduationCap,
  FaClipboardCheck,
  FaLightbulb,
  FaChalkboardTeacher,
  FaRedo,
  FaRobot,
} from "react-icons/fa";

const trainingPrinciples = [
  {
    title: "Learning",
    color: "bg-orange-600",
    description:
      "AI-driven content tailored to individual needs for maximum efficiency.",
    icon: FaGraduationCap,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916188/211589208_272cfb0a-9d68-41e5-84f4-dbb8243f3d91_vai2rd.jpg",
  },
  {
    title: "Application",
    color: "bg-green-600",
    description:
      "Real-world projects and interactive coding exercises for practical mastery.",
    icon: FaClipboardCheck,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916455/abstract-background-with-colorful-glowing-neon-lights_dzvjgy.jpg",
  },
  {
    title: "Experience",
    color: "bg-blue-600",
    description:
      "Immersive simulations and scenario-based learning for deep engagement.",
    icon: FaLightbulb,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916188/211589208_272cfb0a-9d68-41e5-84f4-dbb8243f3d91_vai2rd.jpg",
  },
  {
    title: "Coaching",
    color: "bg-pink-600",
    description:
      "Guidance from industry professionals and dedicated mentorship programs.",
    icon: FaChalkboardTeacher,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916455/abstract-background-with-colorful-glowing-neon-lights_dzvjgy.jpg",
  },
  {
    title: "Reinforcement",
    color: "bg-gray-900",
    description:
      "Regular skill assessments and adaptive learning paths to ensure retention.",
    icon: FaRedo,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916188/211589208_272cfb0a-9d68-41e5-84f4-dbb8243f3d91_vai2rd.jpg",
  },
  {
    title: "Tech-Enabled",
    color: "bg-yellow-500",
    description:
      "Harnessing AI, VR, and gamification for a next-gen learning experience.",
    icon: FaRobot,
    backgroundImage:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916455/abstract-background-with-colorful-glowing-neon-lights_dzvjgy.jpg",
  },
];

const HorizontalAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full flex justify-center py-16 bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="max-w-7xl w-full px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
          Our <span className="text-orange-500">Training Principles</span>
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Cutting-edge tech-driven learning for real-world impact at SkillNet.
        </p>

        <div className="flex w-full h-[350px] sm:h-[400px] rounded-xl overflow-hidden shadow-2xl">
          {trainingPrinciples.map((principle, index) => {
            const isActive = activeIndex === index;
            const IconComponent = principle.icon;

            return (
              <div
                key={index}
                className={`relative flex-1 transition-all duration-700 ease-in-out ${
                  isActive ? "flex-[5]" : "flex-[1.2]"
                } cursor-pointer flex items-center justify-center overflow-hidden ${principle.color} border border-gray-700`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  backgroundImage: `url(${principle.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "background 0.5s ease-in-out, flex 0.7s ease-in-out",
                }}
              >
                {!isActive && (
                  <div className="absolute transform text-white -rotate-90 text-3xl text-center font-extrabold tracking-wide uppercase opacity-80 transition-opacity duration-500">
                    {principle.title}
                  </div>
                )}

                {isActive && (
                  <div className="text-center p-8 backdrop-blur-md bg-black/50 rounded-lg shadow-md transition-opacity duration-500 opacity-100">
                    <div className="flex justify-center mb-4">
                      <IconComponent className="text-5xl text-white" />
                    </div>
                    <h3 className="text-3xl font-bold uppercase text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-300 max-w-xs mx-auto">
                      {principle.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HorizontalAccordion;
