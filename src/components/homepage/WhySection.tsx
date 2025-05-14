import React from "react";

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-black/20 ring-2 ring-purple-600 shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <div className="h-1 w-16 bg-purple-600 self-center"></div>
    </div>
  );
};

const WhySkillNetSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black via-purple-900 to-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Why <span className="text-orange-600">SkillNet</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={
              <div className="bg-orange-100 p-4 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2592/2592972.png" // Mining tools icon
                  alt="mining-tools-icon"
                  className="w-10 h-10"
                />
              </div>
            }
            title="Why practical training?"
            description="Hands-on mining simulations build real-world skills fast. Master equipment and safety with immersive, practical modules."
          />
          <Card
            icon={
              <div className="bg-orange-100 p-4 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2921/2921128.png" // Simulation/training icon
                  alt="simulation-icon"
                  className="w-10 h-10"
                />
              </div>
            }
            title="Why scalable learning?"
            description="Flexible modules adapt to your pace. Scale up skills with advanced labs and certifications, anytime, anywhere."
          />
          <Card
            icon={
              <div className="bg-orange-100 p-4 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2972/2972528.png" // Career/support icon
                  alt="career-icon"
                  className="w-10 h-10"
                />
              </div>
            }
            title="Why job-ready support?"
            description="Get certified and connected. SkillNet offers mentorship, job placement, and progress tracking for mining careers."
          />
        </div>
      </div>
    </section>
  );
};

export default WhySkillNetSection;