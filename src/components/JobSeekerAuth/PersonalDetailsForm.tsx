import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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

interface PersonalDetailsFormProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const personalDetailsSchema = z.object({
  dob: z.string().refine(
    (val) => {
      const date = new Date(val);
      const today = new Date();
      return date < today;
    },
    { message: 'Date of birth must be in the past' }
  ),
  aadhar: z.string().regex(/^\d{12}$/, 'Aadhar number must be 12 digits'),
  aadharFile: z.instanceof(File, { message: 'Aadhar file is required' }),
  profilePic: z.instanceof(File, { message: 'Profile picture is required' }),
  certificate: z.instanceof(File, { message: 'Certificate is required' }),
  license: z.instanceof(File, { message: 'License is required' }),
  bio: z.string().min(1, 'Bio is required').refine(
    (val) => {
      const words = val.trim().split(/\s+/).filter(Boolean);
      return words.length <= 700;
    },
    { message: 'Bio must not exceed 700 words' }
  ),
});

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

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = React.memo(
  ({ formData, updateFormData, onNext, onBack }) => {
    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
      setValue,
      watch,
    } = useForm({
      resolver: zodResolver(personalDetailsSchema),
      defaultValues: {
        dob: formData.dob,
        aadhar: formData.aadhar,
        aadharFile: formData.aadharFile,
        profilePic: formData.profilePic,
        certificate: formData.certificate,
        license: formData.license,
        bio: formData.bio || '',
      },
    });

    const dob = watch('dob');
    const bio = watch('bio');

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
          Personal Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">Date of Birth</label>
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="date"
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.dob ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                  aria-invalid={!!errors.dob}
                  aria-describedby="dob-error"
                />
              )}
            />
            {dob && (
              <motion.p
                className="text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Age: {calculateAge(dob)}
              </motion.p>
            )}
            {errors.dob && <p id="dob-error" className="text-sm text-red-500">{errors.dob.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">Aadhar Number</label>
            <Controller
              name="aadhar"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.aadhar ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500`}
                  aria-invalid={!!errors.aadhar}
                  aria-describedby="aadhar-error"
                  placeholder="Enter 12-digit Aadhar number"
                />
              )}
            />
            {errors.aadhar && <p id="aadhar-error" className="text-sm text-red-500">{errors.aadhar.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-200 tracking-wide">Bio</label>
            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={6}
                  className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                    errors.bio ? 'border-red-500' : 'border-purple-600/30'
                  } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 resize-y`}
                  aria-invalid={!!errors.bio}
                  aria-describedby="bio-error"
                  placeholder="Describe your background, skills, and interests (max 700 words)"
                />
              )}
            />
            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Words: {calculateWordCount(bio)}/700
            </motion.p>
            {errors.bio && <p id="bio-error" className="text-sm text-red-500">{errors.bio.message}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">Aadhar Card Upload</label>
              <Controller
                name="aadharFile"
                control={control}
                render={({ field }) => (
                  <FilePreview
                    file={field.value}
                    onRemove={() => setValue('aadharFile', null)}
                    onChange={(file) => setValue('aadharFile', file)}
                  />
                )}
              />
              {errors.aadharFile && (
                <p id="aadharFile-error" className="text-sm text-red-500">{errors.aadharFile.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">Profile Picture Upload</label>
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
                <p id="profilePic-error" className="text-sm text-red-500">{errors.profilePic.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">Certificate Upload</label>
              <Controller
                name="certificate"
                control={control}
                render={({ field }) => (
                  <FilePreview
                    file={field.value}
                    onRemove={() => setValue('certificate', null)}
                    onChange={(file) => setValue('certificate', file)}
                  />
                )}
              />
              {errors.certificate && (
                <p id="certificate-error" className="text-sm text-red-500">{errors.certificate.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-200 tracking-wide">License Upload</label>
              <Controller
                name="license"
                control={control}
                render={({ field }) => (
                  <FilePreview
                    file={field.value}
                    onRemove={() => setValue('license', null)}
                    onChange={(file) => setValue('license', file)}
                  />
                )}
              />
              {errors.license && (
                <p id="license-error" className="text-sm text-red-500">{errors.license.message}</p>
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
});

export default PersonalDetailsForm;