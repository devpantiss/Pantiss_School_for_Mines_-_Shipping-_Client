import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Stepper from '../components/JobSeekerAuth/Stepper';
import LoginForm from '../components/JobSeekerAuth/LoginForm';
import SignupForm from '../components/JobSeekerAuth/SignupForm';
import JobRoleForm from '../components/JobSeekerAuth/JobRoleForm';
import PersonalDetailsForm from '../components/JobSeekerAuth/PersonalDetailsForm';
import ExperienceForm from '../components/JobSeekerAuth/ExperienceForm';
import ICard from '../components/JobSeekerAuth/ICard';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  emailOtp: string;
  mobileOtp: string;
  jobRole: string;
  dob: string;
  aadhar: string;
  aadharFile: File | null;
  profilePic: File | null;
  certificate: File | null;
  license: File | null;
  bio: string;
  experiences: Array<{
    company: string;
    role: string;
    fromDate: string;
    toDate: string;
    tenure: string;
    lastIncome: number;
  }>;
}

const JobSeekerAuth: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    emailOtp: '',
    mobileOtp: '',
    jobRole: '',
    dob: '',
    aadhar: '',
    aadharFile: null,
    profilePic: null,
    certificate: null,
    license: null,
    bio: "",
    experiences: [],
  });
  const [logoError, setLogoError] = useState(false);

  const updateFormData = useCallback((data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const nextStep = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, 6));
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleLoginSuccess = useCallback(() => {
    alert('Login successful!');
  }, []);

  const handleLogoError = () => {
    setLogoError(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Futuristic Background Video */}
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
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743257159/6618336-uhd_3840_2160_24fps_1_qaxmgu.mp4"
          type="video/mp4"
        />
        {/* Fallback Gradient */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4b0082_0%,#1e3a8a_50%,#000000_100%)]"
          style={{ backgroundSize: '150% 150%' }}
        />
      </video>
      {!logoError && (
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743853206/Pantiss_School-Photoroom_pq3crh.png"
            alt="Pantiss School Logo"
            className="absolute top-4 left-4 h-[80px] max-w-[500px] object-contain rounded-md hover:scale-105 transition-transform duration-300 sm:top-6 sm:left-6 z-50"
            aria-hidden="true"
            data-testid="company-logo"
            onError={handleLogoError}
          />
        )}
      {/* Semi-transparent overlay for contrast */}
      <div className="absolute inset-0 bg-gray-900/50 z-5" />
      {/* Content */}
      <div className="relative z-10 max-w-lg w-full space-y-8">
        <Toaster />
        {step > 1 && <Stepper currentStep={step} />}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <LoginForm
              onSignupClick={() => setStep(2)}
              onSuccess={handleLoginSuccess}
            />
          )}
          {step === 2 && (
            <SignupForm
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <JobRoleForm
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 4 && (
            <PersonalDetailsForm
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 5 && (
            <ExperienceForm
              formData={formData}
              updateFormData={updateFormData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 6 && (
            <ICard formData={formData} onBack={prevStep} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JobSeekerAuth;