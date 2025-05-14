import React from "react";

const OverLappingCards: React.FC = () => {
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
            Hands-On Mining Mastery <br />
            with <span className="text-purple-600">MINING LMS</span>
          </h1>
        </div>

        {/* Card 1 */}
        <div className="absolute top-0 right-0 bg-purple-900 text-white p-6 rounded-bl-lg rounded-br-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Practical Training Modules</h3>
          <h4 className="text-xl font-semibold mb-2">
            Real-World Skill Building
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Interactive Mining Simulations</li>
            <li>Equipment Handling Practice</li>
            <li>Safety Drills & Scenarios</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2592/2592972.png" // Icon for mining tools
              alt="mining-tools-icon"
              className="absolute right-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="absolute top-64 right-60 bg-yellow-500/50 text-white p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Advanced Practical Labs</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Virtual Mine Site Operations</li>
            <li>Geological Mapping Exercises</li>
            <li>Blast Design & Execution</li>
            <li>Performance-Based Assessments</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921128.png" // Icon for simulation/training
              alt="simulation-icon"
              className="absolute right-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="absolute top-[500px] right-[500px] bg-green-200 text-gray-800 p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Support & Growth</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>24/7 Instructor Support</li>
            <li>Peer Collaboration Forums</li>
            <li>Certification upon Completion</li>
            <li>Career Counseling & Job Links</li>
            <li>Progress Tracking Dashboard</li>
          </ul>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972528.png" // Icon for career/support
              alt="support-icon"
              className="absolute right-4 -bottom-32 w-24 h-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLappingCards;