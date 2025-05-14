import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://labournet.in/wp-content/uploads/2021/12/1920x1024_BG-1-3.jpg')`, // Replace with the actual path to your background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative text-center text-white max-w-4xl px-6">
        <h1 className="text-sm font-medium uppercase mb-4">
          LabourNet for Workers
        </h1>
        <h2 className="text-5xl font-bold leading-tight mb-4">
          <span className="text-orange-500">Better work.</span>{" "}
          <span className="text-orange-500">Fair pay.</span>
          <br />
          <span className="text-green-200">Better benefits.</span>
        </h2>
        <p className="text-lg font-light leading-relaxed mb-6">
          Find work that matches your skill, consistently.
          <br />
          If your skills don’t match your aspirations, we’ll help you bridge the gap.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 text-sm font-medium rounded-md hover:bg-orange-600 transition">
          Upload Your Resume
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
