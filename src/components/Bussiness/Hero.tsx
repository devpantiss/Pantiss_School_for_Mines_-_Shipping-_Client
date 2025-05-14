import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
const navigate = useNavigate();
  const handleRegister = () => {
    alert("Redirecting to Auth Page");
    navigate("/job-search-engine/job-providers/auth");
  }
  return (
    <section className="relative lg:h-[80vh] h-full p-6">
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
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742999025/9310125-uhd_3840_2160_30fps_l4ievp.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
        <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
          {/* Left Side Text */}
          <div className="space-y-6">
            <p className="text-lg font-light tracking-wide">SkillNet for Businesses</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Start Scaling
              <br />
              <span className="text-purple-400">Easier Than Ever Before</span>
            </h1>
            <button onClick={handleRegister} className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md shadow-lg hover:bg-purple-600 transition">
              Register
            </button>
          </div>

          {/* Right Side Registration Form */}
          <div className="bg-transparent bg-opacity-90 rounded-xl shadow-lg p-6 text-gray-800 w-full max-w-md mx-auto">
            {/* <h2 className="text-2xl text-white font-bold mb-4">Register Your Business</h2> */}
            {/* <form className="space-y-4">
              <div>
                <label className="block text-sm text-white font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm text-white font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm text-white font-medium mb-1">Company Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Company"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition"
              >
                Register
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
