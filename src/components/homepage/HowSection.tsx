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

const HowSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black via-purple-900 to-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-600 mb-12 text-center">
          SkillNet <span className="text-white">is How</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={
              <div className="bg-orange-100 p-4 rounded-full">
                <span className="text-orange-600 text-4xl">⛏️</span>
              </div>
            }
            title="How do you master practical skills?"
            description="Hands-on mining modules reduce learning curves. Convert theory into real-world expertise with interactive training."
          />
          <Card
            icon={
              <div className="bg-orange-100 p-4 rounded-full">
                <span className="text-orange-600 text-4xl">📈</span>
              </div>
            }
            title="How do you scale your training?"
            description="Access advanced simulations anytime. Adapt to skill levels and build proficiency with flexible, scalable modules."
          />
          <Card
            icon={
              <div className="bg-orange-100 p-4 rounded-full">
                <span className="text-orange-600 text-4xl">🛠️</span>
              </div>
            }
            title="How do you ensure job-ready talent?"
            description="Practical training and support boost employability. SkillNet offers certifications, mentorship, and career pathways for success."
          />
        </div>
      </div>
    </section>
  );
};

export default HowSection;