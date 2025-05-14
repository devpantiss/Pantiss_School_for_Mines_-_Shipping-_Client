import React from "react";

const WorkCloud: React.FC = () => {
  return (
    <div className="lg:hidden block bg-gray-50 py-10 px-6 lg:px-20">
      {/* Title Section */}
      <div className="text-center lg:text-left mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-snug">
          Build your Business <br />
          on LabourNet’s <span className="text-orange-500">WORK CLOUD</span>
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
        {/* WCaaS Card */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">WCaaS</h2>
          <h3 className="text-lg font-bold mb-6">Work Completion as a Service</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Pre-Built, Plug-and-Play Work Processes</li>
            <li>Bespoke Gigification of Work</li>
            <li>Pay-per-Task</li>
          </ul>
          <div className="mt-6 flex justify-center">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">₹</span>
            </div>
          </div>
        </div>

        {/* Gig-Talent Card */}
        <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Gig-Talent</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Hiring for Gig Workforces</li>
            <li>Gig-Worker Performance Analysis</li>
            <li>Gig-Worker Skill Assessments</li>
            <li>Field Force Management</li>
          </ul>
        </div>

        {/* Talent Card */}
        <div className="bg-green-100 text-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Talent</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Contract and Temp Staffing</li>
            <li>Payroll Support and Compliance</li>
            <li>Hire-to-Retire Payroll Automation</li>
            <li>Onboarding at Scale</li>
            <li>Apprenticeship Programs</li>
          </ul>
          <div className="mt-6 flex justify-center">
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center">
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/wrench.png"
                alt="Tool Icon"
                className="h-8 w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCloud;