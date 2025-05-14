import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/experience.json";

// Define types for job roles
interface JobRole {
  title: string;
  jobs: string;
  image: string;
  isNew: boolean;
}

// Job roles data
const jobRoles: JobRole[] = [
  {
    title: "Work from Home",
    jobs: "159 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/workfromhome.svg",
    isNew: true,
  },
  {
    title: "Accountant",
    jobs: "297 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Accountant.svg",
    isNew: false,
  },
  {
    title: "BPO / Customer Care",
    jobs: "2924 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/BPO_Telecallers.svg",
    isNew: false,
  },
  {
    title: "Data Entry / Back Office",
    jobs: "1039 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Data_entry_Back_office.svg",
    isNew: false,
  },
  {
    title: "Sales / Marketing",
    jobs: "1095 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Sales.svg",
    isNew: false,
  },
  {
    title: "Receptionist / Front Office",
    jobs: "133 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Receptionist_Front_office.svg",
    isNew: false,
  },
  {
    title: "Hospitality Executives",
    jobs: "97 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Hospitality_Executives.svg",
    isNew: false,
  },
  {
    title: "Delivery",
    jobs: "26 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Delivery_boy.svg",
    isNew: false,
  },
  {
    title: "Cook / Chef",
    jobs: "14 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Cook.svg",
    isNew: false,
  },
  {
    title: "Driver",
    jobs: "2 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Driver.svg",
    isNew: false,
  },
  {
    title: "Beauticians / Spa",
    jobs: "10 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Beauticians.svg",
    isNew: false,
  },
  {
    title: "Mechanic",
    jobs: "157 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Mechanic.svg",
    isNew: true,
  },
  {
    title: "IT Software Engineer",
    jobs: "5482 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/IT-Software.svg",
    isNew: true,
  },
  {
    title: "Retail / Store Executive",
    jobs: "55 Active Jobs",
    image:
      "https://d3isa0ssinyrxx.cloudfront.net/images/design/logos/role_icons/Retail.svg",
    isNew: false,
  },
];

const RegistrationTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("whyHireThroughUs");
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    jobType: "",
    description: "",
    qualifications: "",
    contactDetails: "",
    location: "",
    date: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.sector) newErrors.sector = "Sector is required";
    if (!formData.jobType) newErrors.jobType = "Job type is required";
    if (!formData.description.trim())
      newErrors.description = "Job description is required";
    if (!formData.qualifications.trim())
      newErrors.qualifications = "Qualifications are required";
    if (!formData.contactDetails.trim())
      newErrors.contactDetails = "Contact details are required";
    if (!formData.location.trim())
      newErrors.location = "Location is required";
    if (!formData.date) newErrors.date = "Application deadline is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Add API call or further logic here
    }
  };

  return (
    <div className="bg-black py-12">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-800 mb-8">
          {["whyHireThroughUs", "formula", "registration"].map((tab) => (
            <button
              key={tab}
              className={`relative px-6 py-3 font-semibold text-lg transition-colors duration-300 ${
                activeTab === tab
                  ? "text-purple-600 glow-purple"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
              aria-selected={activeTab === tab}
              role="tab"
            >
              {tab === "whyHireThroughUs" && "Why Hire Through Us?"}
              {tab === "formula" && "Our Formula"}
              {tab === "registration" && "Registration Form"}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 glow-purple animate-underline"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {/* Why Hire Through Us Tab */}
          {activeTab === "whyHireThroughUs" && (
            <div className="bg-black rounded-2xl shadow-md p-6 md:p-8 space-y-6 border-2 border-purple-600">
              <h2 className="text-2xl font-bold text-gray-100 text-center">
                Why Hire Blue-Collar Talent Through Us?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    ),
                    title: "Verified Skills",
                    description: "Certified workers with proven blue-collar expertise.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                      </svg>
                    ),
                    title: "Fast Recruitment",
                    description: "Quickly fill roles with reliable local talent.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h3l-4 4-4-4h3V7z" />
                      </svg>
                    ),
                    title: "Reliable Workforce",
                    description: "Dependable workers for consistent performance.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.4-3 5h2c0-2.6 3-2 3-5 0-2.21-1.79-4-4-4z" />
                      </svg>
                    ),
                    title: "Cost-Effective",
                    description: "Affordable hiring for small and large businesses.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    ),
                    title: "Local Talent Pool",
                    description: "Access skilled workers in your area.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.01L3 11v2h18v-1.99zM3 3h18v2H3V3zm0 12h18v2H3v-2zm0 4h18v2H3v-2zm0-8h18v2H3v-2z" />
                      </svg>
                    ),
                    title: "Streamlined Process",
                    description: "Simplified hiring for blue-collar roles.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="job-card bg-purple-600/10 p-6 rounded-lg text-center hover:bg-purple-600/20 transition-all"
                  >
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-black ring-2 ring-purple-600 rounded-lg text-center">
                <p className="text-gray-100 font-medium">
                  <span className="text-purple-600 font-bold">
                    Join 500+ businesses
                  </span>{" "}
                  hiring skilled blue-collar talent with us.
                </p>
                <button className="mt-3 px-6 py-2 text-white bg-purple-600 hover:bg-green-700 rounded-full font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          )}

          {/* Our Formula Tab */}
          {activeTab === "formula" && (
            <div className="bg-black rounded-2xl shadow-md p-6 md:p-8 space-y-6 border-2 border-purple-600">
              <h2 className="text-2xl font-bold text-gray-100 text-center">
                Our Formula for Blue-Collar Hiring Success
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    ),
                    title: "Skill Verification",
                    description: "Rigorous checks ensure workers’ qualifications.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    ),
                    title: "Targeted Matching",
                    description: "Connect with workers suited for your needs.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    ),
                    title: "Local Recruitment",
                    description: "Source talent from nearby communities.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                      </svg>
                    ),
                    title: "Streamlined Hiring",
                    description: "Efficient process from posting to onboarding.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0  Machiavelli
2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                    ),
                    title: "Worker Support",
                    description: "Ongoing assistance for hired talent.",
                  },
                  {
                    icon: (
                      <svg
                        className="w-12 h-12 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    ),
                    title: "Performance Tracking",
                    description: "Monitor hiring success with analytics.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="job-card bg-purple-600/10 p-6 rounded-lg text-center hover:bg-purple-600/20 transition-all"
                  >
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-black ring-2 ring-purple-600 rounded-lg text-center">
                <p className="text-gray-100 font-medium">
                  <span className="text-purple-600 font-bold">
                    Trusted by 500+ businesses
                  </span>{" "}
                  to deliver skilled blue-collar talent.
                </p>
                <button className="mt-3 px-6 py-2 text-white bg-purple-600 hover:bg-green-700 rounded-full font-semibold">
                  Explore Hiring Options
                </button>
              </div>
            </div>
          )}

          {/* Registration Tab */}
          {activeTab === "registration" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="bg-gray-900/50 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg border border-purple-600/30">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Post a Blue-Collar Job
                </h2>
                <form
                  onSubmit={handleFormSubmit}
                  className="space-y-6"
                  noValidate
                  aria-label="Job Posting Form"
                >
                  {/* Company Information */}
                  <fieldset className="space-y-4">
                    <legend className="text-lg font-semibold text-gray-200 mb-2">
                      Company Information
                    </legend>
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleFormChange}
                        placeholder="Enter company name"
                        className={`w-full p-3 rounded-lg bg-gray-800/50 text-white border ${
                          errors.companyName
                            ? "border-red-500"
                            : "border-gray-600"
                        } focus:border-purple-600 focus:ring-2 focus:ring-purple-600/50 transition-all`}
                        aria-invalid={!!errors.companyName}
                        aria-describedby={
                          errors.companyName ? "companyName-error" : undefined
                        }
                        required
                      />
                      {errors.companyName && (
                        <p
                          id="companyName-error"
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.companyName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contactDetails"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Contact Details
                      </label>
                      <input
                        id="contactDetails"
                        name="contactDetails"
                        type="text"
                        value={formData.contactDetails}
                        onChange={handleFormChange}
                        placeholder="Enter contact email or phone"
                        className={`w-full p-3 rounded-lg bg-gray-800/50 text-white border ${
                          errors.contactDetails
                            ? "border-red-500"
                            : "border-gray-600"
                        } focus:border-purple-600 focus:ring-2 focus:ring-purple-600/50 transition-all`}
                        aria-invalid={!!errors.contactDetails}
                        aria-describedby={
                          errors.contactDetails
                            ? "contactDetails-error"
                            : undefined
                        }
                        required
                      />
                      {errors.contactDetails && (
                        <p
                          id="contactDetails-error"
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.contactDetails}
                        </p>
                      )}
                    </div>
                  </fieldset>

                  {/* Job Details */}
                  <fieldset className="space-y-4">
                    <legend className="text-lg font-semibold text-gray-200 mb-2">
                      Job Details
                    </legend>
                    <div>
                      <label
                        htmlFor="sector"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Sector
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleFormChange}
                        className={`w-full p-3 rounded-lg bg-gray-800/50 text-white border ${
                          errors.sector ? "border-red-500" : "border-gray-600"
                        } focus:border-purple-600 focus:ring-2 focus:ring-purple-600/50 transition-all appearance-none`}
                        aria-invalid={!!errors.sector}
                        aria-describedby={errors.sector ? "sector-error" : undefined}
                        required
                      >
                        <option value="">Select Sector</option>
                        {jobRoles.map((role, index) => (
                          <option key={index} value={role.title}>
                            {role.title}
                          </option>
                        ))}
                      </select>
                      {errors.sector && (
                        <p id="sector-error" className="text-red-500 text-xs mt-1">
                          {errors.sector}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="jobType"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Job Type
                      </label>
                      <select
                        id="jobType"
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleFormChange}
                        className={`w-full p-3 rounded-lg bg-gray-800/50 text-white border ${
                          errors.jobType ? "border-red-500" : "border-gray-600"
                        } focus:border-purple-600 focus:ring-2 focus:ring-purple-600/50 transition-all appearance-none`}
                        aria-invalid={!!errors.jobType}
                        aria-describedby={
                          errors.jobType ? "jobType-error" : undefined
                        }
                        required
                      >
                        <option value="">Select Job Type</option>
                        <option value="Contract">Contract</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Full-time">Full-time</option>
                      </select>
                      {errors.jobType && (
                        <p id="jobType-error" className="text-red-500 text-xs mt-1">
                          {errors.jobType}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Location
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleFormChange}
                        placeholder="Enter job location"
                        className={`w-full p-3 rounded-lg bg-gray-800/50 text-white border ${
                          errors.location ? "border-red-500" : "border-gray-600"
                        } focus:border-purple-600 focus:ring-2 focus:ring-purple-600/50 transition-all`}
                        aria-invalid={!!errors.location}
                        aria-describedby={
                          errors.location ? "location-error" : undefined
                        }
                        required
                      />
                      {errors.location && (
                        <p
                          id="location-error"
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.location}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Application Deadline
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleFormChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={`w-full p-3 rounded-lg bg-gray-800/50 text-white border ${
                          errors.date ? "border-red-500" : "border-gray-600"
                        } focus:border-purple-600 focus:ring-2 focus:ring-purple-600/50 transition-all`}
                        aria-invalid={!!errors.date}
                        aria-describedby={errors.date ? "date-error" : undefined}
                        required
                      />
                      {errors.date && (
                        <p id="date-error" className="text-red-500 text-xs mt-1">
                          {errors.date}
                        </p>
                      )}
                    </div>
                  </fieldset>

                  {/* Job Description and Qualifications */}
                  <fieldset className="space-y-4">
                    <legend className="text-lg font-semibold text-gray-200 mb-2">
                      Job Requirements
                    </legend>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Job Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleFormChange}
                        placeholder="Describe the job role and responsibilities"
                        className={`w-full p-3 rounded-lg bg-gray-800/50 text-white border ${
                          errors.description
                            ? "border-red-500"
                            : "border-gray-600"
                        } focus:border-purple-600 focus:ring-2 focus:ring-purple-600/50 transition-all h-24 resize-none`}
                        aria-invalid={!!errors.description}
                        aria-describedby={
                          errors.description ? "description-error" : undefined
                        }
                        required
                      />
                      {errors.description && (
                        <p
                          id="description-error"
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.description}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="qualifications"
                        className="block text-sm font-medium text-gray-200 mb-1"
                      >
                        Qualifications
                      </label>
                      <textarea
                        id="qualifications"
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleFormChange}
                        placeholder="List required skills or experience"
                        className={`w-full p-3 rounded-lg bg-gray-800/50 text-white border ${
                          errors.qualifications
                            ? "border-red-500"
                            : "border-gray-600"
                        } focus:border-purple-600 focus:ring-2 focus:ring-purple-600/50 transition-all h-24 resize-none`}
                        aria-invalid={!!errors.qualifications}
                        aria-describedby={
                          errors.qualifications
                            ? "qualifications-error"
                            : undefined
                        }
                        required
                      />
                      {errors.qualifications && (
                        <p
                          id="qualifications-error"
                          className="text-red-500 text-xs mt-1"
                        >
                          {errors.qualifications}
                        </p>
                      )}
                    </div>
                  </fieldset>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold text-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-600/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={Object.keys(errors).length > 0}
                  >
                    Submit Job Posting
                  </button>
                </form>
              </div>

              {/* Lottie Animation */}
              <div className="hidden lg:block sticky top-8 h-[450px] flex justify-center items-center">
                <div className="relative">
                  {/* SVG Decorations */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="88"
                    height="88"
                    viewBox="0 0 88 88"
                    fill="none"
                    className="absolute -right-6 -top-6 w-16 h-16"
                  >
                    <path
                      d="M88 88V43.9944V0H44.0056H0V43.9944H44.0056V88H88Z"
                      fill="#4B3F72"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="290"
                    height="305"
                    viewBox="0 0 290 305"
                    fill="none"
                    className="absolute -right-0 top-0 w-72 h-72"
                  >
                    <path
                      d="M289.5 289V144.5V0H144.979H0.5V144.5H144.979V289H289.5Z"
                      fill="#9333ea"
                    />
                    <line
                      x1="187.363"
                      y1="2.5"
                      x2="187.363"
                      y2="302.5"
                      stroke="#4B3F72"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="240.6"
                      y1="2.5"
                      x2="240.6"
                      y2="302.5"
                      stroke="#4B3F72"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="189.645"
                      y1="60.9077"
                      x2="237.881"
                      y2="60.9077"
                      stroke="#4B3F72"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="189.645"
                      y1="108.263"
                      x2="237.881"
                      y2="108.263"
                      stroke="#4B3F72"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="189.645"
                      y1="155.619"
                      x2="237.881"
                      y2="155.619"
                      stroke="#4B3F72"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="189.645"
                      y1="202.973"
                      x2="237.881"
                      y2="202.973"
                      stroke="#4B3F72"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="189.645"
                      y1="250.329"
                      x2="237.881"
                      y2="250.329"
                      stroke="#4B3F72"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <Player
                    autoplay
                    loop
                    src={animation}
                    style={{ height: "450px", width: "500px" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scoped CSS for Futuristic Design */}
      <style>{`
        /* Purple Color Definitions */
        :root {
          --purple-600: #9333ea;
          --purple-700: #7e22ce;
        }

        /* Purple Glow Effect */
        .glow-purple {
          text-shadow: 0 0 10px var(--purple-600), 0 0 20px var(--purple-600);
          box-shadow: 0 0 10px var(--purple-600), 0 0 20px var(--purple-600);
        }

        /* Job Card Styling */
        .job-card {
          backdrop-filter: blur(5px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .job-card:hover {
          transform: translateY(-5px);
        }

        /* Animated Underline for Tabs */
        .animate-underline {
          animation: underline 0.5s ease-in-out forwards;
        }

        @keyframes underline {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        /* Fade-In Animation */
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }

        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }

        /* Form Styling */
        input,
        select,
        textarea {
          transition: all 0.3s ease;
        }

        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
        }

        /* Custom Select Arrow */
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1.5em;
        }

        /* Responsive Design */
        @media (max-width: 640px) {
          .job-card {
            padding: 1rem;
          }

          .job-card img {
            width: 3rem;
            height: 3rem;
          }

          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RegistrationTab;