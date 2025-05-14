import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const InsightsSection: React.FC = () => {
  const data: CardProps[] = [
    {
      title: "Learn Lifelong",
      description:
        "The industry demands – and rewards – those with the right skills. LabourNet opens up continuous upskilling and certification pathways for you that bridge the gap between your skillset and industry demand.",
      image: "https://labournet.in/wp-content/uploads/2022/03/LifeLong_1@2x-1.png", // Replace with actual image path
    },
    {
      title: "Reduce Your Worries",
      description:
        "LabourNet cares. Aside from ensuring timely payments, better benefits, and smooth onboarding and paperwork, we also bring financial enablement, housing support, and welfare schemes for your family.",
      image: "https://labournet.in/wp-content/uploads/2022/03/Asset-14_2@2x-1-1.png", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Engage with <span className="text-orange-500">Insights</span>
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
            <h3 className="text-xl font-bold text-orange-600 mb-4">
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
