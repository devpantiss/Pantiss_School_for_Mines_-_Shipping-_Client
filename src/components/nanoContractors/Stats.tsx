import React from "react";

const Stats: React.FC = () => {
  const stats = [
    { value: "12+", label: "Years of Redefining Markets" },
    { value: "100+", label: "Satisfied Customers" },
    { value: "500K+", label: "Verified Skilled Tradespersons" },
    { value: "24", label: "Skilled trades" },
    { value: "12K+", label: "Pin-codes covered" },
  ];

  return (
    <div className="relative bg-purple-900 py-12">
      {/* Background Images in Top Right Corner */}
      <div className="absolute top-0 right-0 flex gap-4 pr-10 pt-8">
        <img
          src="https://labournet.in/wp-content/uploads/2022/03/Group-697.png"
          alt="Decorative Shapes"
          className="w-20 h-20"
        />
        <img
          src="https://labournet.in/wp-content/uploads/2022/03/Group-697.png"
          alt="Decorative Shapes"
          className="w-32 h-32"
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Left Title Section */}
        <div className="text-center md:text-left mb-8">
          <h2 className="text-3xl font-bold text-white">
            The driving force in your{" "}
            <span className="text-orange-500">growth engine</span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
