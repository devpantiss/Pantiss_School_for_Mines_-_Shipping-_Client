import React, { memo } from "react";
import { Link } from "react-router-dom";

// Memoized HeroSection to prevent unnecessary re-renders
const HeroSection: React.FC = memo(() => {
  return (
    <div className="relative mt-12 text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742999025/9310125-uhd_3840_2160_30fps_l4ievp.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 px-8 py-16">
        {/* Left Section: Text, Form, and Buttons */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6 animate-fade-in">
          {/* Upper Section: Job Search */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold text-white">
              Operators, Technicians, Businesses & Nano-Contractors can Enroll & Hire{" "}
            </h1>
            <p className="text-lg text-center lg:text-left text-gray-300">
              10,000+ active job vacancies to grab
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <select
                className="px-4 py-2 rounded-md bg-black/80 border border-purple-600/50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                aria-label="Select Job Role"
              >
                <option>Select Job Role</option>
                <option>Software Engineer</option>
                <option>Project Manager</option>
              </select>
              <select
                className="px-4 py-2 rounded-md bg-black/80 border border-purple-600/50 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                aria-label="Select City"
              >
                <option>Select City</option>
                <option>Bangalore</option>
                <option>Mumbai</option>
              </select>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition-all duration-300">
                Search
              </button>
            </div>
          </div>

          {/* Lower Section: Key Features */}
          <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-bold text-white">
            Discover a new way <br />
            to <span className="text-purple-600">get work done.</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="/for-businesses"
              className="px-6 py-3 bg-black/80 border border-purple-600/50 text-white font-medium rounded-md hover:bg-purple-600/20 transition-all duration-300"
            >
              For Businesses
            </Link>
            {/* <Link className="px-6 py-3 bg-black/80 border border-purple-600/50 text-white font-medium rounded-md hover:bg-purple-600/20 transition-all duration-300">
              For Nano-Contractors
            </Link>
            <Link className="px-6 py-3 bg-black/80 border border-purple-600/50 text-white font-medium rounded-md hover:bg-purple-600/20 transition-all duration-300">
              For Skilled Workers
            </Link> */}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 hidden lg:flex justify-center items-center animate-fade-in">
          <img
            src="https://labournet.in/wp-content/uploads/2021/12/HomeBanner_warehouseManager_LowRes-2-1.png"
            alt="Skilled Worker in a warehouse"
            className="w-full max-w-md rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Scoped CSS for Futuristic Design */}
      <style>{`
        /* Purple Color Definitions */
        :root {
          --purple-600: #9333ea;
          --purple-700: #7e22ce;
        }

        /* Fade-In Animation for Content */
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .py-16 {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
        }
      `}</style>
    </div>
  );
});

export default HeroSection;
