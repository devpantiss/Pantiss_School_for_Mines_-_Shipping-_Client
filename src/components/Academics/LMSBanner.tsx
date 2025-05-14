import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaCertificate } from "react-icons/fa";

const LmsBanner: React.FC = () => {
  return (
    <section className="relative text-white py-20 px-6 overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="parallax-bg absolute inset-0 z-0" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Revolutionize Your Learning Journey with <span className="text-orange-600">MineFlow LMS</span>
          </h1>
          <p className="text-lg mb-6">
            Seamlessly deliver courses, track progress, and empower students and instructors with a powerful, intuitive platform.
          </p>
          <button className="bg-purple-600 hover:bg-purple-300 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Get Started Now
          </button>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-black/30 ring-2 ring-orange-500 p-6 rounded-lg">
            <FaChalkboardTeacher size={32} className="mx-auto text-purple-400 mb-2" />
            <p className="font-semibold">Live & Recorded Classes</p>
          </div>
          <div className="bg-black/20 ring-2 ring-orange-500 p-6 rounded-lg">
            <FaLaptopCode size={32} className="mx-auto text-purple-400 mb-2" />
            <p className="font-semibold">Interactive Assessments</p>
          </div>
          <div className="bg-black/20 ring-2 ring-orange-500 p-6 rounded-lg">
            <FaCertificate size={32} className="mx-auto text-purple-400 mb-2" />
            <p className="font-semibold">Certifications & Analytics</p>
          </div>
        </div>
      </div>

      {/* Custom Parallax CSS */}
      <style>{`
        .parallax-bg {
          background-image: url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746176298/31495_ii0kct.jpg');
          background-attachment: fixed;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default LmsBanner;
