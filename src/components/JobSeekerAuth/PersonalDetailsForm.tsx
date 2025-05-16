import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FilePreview from './FilePreview';

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
  dob?: string;
  aadhar?: string;
  aadharFile?: string;
  profilePic?: string;
  certificate?: string;
  license?: string;
  bio?: string;
}

interface PersonalDetailsFormProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const calculateAge = (dob: string): string => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return `${age} years`;
};

const calculateWordCount = (text: string): number => {
  return text.trim().split(/\s+/).filter(Boolean).length;
};

export const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = React.memo(
  ({ formData, updateFormData, onNext, onBack }) => {
    const [localFormData, setLocalFormData] = useState<Partial<FormData>>({
      dob: formData.dob || '',
      aadhar: formData.aadhar || '',
      aadharFile: formData.aadharFile || null,
      profilePic: formData.profilePic || null,
      certificate: formData.certificate || null,
      license: formData.license || null,
      bio: formData.bio || '',
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
      const newErrors: Errors = {};
      let isValid = true;

      if (!localFormData.dob) {
        newErrors.dob = 'Date of birth is required';
        isValid = false;
      } else if (new Date(localFormData.dob) >= new Date()) {
        newErrors.dob = 'Date of birth must be in the past';
        isValid = false;
      }
      if (!localFormData.aadhar) {
        newErrors.aadhar = 'Aadhar number is required';
        isValid = false;
      } else if (!/^\d{12}$/.test(localFormData.aadhar)) {
        newErrors.aadhar = 'Aadhar number must be 12 digits';
        isValid = false;
      }
      if (!localFormData.aadharFile) {
        newErrors.aadharFile = 'Aadhar file is required';
        isValid = false;
      }
      if (!localFormData.profilePic) {
        newErrors.profilePic = 'Profile picture is required';
        isValid = false;
      }
      if (!localFormData.certificate) {
        newErrors.certificate = 'Certificate is required';
        isValid = false;
      }
      if (!localFormData.license) {
        newErrors.license = 'License is required';
        isValid = false;
      }
      if (!localFormData.bio) {
        newErrors.bio = 'Bio is required';
        isValid = false;
      } else if (calculateWordCount(localFormData.bio) > 700) {
        newErrors.bio = 'Bio must not exceed 700 words';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setLocalFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (
      name: 'aadharFile' | 'profilePic' | 'certificate' | 'license',
      file: File | null
    ) => {
      setLocalFormData((prev) => ({ ...prev, [name]: file }));
    };

    const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;
      setIsSubmitting(true);
      updateFormData(localFormData);
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
          Personal Details
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={localFormData.dob || ''}
              onChange={handleInputChange}
              className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                errors.dob ? 'border-red-500' : 'border-purple-600/30'
              } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
              aria-invalid={!!errors.dob}
              aria-describedby="dob-error"
            />
            {localFormData.dob && (
              <motion.p
                className="text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Age: {calculateAge(localFormData.dob)}
              </motion.p>
            )}
            {errors.dob && <p id="dob-error" className="text-sm text-red-500">{errors.dob}</p>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Aadhar Number
            </label>
            <input
              name="aadhar"
              value={localFormData.aadhar || ''}
              onChange={handleInputChange}
              className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                errors.aadhar ? 'border-red-500' : 'border-purple-600/30'
              } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
              aria-invalid={!!errors.aadhar}
              aria-describedby="aadhar-error"
              placeholder="Enter 12-digit Aadhar number"
            />
            {errors.aadhar && <p id="aadhar-error" className="text-sm text-red-500">{errors.aadhar}</p>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">Bio</label>
            <textarea
              name="bio"
              value={localFormData.bio || ''}
              onChange={handleInputChange}
              rows={6}
              className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                errors.bio ? 'border-red-500' : 'border-purple-600/30'
              } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 resize-y`}
              aria-invalid={!!errors.bio}
              aria-describedby="bio-error"
              placeholder="Describe your background, skills, and interests (max 700 words)"
            />
            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Words: {calculateWordCount(localFormData.bio || '')}/700
            </motion.p>
            {errors.bio && <p id="bio-error" className="text-sm text-red-500">{errors.bio}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                Aadhar Card Upload
              </label>
              <FilePreview
                file={localFormData.aadharFile ?? null}
                onRemove={() => handleFileChange('aadharFile', null)}
                onChange={(file) => handleFileChange('aadharFile', file)}
              />
              {errors.aadharFile && (
                <p id="aadharFile-error" className="text-sm text-red-500">{errors.aadharFile}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                Profile Picture Upload
              </label>
              <FilePreview
                file={localFormData.profilePic ?? null}
                onRemove={() => handleFileChange('profilePic', null)}
                onChange={(file) => handleFileChange('profilePic', file)}
              />
              {errors.profilePic && (
                <p id="profilePic-error" className="text-sm text-red-500">{errors.profilePic}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                Certificate Upload
              </label>
              <FilePreview
                file={localFormData.certificate ?? null}
                onRemove={() => handleFileChange('certificate', null)}
                onChange={(file) => handleFileChange('certificate', file)}
              />
              {errors.certificate && (
                <p id="certificate-error" className="text-sm text-red-500">{errors.certificate}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                License Upload
              </label>
              <FilePreview
                file={localFormData.license || null}
                onRemove={() => handleFileChange('license', null)}
                onChange={(file) => handleFileChange('license', file)}
              />
              {errors.license && (
                <p id="license-error" className="text-sm text-red-500">{errors.license}</p>
              )}
            </div>
          </div>
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