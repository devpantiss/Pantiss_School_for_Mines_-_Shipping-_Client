import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

interface BusinessFormData {
  recruiterName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  emailOtp: string;
  phoneOtp: string;
  companyName: string;
  companyLogo: File | null;
  profilePic: File | null;
  location: string;
  numberOfEmployees: number;
  companyDescription: string;
  address: string;
  website: string;
}

const signupSchema = z
  .object({
    recruiterName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
    emailOtp: z.string().length(6, 'Email OTP must be 6 digits'),
    phoneOtp: z.string().length(6, 'Phone OTP must be 6 digits'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

interface BusinessSignupFormProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const BusinessSignupForm: React.FC<BusinessSignupFormProps> = React.memo(
  ({ formData, updateFormData, onNext, onBack }) => {
    const [emailOtpSent, setEmailOtpSent] = useState(false);
    const [phoneOtpSent, setPhoneOtpSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm({
      resolver: zodResolver(signupSchema),
      defaultValues: {
        recruiterName: formData.recruiterName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        emailOtp: formData.emailOtp,
        phoneOtp: formData.phoneOtp,
      },
    });

    const handleSendEmailOtp = async () => {
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

    const handleSendPhoneOtp = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPhoneOtpSent(true);
        toast.success('Phone OTP sent!', {
          style: { background: '#1f2937', color: '#e5e7eb' },
        });
      } catch {
        toast.error('Failed to send Phone OTP.', {
          style: { background: '#1f2937', color: '#e5e7eb' },
        });
      } finally {
        setIsLoading(false);
      }
    };

    const onSubmit = (data: Partial<BusinessFormData>) => {
      updateFormData(data);
      onNext();
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="p-6 sm:p-8 rounded-xl border border-purple-600/30 bg-gradient-to-br from-gray-900 to-gray-800 shadow-[0_0_25px_#7c3aed]"
      >
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-gray-200 tracking-wide"
          style={{ textShadow: '0 0 5px #7c3aed' }}
        >
          Business Signup
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Recruiter Name
            </label>
            <Controller
              name="recruiterName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.recruiterName ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.recruiterName}
                  aria-describedby="recruiterName-error"
                  placeholder="Enter your name"
                />
              )}
            />
            {errors.recruiterName && (
              <p id="recruiterName-error" className="text-sm text-red-500">
                {errors.recruiterName.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Email
            </label>
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
                      } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
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
                    } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                    aria-invalid={!!errors.emailOtp}
                    aria-describedby="emailOtp-error"
                  />
                )}
              />
            )}
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
            {errors.emailOtp && (
              <p id="emailOtp-error" className="text-sm text-red-500">
                {errors.emailOtp.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Phone Number
            </label>
            {!phoneOtpSent ? (
              <div className="flex space-x-2">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      className={`flex-1 px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                        errors.phone ? 'border-red-500' : 'border-purple-600/30'
                      } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                      aria-invalid={!!errors.phone}
                      aria-describedby="phone-error"
                      placeholder="Enter your phone number"
                    />
                  )}
                />
                <button
                  type="button"
                  onClick={handleSendPhoneOtp}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:-rotate-1 disabled:opacity-50 shadow-[0_0_10px_#7c3aed] hover:shadow-[0_0_15px_#7c3aed] transition-all duration-500"
                >
                  {isLoading ? 'Sending...' : 'Send OTP'}
                </button>
              </div>
            ) : (
              <Controller
                name="phoneOtp"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Enter Phone OTP"
                    className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                      errors.phoneOtp ? 'border-red-500' : 'border-purple-600/30'
                    } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                    aria-invalid={!!errors.phoneOtp}
                    aria-describedby="phoneOtp-error"
                  />
                )}
              />
            )}
            {errors.phone && (
              <p id="phone-error" className="text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
            {errors.phoneOtp && (
              <p id="phoneOtp-error" className="text-sm text-red-500">
                {errors.phoneOtp.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.password ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.password}
                  aria-describedby="password-error"
                  placeholder="Enter your password"
                />
              )}
            />
            {errors.password && (
              <p id="password-error" className="text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Confirm Password
            </label>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.confirmPassword ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.confirmPassword}
                  aria-describedby="confirmPassword-error"
                  placeholder="Confirm your password"
                />
              )}
            />
            {errors.confirmPassword && (
              <p id="confirmPassword-error" className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
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