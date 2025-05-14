import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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

interface ExperienceFormProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const experienceSchema = z.object({
  experiences: z
    .array(
      z.object({
        company: z.string().min(1, 'Company name is required'),
        role: z.string().min(1, 'Role is required'),
        fromDate: z.string().refine((val) => new Date(val) < new Date(), {
          message: 'Start date must be in the past',
        }),
        toDate: z.string(),
        tenure: z.string().min(1, 'Tenure is required'),
        lastIncome: z.number().min(0, 'Income must be non-negative'),
      })
    )
    .min(1, 'At least one experience is required')
    .refine(
      (experiences) =>
        experiences.every((exp) => new Date(exp.fromDate) <= new Date(exp.toDate)),
      {
        message: 'End date must be after start date',
        path: ['experiences'],
      }
    ),
});

const fresherSchema = z.object({
  experiences: z.array(z.any()).optional(),
});

type ExperienceFormData = z.infer<typeof experienceSchema>;
type FresherFormData = z.infer<typeof fresherSchema>;
type FormDataType = ExperienceFormData | FresherFormData;

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

const ExperienceForm: React.FC<ExperienceFormProps> = React.memo(
  ({ formData, updateFormData, onNext, onBack }) => {
    const [isFresher, setIsFresher] = useState(false);

    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting },
      setValue,
      watch,
    } = useForm<FormDataType>({
      resolver: zodResolver(isFresher ? fresherSchema : experienceSchema),
      defaultValues: {
        experiences: formData.experiences.length
          ? formData.experiences
          : [{ company: '', role: '', fromDate: '', toDate: '', tenure: '', lastIncome: 0 }],
      },
    });

    const experiences = watch('experiences');

    const addExperience = () => {
      setValue('experiences', [
        ...(experiences || []),
        { company: '', role: '', fromDate: '', toDate: '', tenure: '', lastIncome: 0 },
      ]);
    };

    const removeExperience = (index: number) => {
      if (experiences) {
        setValue('experiences', experiences.filter((_, i) => i !== index));
      }
    };

    const handleFresherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setIsFresher(checked);
      if (checked) {
        setValue('experiences', []);
      } else {
        setValue('experiences', [
          { company: '', role: '', fromDate: '', toDate: '', tenure: '', lastIncome: 0 },
        ]);
      }
    };

    const onSubmit = (data: FormDataType) => {
      updateFormData({ experiences: isFresher ? [] : data.experiences });
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {!isFresher &&
            (experiences || []).map((_, index) => (
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
                    <Controller
                      name={`experiences.${index}.company`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          disabled={isFresher}
                          className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                            errors.experiences?.[index]?.company
                              ? 'border-red-500'
                              : 'border-purple-600/30'
                          } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                            isFresher ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          aria-invalid={!!errors.experiences?.[index]?.company}
                          aria-describedby={`company-error-${index}`}
                          aria-disabled={isFresher}
                          placeholder="Enter company name"
                        />
                      )}
                    />
                    {errors.experiences?.[index]?.company && (
                      <p id={`company-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].company.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      Role
                    </label>
                    <Controller
                      name={`experiences.${index}.role`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          disabled={isFresher}
                          className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                            errors.experiences?.[index]?.role
                              ? 'border-red-500'
                              : 'border-purple-600/30'
                          } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                            isFresher ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          aria-invalid={!!errors.experiences?.[index]?.role}
                          aria-describedby={`role-error-${index}`}
                          aria-disabled={isFresher}
                          placeholder="Enter your role"
                        />
                      )}
                    />
                    {errors.experiences?.[index]?.role && (
                      <p id={`role-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].role.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      From Date
                    </label>
                    <Controller
                      name={`experiences.${index}.fromDate`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="date"
                          disabled={isFresher}
                          className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                            errors.experiences?.[index]?.fromDate
                              ? 'border-red-500'
                              : 'border-purple-600/30'
                          } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                            isFresher ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          aria-invalid={!!errors.experiences?.[index]?.fromDate}
                          aria-describedby={`fromDate-error-${index}`}
                          aria-disabled={isFresher}
                          placeholder="Select start date"
                        />
                      )}
                    />
                    {errors.experiences?.[index]?.fromDate && (
                      <p id={`fromDate-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].fromDate.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      To Date
                    </label>
                    <Controller
                      name={`experiences.${index}.toDate`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="date"
                          disabled={isFresher}
                          className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                            errors.experiences?.[index]?.toDate
                              ? 'border-red-500'
                              : 'border-purple-600/30'
                          } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                            isFresher ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          aria-invalid={!!errors.experiences?.[index]?.toDate}
                          aria-describedby={`toDate-error-${index}`}
                          aria-disabled={isFresher}
                          placeholder="Select end date"
                        />
                      )}
                    />
                    {errors.experiences?.[index]?.toDate && (
                      <p id={`toDate-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].toDate.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      Tenure
                    </label>
                    <Controller
                      name={`experiences.${index}.tenure`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          value={
                            experiences[index].fromDate && experiences[index].toDate
                              ? calculateTenure(experiences[index].fromDate, experiences[index].toDate)
                              : field.value
                          }
                          disabled={isFresher}
                          className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                            errors.experiences?.[index]?.tenure
                              ? 'border-red-500'
                              : 'border-purple-600/30'
                          } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                            isFresher ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          aria-invalid={!!errors.experiences?.[index]?.tenure}
                          aria-describedby={`tenure-error-${index}`}
                          aria-disabled={isFresher}
                          placeholder="Enter tenure"
                        />
                      )}
                    />
                    {errors.experiences?.[index]?.tenure && (
                      <p id={`tenure-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].tenure.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-200 tracking-wide">
                      Last Income
                    </label>
                    <Controller
                      name={`experiences.${index}.lastIncome`}
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="number"
                          onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          disabled={isFresher}
                          className={`block w-full px-4 py-2 rounded-lg border bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 placeholder-gray-400 ${
                            errors.experiences?.[index]?.lastIncome
                              ? 'border-red-500'
                              : 'border-purple-600/30'
                          } shadow-sm focus:border-purple-600 focus:ring-purple-600 hover:shadow-[0_0_8px_#7c3aed] hover:animate-pulse transition-all duration-500 ${
                            isFresher ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          aria-invalid={!!errors.experiences?.[index]?.lastIncome}
                          aria-describedby={`lastIncome-error-${index}`}
                          aria-disabled={isFresher}
                          placeholder="Enter last income"
                        />
                      )}
                    />
                    {errors.experiences?.[index]?.lastIncome && (
                      <p id={`lastIncome-error-${index}`} className="text-sm text-red-500">
                        {errors.experiences[index].lastIncome.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          {errors.experiences && !isFresher && !errors.experiences[0] && (
            <p className="text-sm text-red-500">{errors.experiences.message}</p>
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

export default ExperienceForm;