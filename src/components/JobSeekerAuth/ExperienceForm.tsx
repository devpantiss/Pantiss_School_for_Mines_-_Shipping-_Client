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
  experiences?: Array<{
    company?: string;
    role?: string;
    fromDate?: string;
    toDate?: string;
    tenure?: string;
    lastIncome?: string;
  }>;
  general?: string;
}

interface ExperienceFormProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const calculateTenure = (fromDate: string, toDate: string): string => {
  const start = new Date(fromDate);
  const end = new Date(toDate);
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  const yearText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthText = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';
  return [yearText, monthText].filter(Boolean).join(', ') || '0 months';
};

export const ExperienceForm: React.FC<ExperienceFormProps> = React.memo(
  ({ formData, updateFormData, onNext, onBack }) => {
    const [isFresher, setIsFresher] = useState(false);
    const [experiences, setExperiences] = useState(
      formData.experiences.length
        ? formData.experiences
        : isFresher
        ? []
        : [{ company: '', role: '', fromDate: '', toDate: '', tenure: '', lastIncome: 0 }]
    );
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
      if (isFresher) return true;

      const newErrors: Errors = { experiences: [] };
      let isValid = true;

      if (!experiences.length) {
        newErrors.general = 'At least one experience is required';
        isValid = false;
      }

      experiences.forEach((exp, index) => {
        const expErrors: Errors['experiences'] = [{}];
        if (!exp.company) {
          expErrors[0].company = 'Company name is required';
          isValid = false;
        }
        if (!exp.role) {
          expErrors[0].role = 'Role is required';
          isValid = false;
        }
        if (!exp.fromDate) {
          expErrors[0].fromDate = 'Start date is required';
          isValid = false;
        } else if (new Date(exp.fromDate) >= new Date()) {
          expErrors[0].fromDate = 'Start date must be in the past';
          isValid = false;
        }
        if (!exp.toDate) {
          expErrors[0].toDate = 'End date is required';
          isValid = false;
        } else if (new Date(exp.fromDate) > new Date(exp.toDate)) {
          expErrors[0].toDate = 'End date must be after start date';
          isValid = false;
        }
        if (!exp.tenure) {
          expErrors[0].tenure = 'Tenure is required';
          isValid = false;
        }
        if (exp.lastIncome < 0) {
          expErrors[0].lastIncome = 'Income must be non-negative';
          isValid = false;
        }
        newErrors.experiences![index] = expErrors[0];
      });

      setErrors(newErrors);
      return isValid;
    };

    const addExperience = () => {
      setExperiences((prev) => [
        ...prev,
        { company: '', role: '', fromDate: '', toDate: '', tenure: '', lastIncome: 0 },
      ]);
    };

    const removeExperience = (index: number) => {
      setExperiences((prev) => prev.filter((_, i) => i !== index));
    };

    const handleFresherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setIsFresher(checked);
      setExperiences(checked ? [] : [{ company: '', role: '', fromDate: '', toDate: '', tenure: '', lastIncome: 0 }]);
    };

    const handleInputChange = (
      index: number,
      field: keyof FormData['experiences'][0],
      value: string | number
    ) => {
      setExperiences((prev) => {
        const updated = [...prev];
        updated[index] = { ...updated[index], [field]: value };
        if (field === 'fromDate' || field === 'toDate') {
          if (updated[index].fromDate && updated[index].toDate) {
            updated[index].tenure = calculateTenure(updated[index].fromDate, updated[index].toDate);
          }
        }
        return updated;
      });
    };

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;
      setIsSubmitting(true);
      updateFormData({ experiences });
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
          className="text-5xl font-extrabold text-center mb-4 text-gray-200 tracking-wide"
          style={{ textShadow: '0 0 5px #7c3aed' }}
        >
          Work Experience
        </h2>
        <div className="flex items-center justify-center mb-6">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isFresher}
              onChange={handleFresherChange}
              className="w-5 h-5 rounded border-purple-600 bg-gray-800 text-purple-600 focus:ring-purple-500 focus:ring-offset-2 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-300"
              aria-label="I'm a fresher, no work experience"
            />
            <span className="text-lg text-gray-200 font-medium">I'm a Fresher</span>
          </label>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          {!isFresher &&
            experiences.map((exp, index) => (
              <div key={index} className="space-y-4 border-b border-purple-600/30 pb-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-200 tracking-wide">
                    Experience {index + 1}
                  </h3>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeExperience(index)}
                      className="text-purple-300 hover:text-purple-400 transition-colors duration-500"
                      aria-label={`Remove experience ${index + 1}`}
                    >
                      ✕
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      Company
                    </label>
                    <input
                      value={exp.company}
                      onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                      disabled={isFresher}
                      className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                        errors.experiences?.[index]?.company ? 'border-red-500' : 'border-purple-600/30'
                      } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                        isFresher ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      aria-invalid={!!errors.experiences?.[index]?.company}
                      aria-describedby={`company-error-${index}`}
                      placeholder="Enter company name"
                    />
                    {errors.experiences?.[index]?.company && (
                      <p id={`company-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].company}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      Role
                    </label>
                    <input
                      value={exp.role}
                      onChange={(e) => handleInputChange(index, 'role', e.target.value)}
                      disabled={isFresher}
                      className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                        errors.experiences?.[index]?.role ? 'border-red-500' : 'border-purple-600/30'
                      } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                        isFresher ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      aria-invalid={!!errors.experiences?.[index]?.role}
                      aria-describedby={`role-error-${index}`}
                      placeholder="Enter your role"
                    />
                    {errors.experiences?.[index]?.role && (
                      <p id={`role-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].role}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      From Date
                    </label>
                    <input
                      type="date"
                      value={exp.fromDate}
                      onChange={(e) => handleInputChange(index, 'fromDate', e.target.value)}
                      disabled={isFresher}
                      className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                        errors.experiences?.[index]?.fromDate ? 'border-red-500' : 'border-purple-600/30'
                      } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                        isFresher ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      aria-invalid={!!errors.experiences?.[index]?.fromDate}
                      aria-describedby={`fromDate-error-${index}`}
                      placeholder="Select start date"
                    />
                    {errors.experiences?.[index]?.fromDate && (
                      <p id={`fromDate-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].fromDate}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      To Date
                    </label>
                    <input
                      type="date"
                      value={exp.toDate}
                      onChange={(e) => handleInputChange(index, 'toDate', e.target.value)}
                      disabled={isFresher}
                      className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                        errors.experiences?.[index]?.toDate ? 'border-red-500' : 'border-purple-600/30'
                      } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                        isFresher ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      aria-invalid={!!errors.experiences?.[index]?.toDate}
                      aria-describedby={`toDate-error-${index}`}
                      placeholder="Select end date"
                    />
                    {errors.experiences?.[index]?.toDate && (
                      <p id={`toDate-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].toDate}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      Tenure
                    </label>
                    <input
                      value={exp.tenure}
                      disabled
                      className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                        errors.experiences?.[index]?.tenure ? 'border-red-500' : 'border-purple-600/30'
                      } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 opacity-50 cursor-not-allowed`}
                      aria-invalid={!!errors.experiences?.[index]?.tenure}
                      aria-describedby={`tenure-error-${index}`}
                      placeholder="Enter tenure"
                    />
                    {errors.experiences?.[index]?.tenure && (
                      <p id={`tenure-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].tenure}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      Last Income
                    </label>
                    <input
                      type="number"
                      value={exp.lastIncome}
                      onChange={(e) => handleInputChange(index, 'lastIncome', parseFloat(e.target.value) || 0)}
                      disabled={isFresher}
                      className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                        errors.experiences?.[index]?.lastIncome ? 'border-red-500' : 'border-purple-600/30'
                      } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                        isFresher ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      aria-invalid={!!errors.experiences?.[index]?.lastIncome}
                      aria-describedby={`lastIncome-error-${index}`}
                      placeholder="Enter last income"
                    />
                    {errors.experiences?.[index]?.lastIncome && (
                      <p id={`lastIncome-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].lastIncome}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          {errors.general && !isFresher && (
            <p className="text-sm text-red-500">{errors.general}</p>
          )}
          {!isFresher && (
            <button
              type="button"
              onClick={addExperience}
              disabled={isFresher}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:-rotate-1 shadow-[0_0_10px_#7c3aed] hover:shadow-[0_0_15px_#7c3aed] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Another Experience
            </button>
          )}
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