import React from 'react';
import { FaClipboardList, FaEnvelope, FaFileAlt, FaUpload, FaMoneyBillWave } from 'react-icons/fa';

interface Step {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { number: '01', label: 'Register', icon: <FaClipboardList className="text-4xl mb-3" /> },
  { number: '02', label: 'Verify via email', icon: <FaEnvelope className="text-4xl mb-3" /> },
  { number: '03', label: 'Fill online application form', icon: <FaFileAlt className="text-4xl mb-3" /> },
  { number: '04', label: 'Upload required documents', icon: <FaUpload className="text-4xl mb-3" /> },
  { number: '05', label: 'Get Verified and Selected', icon: <FaMoneyBillWave className="text-4xl mb-3" /> },
];

const HowToApply: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[400px] bg-gray-900 overflow-hidden"
      aria-labelledby="how-to-apply-title"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-sm"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742994020/2759477-uhd_3840_2160_30fps_zxnpip.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[350px] px-6 sm:px-12 py-12 text-white">
        {/* Title */}
        <h2 id="how-to-apply-title" className="text-4xl sm:text-5xl font-bold mb-10 text-center tracking-wide">
          How to Apply
        </h2>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-6xl space-y-10 sm:space-y-0 sm:space-x-10">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step */}
              <div className="flex flex-col items-center text-center">
                {step.icon}
                <span className="text-2xl font-bold">{step.number}</span>
                <span className="text-lg mt-2 max-w-[150px]">{step.label}</span>
              </div>

              {/* Arrow (hidden on last step) */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop Arrow (horizontal) */}
                  <div className="hidden sm:block w-20 h-1 bg-orange-500 relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-l-[14px] after:border-l-orange-500 after:border-t-[7px] after:border-t-transparent after:border-b-[7px] after:border-b-transparent"></div>

                  {/* Mobile Arrow (vertical) */}
                  <div className="block sm:hidden h-8 w-1 bg-orange-500 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0 after:border-t-[14px] after:border-t-orange-500 after:border-l-[7px] after:border-l-transparent after:border-r-[7px] after:border-r-transparent"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToApply;