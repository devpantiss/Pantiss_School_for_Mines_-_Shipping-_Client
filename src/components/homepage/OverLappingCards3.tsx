import React from "react";

const OverLappingCards3: React.FC = () => {
  return (
    <div className="relative bg-transparent">
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
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994000/16498883-hd_1920_1080_24fps_zb7mxr.mp4" // Kept the same video; replace if needed
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="hidden lg:block relative max-w-6xl h-screen bg-transparent mx-auto p-8">
        <div className="text-center lg:text-left mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
            Shape Your Mining Future <br />
            with <span className="text-purple-500">CAREER PATH</span>
          </h1>
        </div>

        {/* Card 1 */}
        <div className="absolute top-0 right-0 bg-purple-900 text-white p-6 rounded-bl-lg rounded-br-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Career Exploration</h3>
          <h4 className="text-xl font-semibold mb-2">
            Discover Mining Opportunities
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Explore Mining Career Options</li>
            <li>Personalized Career Assessments</li>
            <li>Guidance on Skill Requirements</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2965/2965879.png" // Icon: Compass (exploration)
              alt="exploration-icon"
              className="absolute right-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="absolute top-64 right-60 bg-orange-500/60 text-white p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Skill Development</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Mining Skill Workshops</li>
            <li>Resume Building Support</li>
            <li>Interview Preparation</li>
            <li>Certification Guidance</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2040/2040730.png" // Icon: Graduation cap (skill development)
              alt="skill-development-icon"
              className="absolute right-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="absolute top-[500px] right-[500px] bg-green-200 text-gray-800 p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Job Placement Support</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Connect with Mining Employers</li>
            <li>Job Opportunity Alerts</li>
            <li>Mentorship from Industry Experts</li>
            <li>Career Path Planning</li>
            <li>Post-Placement Guidance</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972528.png" // Icon: Career path (job placement)
              alt="job-placement-icon"
              className="absolute right-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLappingCards3;