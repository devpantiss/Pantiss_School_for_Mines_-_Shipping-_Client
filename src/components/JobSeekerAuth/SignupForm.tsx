import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

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
  name?: string;
  email?: string;
  mobile?: string;
  password?: string;
  confirmPassword?: string;
  emailOtp?: string;
  mobileOtp?: string;
}

interface SignupFormProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const SignupForm: React.FC<SignupFormProps> = React.memo(
  ({ formData, updateFormData, onNext, onBack }) => {
    const [emailOtpSent, setEmailOtpSent] = useState(false);
    const [mobileOtpSent, setMobileOtpSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [localFormData, setLocalFormData] = useState<Partial<FormData>>({
      name: formData.name || '',
      email: formData.email || '',
      mobile: formData.mobile || '',
      password: formData.password || '',
      confirmPassword: formData.confirmPassword || '',
      emailOtp: formData.emailOtp || '',
      mobileOtp: formData.mobileOtp || '',
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
      const newErrors: Errors = {};
      let isValid = true;

      if (!localFormData.name || localFormData.name.length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
        isValid = false;
      }
      if (!localFormData.email) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localFormData.email)) {
        newErrors.email = 'Invalid email address';
        isValid = false;
      }
      if (!localFormData.mobile) {
        newErrors.mobile = 'Mobile number is required';
        isValid = false;
      } else if (!/^\d{10}$/.test(localFormData.mobile)) {
        newErrors.mobile = 'Mobile number must be 10 digits';
        isValid = false;
      }
      if (!localFormData.password) {
        newErrors.password = 'Password is required';
        isValid = false;
      } else if (localFormData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
      }
      if (!localFormData.confirmPassword) {
        newErrors.confirmPassword = 'Confirm password is required';
        isValid = false;
      } else if (localFormData.password !== localFormData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords must match';
        isValid = false;
      }
      if (emailOtpSent && (!localFormData.emailOtp || localFormData.emailOtp.length !== 6)) {
        newErrors.emailOtp = 'Email OTP must be 6 digits';
        isValid = false;
      }
      if (mobileOtpSent && (!localFormData.mobileOtp || localFormData.mobileOtp.length !== 6)) {
        newErrors.mobileOtp = 'Mobile OTP must be 6 digits';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLocalFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSendEmailOtp = async () => {
      if (!localFormData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localFormData.email)) {
        setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
        return;
      }
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setEmailOtpSent(true);
        toast.success('Email OTP sent!', { style: { background: '#1f2937', color: '#e5e7eb' } });
      } catch {
        toast.error('Failed to send Email OTP.', {
          style: { background: '#1f2937', color: '#e5e7eb' },
        });
      } finally {
        setIsLoading(false);
      }
    };

    const handleSendMobileOtp = async () => {
      if (!localFormData.mobile || !/^\d{10}$/.test(localFormData.mobile)) {
        setErrors((prev) => ({ ...prev, mobile: 'Mobile number must be 10 digits' }));
        return;
      }
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setMobileOtpSent(true);
        toast.success('Mobile OTP sent!', { style: { background: '#1f2937', color: '#e5e7eb' } });
      } catch {
        toast.error('Failed to send Mobile OTP.', { style: { background: '#1f2937', color: '#e5e7eb' } });
      } finally {
        setIsLoading(false);
      }
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
          Create Account
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">Name</label>
            <input
              name="name"
              value={localFormData.name || ''}
              onChange={handleInputChange}
              className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                errors.name ? 'border-red-500' : 'border-purple-600/30'
              } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
              placeholder="Enter your name"
            />
            {errors.name && <p id="name-error" className="text-sm text-red-500">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">Email</label>
            {!emailOtpSent ? (
              <div className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  value={localFormData.email || ''}
                  onChange={handleInputChange}
                  className={`flex-1 px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.email ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  onClick={handleSendEmailOtp}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:-rotate-1 disabled:opacity-50 shadow-[0_0_10px_#7c3aed] hover:shadow-[0_0_15px_#7c3aed] transition-all duration-500"
                >
                  {isLoading ? 'Sending...' : 'Send OTP'}
                </button>
              </div>
            ) : (
              <input
                name="emailOtp"
                value={localFormData.emailOtp || ''}
                onChange={handleInputChange}
                placeholder="Enter Email OTP"
                className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                  errors.emailOtp ? 'border-red-500' : 'border-purple-600/30'
                } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                aria-invalid={!!errors.emailOtp}
                aria-describedby="emailOtp-error"
              />
            )}
            {errors.email && <p id="email-error" className="text-sm text-red-500">{errors.email}</p>}
            {errors.emailOtp && (
              <p id="emailOtp-error" className="text-sm text-red-500">{errors.emailOtp}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Mobile Number
            </label>
            {!mobileOtpSent ? (
              <div className="flex space-x-2">
                <input
                  type="tel"
                  name="mobile"
                  value={localFormData.mobile || ''}
                  onChange={handleInputChange}
                  className={`flex-1 px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.mobile ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                  aria-invalid={!!errors.mobile}
                  aria-describedby="mobile-error"
                  placeholder="Enter your mobile number"
                />
                <button
                  type="button"
                  onClick={handleSendMobileOtp}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:-rotate-1 disabled:opacity-50 shadow-[0_0_10px_#7c3aed] hover:shadow-[0_0_15px_#7c3aed] transition-all duration-500"
                >
                  {isLoading ? 'Sending...' : 'Send OTP'}
                </button>
              </div>
            ) : (
              <input
                name="mobileOtp"
                value={localFormData.mobileOtp || ''}
                onChange={handleInputChange}
                placeholder="Enter Mobile OTP"
                className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                  errors.mobileOtp ? 'border-red-500' : 'border-purple-600/30'
                } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                aria-invalid={!!errors.mobileOtp}
                aria-describedby="mobileOtp-error"
              />
            )}
            {errors.mobile && <p id="mobile-error" className="text-sm text-red-500">{errors.mobile}</p>}
            {errors.mobileOtp && (
              <p id="mobileOtp-error" className="text-sm text-red-500">{errors.mobileOtp}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={localFormData.password || ''}
              onChange={handleInputChange}
              className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                errors.password ? 'border-red-500' : 'border-purple-600/30'
              } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
              aria-invalid={!!errors.password}
              aria-describedby="password-error"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p id="password-error" className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={localFormData.confirmPassword || ''}
              onChange={handleInputChange}
              className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                errors.confirmPassword ? 'border-red-500' : 'border-purple-600/30'
              } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
              aria-invalid={!!errors.confirmPassword}
              aria-describedby="confirmPassword-error"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p id="confirmPassword-error" className="text-sm text-red-500">{errors.confirmPassword}</p>
            )}
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