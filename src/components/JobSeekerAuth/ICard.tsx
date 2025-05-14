import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


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

interface ICardProps {
  formData: FormData;
  onBack: () => void;
}

const calculateAge = (dob: string): string => {
  if (!dob) return 'N/A';
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return `${age} years`;
};

const calculateTotalExperience = (experiences: FormData['experiences']): string => {
  if (!experiences.length) return '0 years';
  const totalYears = experiences.reduce((sum, exp) => {
    const years = parseFloat(exp.tenure) || 0;
    return sum + years;
  }, 0);
  return `${totalYears.toFixed(1)} years`;
};

const ICard: React.FC<ICardProps> = React.memo(({ formData, onBack }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    toast.success('Details confirmed!', { style: { background: '#1f2937', color: '#e5e7eb' } });
    setIsConfirmed(true);
  };

  const handleGoToProfile = () => {
    alert('Navigating to profile...');
    navigate('/job-search-engine/job-seekers/profile');
    // Implement navigation logic here (e.g., use React Router)
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="p-6 sm:p-8 rounded-xl border border-purple-600/50 bg-gradient-to-br from-gray-900 to-gray-800 shadow-[0_0_20px_#7c3aed] max-w-md mx-auto"
      aria-label="User I-Card"
      data-testid="icard"
    >
      <article className="space-y-6">
        {/* Profile Picture */}
        {formData.profilePic ? (
          <img
            src={URL.createObjectURL(formData.profilePic)}
            alt={`${formData.name}'s profile picture`}
            className="w-32 h-32 object-cover rounded-full mx-auto border-2 border-purple-600 shadow-[0_0_10px_#7c3aed] hover:scale-105 transition-transform duration-300"
            data-testid="profile-pic"
          />
        ) : (
          <div
            className="w-32 h-32 rounded-full mx-auto bg-gray-700 flex items-center justify-center text-gray-400 border-2 border-purple-600 shadow-[0_0_10px_#7c3aed]"
            data-testid="profile-pic-placeholder"
          >
            No Image
          </div>
        )}
        {/* Name and Designation */}
        <div className="text-center">
          <h2
            className="text-3xl font-extrabold text-gray-200 tracking-tight"
            style={{ textShadow: '0 0 5px #7c3aed' }}
            data-testid="name"
          >
            {formData.name || 'N/A'}
          </h2>
          <p
            className="text-xl font-semibold text-purple-400 mt-1"
            style={{ textShadow: '0 0 3px #7c3aed' }}
            data-testid="designation"
          >
            {formData.jobRole || 'N/A'}
          </p>
        </div>
        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
          <div data-testid="email">
            <span className="font-medium text-gray-200">Email:</span>{' '}
            {formData.email || 'N/A'}
          </div>
          <div data-testid="mobile">
            <span className="font-medium text-gray-200">Phone:</span>{' '}
            {formData.mobile || 'N/A'}
          </div>
          <div data-testid="age">
            <span className="font-medium text-gray-200">Age:</span>{' '}
            {calculateAge(formData.dob)}
          </div>
          <div data-testid="experience">
            <span className="font-medium text-gray-200">Experience:</span>{' '}
            {calculateTotalExperience(formData.experiences)}
          </div>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-700 hover:-rotate-2 shadow-[0_0_8px_#7c3aed] hover:shadow-[0_0_15px_#7c3aed] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300"
            aria-label="Go back to previous step"
            data-testid="back-button"
          >
            Back
          </button>
          {!isConfirmed ? (
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:-rotate-2 shadow-[0_0_10px_#7c3aed] hover:shadow-[0_0_20px_#7c3aed] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300"
              aria-label="Confirm I-Card details"
              data-testid="confirm-button"
            >
              Confirm
            </button>
          ) : (
            <button
              type="button"
              onClick={handleGoToProfile}
              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:-rotate-2 shadow-[0_0_10px_#7c3aed] hover:shadow-[0_0_20px_#7c3aed] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300"
              aria-label="Go to user profile"
              data-testid="profile-button"
            >
              Go to Profile
            </button>
          )}
        </div>
      </article>
    </motion.section>
  );
});

export default ICard;