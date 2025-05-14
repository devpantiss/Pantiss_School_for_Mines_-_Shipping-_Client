import React from "react";

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-black shadow-md rounded-lg p-6 flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-purple-600 mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <div className="h-1 w-16 bg-purple-600 self-center"></div>
    </div>
  );
};

const HowSection: React.FC = () => {
  return (
    <section className="bg-purple-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          LabourNet is <span className="text-orange-600">How</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={
              <div className="bg-orange-100 p-4 rounded-full">
                <span className="text-orange-600 text-4xl">₹</span>
              </div>
            }
            title="How do you variabilize costs?"
            description="Reduce capex associated with expansion and growth. Convert indirect costs to direct costs."
          />
          <Card
            icon={
              <div className="bg-orange-100 p-4 rounded-full">
                <span className="text-orange-600 text-4xl">↗</span>
              </div>
            }
            title="How do you fulfil at scale?"
            description="Scale up or down at will. Cater to customer segments as they appear. Build agility and flexibility right into your operations."
          />
          <Card
            icon={
              <div className="bg-orange-100 p-4 rounded-full">
                <span className="text-orange-600 text-4xl">⚙️</span>
              </div>
            }
            title="How are your workers so productive?"
            description="Happier workers are more productive. And workforces love reliable performance and payroll processes, skill training, welfare, and benefits."
          />
        </div>
      </div>
    </section>
  );
};

export default HowSection;
