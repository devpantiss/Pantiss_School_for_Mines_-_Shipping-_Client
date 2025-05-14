import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { Stepper } from '../components/BusinessesAuth/Stepper';
import { BusinessLoginForm } from '../components/BusinessesAuth/BusinessLoginForm';
import { BusinessSignupForm } from '../components/BusinessesAuth/BusinessSignupForm';
import { OrganizationTypeForm } from '../components/BusinessesAuth/OrganizationTypeForm';
import { CompanyDetailsForm } from '../components/BusinessesAuth/CompanyDetailsForm';

interface BusinessFormData {
  recruiterName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  emailOtp: string;
  phoneOtp: string;
  organizationType: string;
  companyName: string;
  companyLogo: File | null;
  profilePic: File | null;
  location: string;
  numberOfEmployees: string;
  companyDescription: string;
  address: string;
  website: string;
}

const steps = ['Basic Info', 'Organization Type', 'Company Details'];

const BusinessAuth: React.FC = () => {
  const [step, setStep] = useState(0); // Start at 0 for Login
  const [formData, setFormData] = useState<BusinessFormData>({
    recruiterName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    emailOtp: '',
    phoneOtp: '',
    organizationType: '',
    companyName: '',
    companyLogo: null,
    profilePic: null,
    location: '',
    numberOfEmployees: '',
    companyDescription: '',
    address: '',
    website: '',
  });

  const updateFormData = useCallback((data: Partial<BusinessFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const nextStep = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, steps.length));
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleLoginSuccess = useCallback(() => {
    alert('Login successful!');
  }, []);

  const handleSignupSuccess = useCallback(() => {
    alert('Signup successful! Account created.');
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743853206/Pantiss_School-Photoroom_pq3crh.png"
        data-testid="background-video"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1742999025/9310125-uhd_3840_2160_30fps_l4ievp.mp4"
          type="video/mp4"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4b0082_0%,#1e3a8a_50%,#000000_100%)]"
          style={{ backgroundSize: '150% 150%' }}
        />
      </video>

      <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743853206/Pantiss_School-Photoroom_pq3crh.png"
          alt="Pantiss School Logo"
          className="absolute top-4 left-4 h-[80px] max-w-[500px] object-contain rounded-md hover:scale-105 transition-transform duration-300 sm:top-6 sm:left-6 z-50"
          aria-hidden="true"
          data-testid="company-logo"
        />
      <div className="absolute inset-0 bg-gray-900/40 z-5" />
      <div className="relative z-10 max-w-lg w-full space-y-8">
        <Toaster />
        {step >= 1 && <Stepper currentStep={step} steps={steps} />}
        <AnimatePresence mode="wait">
          {step === 0 && (
            <BusinessLoginForm
              key="login"
              onSignupClick={() => setStep(1)}
              onSuccess={handleLoginSuccess}
            />
          )}
          {step === 1 && (
            <BusinessSignupForm
              key="signup"
              formData={{
                ...formData,
                numberOfEmployees: formData.numberOfEmployees ? formData.numberOfEmployees.toString() : undefined
              }}
              updateFormData={(data) => updateFormData({
                ...data,
                numberOfEmployees: data.numberOfEmployees ? parseInt(data.numberOfEmployees as string, 10) : undefined
              })}
              onNext={nextStep}
              onBack={() => setStep(0)}
            />
          )}
          {step === 2 && (
            <OrganizationTypeForm
              key="organizationType"
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 3 && (
            <CompanyDetailsForm
              key="companyDetails"
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleSignupSuccess}
              onBack={prevStep}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BusinessAuth;