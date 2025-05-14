import React from "react";
import { Link } from "react-router-dom";

const ForBusinessBanner: React.FC = () => {
  return (
    <div
      className="relative w-full h-[350px] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('/solutions_banner.webp')` }}
    >
      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Hire Top Talent Fast
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 drop-shadow-md max-w-2xl">
          Register on our platform to post job openings and connect with skilled professionals across India.
        </p>
        <Link
          to="/for-businesses"
          className="bg-purple-600 hover:bg-purple-700 text-white text-xl md:text-2xl font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          aria-label="Register now to hire talent and post job openings"
        >
          Register & Post Jobs
        </Link>
      </div>
    </div>
  );
};

export default ForBusinessBanner;