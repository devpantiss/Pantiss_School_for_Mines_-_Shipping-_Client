import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

interface BusinessLoginFormProps {
  onSignupClick: () => void;
  onSuccess: () => void;
}

interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export const BusinessLoginForm: React.FC<BusinessLoginFormProps> = React.memo(
  ({ onSignupClick, onSuccess }) => {
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
      const newErrors: Errors = {};
      let isValid = true;

      if (!formData.email) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
        isValid = false;
      }

      if (!formData.password) {
        newErrors.password = 'Password is required';
        isValid = false;
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsSubmitting(true);
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
      } finally {
        setIsSubmitting(false);
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
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                errors.email ? 'border-red-500' : 'border-purple-600/30'
              } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                errors.password ? 'border-red-500' : 'border-purple-600/30'
              } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
              aria-invalid={!!errors.password}
              aria-describedby="password-error"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p id="password-error" className="text-sm text-red-500">
                {errors.password}
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