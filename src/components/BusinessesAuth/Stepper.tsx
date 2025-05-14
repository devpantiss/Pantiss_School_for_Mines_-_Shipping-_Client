import React from 'react';

interface StepperProps {
  currentStep: number;
  steps: string[];
}

export const Stepper: React.FC<StepperProps> = React.memo(({ currentStep, steps }) => {
  return (
    <div className="flex items-center justify-between mt-8">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex-1 text-center">
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ${
                currentStep >= index + 1
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_#7c3aed] scale-110'
                  : 'bg-gray-800 text-gray-200'
              } ${currentStep === index + 1 ? 'ring-2 ring-purple-600' : ''}`}
              aria-label={`Step ${index + 1}: ${step}`}
            >
              {index + 1}
            </div>
            <p className="mt-2 text-xs font-medium text-gray-200 tracking-wide">{step}</p>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-2 rounded-full transition-all duration-500 ${
                currentStep > index + 1
                  ? 'bg-purple-600 shadow-[0_0_5px_#7c3aed]'
                  : 'bg-gray-600'
              }`}
              aria-hidden="true"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
});