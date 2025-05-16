import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

interface Errors {
  jobRole?: string;
}

interface JobRoleFormProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const JobRoleForm: React.FC<JobRoleFormProps> = React.memo(
  ({ formData, updateFormData, onNext, onBack }) => {
    const jobRoles = [
      { name: 'Software Engineer', icon: '💻' },
      { name: 'Product Manager', icon: '📊' },
      { name: 'Designer', icon: '🎨' },
      { name: 'Data Analyst', icon: '📈' },
    ];
    const [jobRole, setJobRole] = useState(formData.jobRole || '');
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
      const newErrors: Errors = {};
      let isValid = true;

      if (!jobRole) {
        newErrors.jobRole = 'Please select a job role';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    const handleRoleChange = (role: string) => {
      setJobRole(role);
    };

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;
      setIsSubmitting(true);
      updateFormData({ jobRole });
      setIsSubmitting(false);
      onNext();
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-xl border border-purple-600/30 bg-gradient-to-br from-gray-900 to-gray-800 shadow-[0_0_25px_#7c3aed]"
      >
        <h2
          className="text-5xl font-extrabold text-center mb-8 text-gray-200 tracking-wide"
          style={{ textShadow: '0 0 5px #7c3aed' }}
        >
          Choose Your Role
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {jobRoles.map((role) => (
              <div
                key={role.name}
                onClick={() => handleRoleChange(role.name)}
                className={`p-8 rounded-xl border bg-gradient-to-br from-gray-800 to-purple-900/30 cursor-pointer flex items-center space-x-4 transition-all duration-500 ${
                  jobRole === role.name
                    ? 'border-2 border-purple-600 shadow-[0_0_15px_#7c3aed] animate-pulse'
                    : 'border-purple-600/30 hover:-rotate-2 hover:scale-105 hover:shadow-[0_0_10px_#7c3aed]'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleRoleChange(role.name)}
                aria-label={`Select ${role.name}`}
              >
                <span className="text-4xl">{role.icon}</span>
                <span className="text-sm font-bold text-gray-200 tracking-wide">{role.name}</span>
              </div>
            ))}
          </div>
          {errors.jobRole && <p className="text-sm text-red-500">{errors.jobRole}</p>}
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 py-3 px-4 rounded-lg hover:bg-gray-700 hover:-rotate-1 shadow-[0_0_8px_#7c3aed] hover:shadow-[0_0_12px_#7c3aed] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-500"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-4 rounded-lg hover:bg-purple-700 hover:-rotate-1 disabled:opacity-50 shadow-[0_0_12px_#7c3aed] hover:shadow-[0_0_20px_#7c3aed] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-500"
            >
              {isSubmitting ? 'Processing...' : 'Next'}
            </button>
          </div>
        </form>
      </motion.div>
    );
  }
);