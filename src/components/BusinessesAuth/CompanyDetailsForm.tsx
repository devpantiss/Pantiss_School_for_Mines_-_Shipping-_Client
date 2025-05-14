import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { FilePreview } from '../BusinessesAuth/FilePreview';

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
  numberOfEmployees: string;
  companyDescription: string;
  address: string;
  website: string;
}

const companyDetailsSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  companyLogo: z.instanceof(File, { message: 'Company logo is required' }),
  profilePic: z.instanceof(File, { message: 'Profile picture is required' }),
  location: z.string().min(1, 'Location is required'),
  numberOfEmployees: z.enum(['0-10', '10-50', '50-100', '100-500', '500-1000', '1000+'], {
    errorMap: (_issue, _ctx) => ({ message: 'Employee range is required' }),
  }),
  companyDescription: z.string().min(10, 'Description must be at least 10 characters'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  website: z.string().url('Invalid URL'),
});

interface CompanyDetailsFormProps {
  formData: BusinessFormData;
  updateFormData: (data: Partial<BusinessFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const CompanyDetailsForm: React.FC<CompanyDetailsFormProps> = React.memo(
  ({ formData, updateFormData, onNext, onBack }) => {
    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
      setValue,
    } = useForm({
      resolver: zodResolver(companyDetailsSchema),
      defaultValues: {
        companyName: formData.companyName,
        companyLogo: formData.companyLogo,
        profilePic: formData.profilePic,
        location: formData.location,
        numberOfEmployees: formData.numberOfEmployees || '',
        companyDescription: formData.companyDescription,
        address: formData.address,
        website: formData.website,
      },
    });

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
          Company Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Company Name
            </label>
            <Controller
              name="companyName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.companyName ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.companyName}
                  aria-describedby="companyName-error"
                  placeholder="Enter company name"
                />
              )}
            />
            {errors.companyName && (
              <p id="companyName-error" className="text-sm text-red-500">
                {errors.companyName.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                Company Logo
              </label>
              <Controller
                name="companyLogo"
                control={control}
                render={({ field }) => (
                  <FilePreview
                    file={field.value}
                    onRemove={() => setValue('companyLogo', null)}
                    onChange={(file) => setValue('companyLogo', file)}
                  />
                )}
              />
              {errors.companyLogo && (
                <p id="companyLogo-error" className="text-sm text-red-500">
                  {errors.companyLogo.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                Profile Picture
              </label>
              <Controller
                name="profilePic"
                control={control}
                render={({ field }) => (
                  <FilePreview
                    file={field.value}
                    onRemove={() => setValue('profilePic', null)}
                    onChange={(file) => setValue('profilePic', file)}
                  />
                )}
              />
              {errors.profilePic && (
                <p id="profilePic-error" className="text-sm text-red-500">
                  {errors.profilePic.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Location
            </label>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.location ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.location}
                  aria-describedby="location-error"
                  placeholder="Enter city or region"
                />
              )}
            />
            {errors.location && (
              <p id="location-error" className="text-sm text-red-500">
                {errors.location.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Number of Employees
            </label>
            <Controller
              name="numberOfEmployees"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.numberOfEmployees ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.numberOfEmployees}
                  aria-describedby="numberOfEmployees-error"
                >
                  <option value="" disabled>
                    Select employee range
                  </option>
                  <option value="0-10">0-10</option>
                  <option value="10-50">10-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100-500">100-500</option>
                  <option value="500-1000">500-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              )}
            />
            {errors.numberOfEmployees && (
              <p id="numberOfEmployees-error" className="text-sm text-red-500">
                {errors.numberOfEmployees.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Company Description
            </label>
            <Controller
              name="companyDescription"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.companyDescription ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.companyDescription}
                  aria-describedby="companyDescription-error"
                  placeholder="Describe your company"
                  rows={4}
                />
              )}
            />
            {errors.companyDescription && (
              <p id="companyDescription-error" className="text-sm text-red-500">
                {errors.companyDescription.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Address
            </label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.address ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.address}
                  aria-describedby="address-error"
                  placeholder="Enter company address"
                />
              )}
            />
            {errors.address && (
              <p id="address-error" className="text-sm text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">
              Website Link
            </label>
            <Controller
              name="website"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="url"
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.website ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] transition-all duration-500`}
                  aria-invalid={!!errors.website}
                  aria-describedby="website-error"
                  placeholder="Enter company website"
                />
              )}
            />
            {errors.website && (
              <p id="website-error" className="text-sm text-red-500">
                {errors.website.message}
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
              {isSubmitting ? 'Processing...' : 'Submit'}
            </button>
          </div>
        </form>
      </motion.div>
    );
  }
);