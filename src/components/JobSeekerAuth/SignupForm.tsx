import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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

interface SignupFormProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const signupSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    mobile: z.string().regex(/^\d{10}$/, 'Mobile number must be 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
    emailOtp: z.string().length(6, 'Email OTP must be 6 digits'),
    mobileOtp: z.string().length(6, 'Mobile OTP must be 6 digits'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

const SignupForm: React.FC<SignupFormProps> = React.memo(({ formData, updateFormData, onNext, onBack }) => {
  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: formData,
  });

  const handleSendEmailOtp = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setEmailOtpSent(true);
      toast.success('Email OTP sent!', { style: { background: '#1f2937', color: '#e5e7eb' } });
    } catch {
      toast.error('Failed to send Email OTP.', { style: { background: '#1f2937', color: '#e5e7eb' } });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMobileOtp = async () => {
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

  const onSubmit = (data: any) => {
    updateFormData(data);
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-200 tracking-wide">Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                  errors.name ? 'border-red-500' : 'border-purple-600/30'
                } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                placeholder="Enter your name"
              />
            )}
          />
          {errors.name && <p id="name-error" className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-200 tracking-wide">Email</label>
          {!emailOtpSent ? (
            <div className="flex space-x-2">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    className={`flex-1 px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                      errors.email ? 'border-red-500' : 'border-purple-600/30'
                    } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                    placeholder="Enter your email"
                  />
                )}
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
            <Controller
              name="emailOtp"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter Email OTP"
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.emailOtp ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                  aria-invalid={!!errors.emailOtp}
                  aria-describedby="emailOtp-error"
                />
              )}
            />
          )}
          {errors.email && <p id="email-error" className="text-sm text-red-500">{errors.email.message}</p>}
          {errors.emailOtp && (
            <p id="emailOtp-error" className="text-sm text-red-500">{errors.emailOtp.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-200 tracking-wide">Mobile Number</label>
          {!mobileOtpSent ? (
            <div className="flex space-x-2">
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    className={`flex-1 px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                      errors.mobile ? 'border-red-500' : 'border-purple-600/30'
                    } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                    aria-invalid={!!errors.mobile}
                    aria-describedby="mobile-error"
                    placeholder="Enter your mobile number"
                  />
                )}
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
            <Controller
              name="mobileOtp"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter Mobile OTP"
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.mobileOtp ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                  aria-invalid={!!errors.mobileOtp}
                  aria-describedby="mobileOtp-error"
                />
              )}
            />
          )}
          {errors.mobile && <p id="mobile-error" className="text-sm text-red-500">{errors.mobile.message}</p>}
          {errors.mobileOtp && (
            <p id="mobileOtp-error" className="text-sm text-red-500">{errors.mobileOtp.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-200 tracking-wide">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                  errors.password ? 'border-red-500' : 'border-purple-600/30'
                } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                aria-invalid={!!errors.password}
                aria-describedby="password-error"
                placeholder="Enter your password"
              />
            )}
          />
          {errors.password && (
            <p id="password-error" className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-200 tracking-wide">Confirm Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-purple-600/30'
                } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                aria-invalid={!!errors.confirmPassword}
                aria-describedby="confirmPassword-error"
                placeholder="Confirm your password"
              />
            )}
          />
          {errors.confirmPassword && (
            <p id="confirmPassword-error" className="text-sm text-red-500">{errors.confirmPassword.message}</p>
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
});

export default SignupForm;