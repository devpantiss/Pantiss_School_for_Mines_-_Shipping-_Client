import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

interface BusinessLoginFormProps {
  onSignupClick: () => void;
  onSuccess: () => void;
}

export const BusinessLoginForm: React.FC<BusinessLoginFormProps> = React.memo(
  ({ onSignupClick, onSuccess }) => {
    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm({
      resolver: zodResolver(loginSchema),
      defaultValues: { email: '', password: '' },
    });

    const onSubmit = async () => {
      try {
        toast.loading('Logging in...', { style: { background: '#1f2937', color: '#e5e7eb' } });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.dismiss();
        toast.success('Login successful!', { style: { background: '#1f2937', color: '#e5e7eb' } });
        onSuccess();
      } catch {
        toast.dismiss();
        toast.error('Login failed. Please try again.', {
          style: { background: '#1f2937', color: '#e5e7eb' },
        });
      }
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
          Business Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.email ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                  placeholder="Enter your email"
                />
              )}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500">
                {errors.email.message}
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
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-4 rounded-lg hover:bg-purple-700 hover:-rotate-1 disabled:opacity-50 shadow-[0_0_12px_#7c3aed] hover:shadow-[0_0_20px_#7c3aed] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-500"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
          <p className="text-center mt-6 text-sm text-gray-400">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSignupClick}
              className="text-purple-300 hover:text-purple-400 focus:outline-none transition-colors duration-500"
            >
              Sign Up
            </button>
          </p>
        </form>
      </motion.div>
    );
  }
);