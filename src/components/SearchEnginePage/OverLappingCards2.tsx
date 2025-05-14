import React from "react";

const OverLappingCards2: React.FC = () => {
  return (
    <div className="relative bg-black">
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
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994033/12700136_1920_1080_30fps_zajh9b.mp4" // Replace with your actual video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Existing Content */}
      <div className="hidden lg:block relative max-w-6xl h-screen mx-auto p-8">
        <div className="absolute right-0 text-left flex flex-end mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-snug">
            Build your Business <br />
            on LabourNet’s <span className="text-purple-500">WORK CLOUD</span>
          </h1>
        </div>
        {/* Card 1 */}
        <div className="absolute top-0 left-0 bg-purple-900 text-white p-6 rounded-bl-lg rounded-br-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">WCaaS</h3>
          <h4 className="text-xl font-semibold mb-2">
            Work Completion as a Service
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pre-Built, Plug-and-Play Work Processes</li>
            <li>Bespoke Gigification of Work</li>
            <li>Pay-per-Task</li>
          </ul>
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733829181/Screenshot_2024-12-10_at_4.40.50_PM-removebg-preview_jxbped.png"
              alt="logo"
              className="absolute left-4 -bottom-32"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="absolute top-64 left-60 bg-orange-500 text-white p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Gig-Talent</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hiring for Gig Workforces</li>
            <li>Gig-Worker Performance Analysis</li>
            <li>Gig-Worker Skill Assessments</li>
            <li>Field Force Management</li>
          </ul>
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733829181/Screenshot_2024-12-10_at_4.41.18_PM-removebg-preview_gezxml.png"
              alt="logo"
              className="absolute left-4 -bottom-32"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="absolute top-[500px] left-[500px] bg-green-200 text-gray-800 p-6 rounded-lg shadow-lg w-[400px] h-[350px]">
          <h3 className="text-lg font-bold mb-4">Talent</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contract and Temp Staffing</li>
            <li>Payroll Support and Compliance</li>
            <li>Hire-to-Retire Payroll Automation</li>
            <li>Onboarding at Scale</li>
            <li>Apprenticeship Programs</li>
          </ul>
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733829181/Screenshot_2024-12-10_at_4.41.31_PM-removebg-preview_q4xvel.png"
              alt="logo"
              className="absolute left-4 -bottom-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverLappingCards2;