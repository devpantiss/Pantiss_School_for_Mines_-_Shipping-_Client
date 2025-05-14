import React from 'react';

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = React.memo(({ currentStep }) => {
  const steps = ['Basic Info', 'Job Role', 'Personal Details', 'Experience', 'I-Card'];

  return (
    <nav aria-label="Progress stepper" className="relative flex justify-between mt-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative flex-1 text-center z-10"
          role="region"
          aria-label={`Step ${index + 1}: ${step}`}
        >
          {/* Step Dot */}
          <div
            className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ease-in-out ${
              currentStep >= index + 2
                ? 'bg-purple-600 text-white shadow-[0_0_15px_#7c3aed] scale-110'
                : 'bg-gray-800 text-gray-400'
            } ${currentStep === index + 2 ? 'ring-2 ring-purple-600' : ''}`}
            aria-current={currentStep === index + 2 ? 'step' : undefined}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && console.log(`Step ${index + 1} selected`)} // Placeholder for interaction
          >
            {index + 1}
          </div>
          {/* Step Label */}
          <p className="mt-2 text-xs font-medium text-gray-200 tracking-wide">{step}</p>
          {/* Connecting Line */}
          {index < steps.length - 1 && (
            <div
              className={`absolute top-5 left-1/2 w-1/2 h-1 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
                currentStep > index + 2
                  ? 'bg-gradient-to-r from-purple-600 to-purple-800'
                  : 'bg-gray-700'
              }`}
              style={{ left: 'calc(50% + 1.60rem)' }} // Offset to start after the dot
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </nav>
  );
});

export default Stepper;