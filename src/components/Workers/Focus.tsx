import React from 'react';

const Focus: React.FC = () => {
  return (
    <div className="bg-purple-800 ml-10 lg:ml-[150px] py-12 px-6 md:px-20 lg:px-32">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Section - Heading */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-4xl text-left font-bold text-white leading-tight">
            <span className="text-orange-500">Focus on work,</span>
            <br />
            we'll take care of the rest.
          </h2>
        </div>

        {/* Right Section - Description */}
        <div className="md:w-1/2 text-gray-200 text-sm md:text-base leading-relaxed">
          LabourNet cares about you, not just the work you do. Regular salary payments, health insurance, welfare schemes for your family, access to continuous upskilling opportunities; the LabourNet platform has been built to ensure your growth and welfare.
        </div>
      </div>
    </div>
  );
};

export default Focus;
