import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const InsightsSection: React.FC = () => {
  const data: CardProps[] = [
    {
      title: "Market Insights",
      description:
        "The market is changing rapidly and constantly. Let LabourNet be your eyes and ears. Learn what your customers are looking for, and build your capabilities to cater to them better.",
      image: "https://labournet.in/wp-content/uploads/2022/03/Group-698.jpg", // Replace with actual image path
    },
    {
      title: "Worker Engagement",
      description:
        "Retain your best people and attract better talent. Assess and connect skills to key performance indicators. Open up lifelong learning pathways and offer skill certification to your employees.",
      image: "https://labournet.in/wp-content/uploads/2022/03/Asset-14_2@2x-1.png", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-black py-12">
      <h2 className="text-3xl font-bold text-center text-gray-50 mb-8">
        Engage with <span className="text-purple-500">Insights</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-green-100 rounded-lg p-6 h-[400px] shadow-md max-w-sm bg-cover bg-center"
            style={{
                backgroundImage: `url(${card.image})`
            }}
          >
            <h3 className="text-xl font-bold text-purple-600 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-700 mb-4">{card.description}</p>
            {/* <div className="flex justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-32 h-32 object-contain"
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsSection;
