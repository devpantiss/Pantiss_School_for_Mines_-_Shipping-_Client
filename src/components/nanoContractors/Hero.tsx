import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742998746/4474927-uhd_3840_2160_30fps_v7ypop.mp4" // Replace with your actual video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-screen-xl mx-auto px-6 text-white">
        {/* Small Heading */}
        <p className="text-lg font-light tracking-wide">SkillNet for Nano-Contractors</p>

        {/* Main Heading */}
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold leading-tight">
          Good Work and 
          <br />
          <span className="text-purple-400">Dependable Teams</span>
        </h1>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-purple-500 text-white font-semibold rounded-md shadow-lg hover:bg-purple-600 transition">
          Talk To Us
        </button>
      </div>
    </section>
  );
};

export default Hero;