import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/experience.json";
import worker from "../../assets/work.json";

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

const JobTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("skilledWorkers");

  // Form state for "For Businesses" tab
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

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call or further logic here
  };

  return (
    <div className="bg-black py-12">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-800 mb-8">
          {["skilledWorkers", "businesses", "nanoContractors"].map((tab) => (
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
              {tab === "skilledWorkers" && "For Skilled Workers"}
              {tab === "businesses" && "For Businesses"}
              {tab === "nanoContractors" && "For Nano-Contractors"}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 glow-purple animate-underline"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {/* Skilled Workers Tab */}
          {activeTab === "skilledWorkers" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {jobRoles.map((role, index) => (
                <div
                  key={index}
                  className="job-card bg-transparent p-6 rounded-lg border-2 border-purple-600/60 shadow-lg hover:shadow-purple-600/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={role.image}
                    alt={role.title}
                    className="w-16 h-16 mb-4 mx-auto"
                    loading="lazy"
                  />
                  <div className="text-xl font-semibold text-white text-center mb-2">
                    {role.title}
                  </div>
                  <div className="text-sm text-gray-400 text-center mb-3">
                    {role.jobs}
                  </div>
                  {role.isNew && (
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full glow-purple">
                      New
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Businesses Tab */}
          {activeTab === "businesses" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <div className="bg-transparent p-8 rounded-lg border-2 border-purple-600/60 shadow-lg animate-slide-in-left">
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Post a Job
                </h2>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleFormChange}
                      placeholder="Enter company name"
                      className="w-full p-3 rounded-lg bg-transparent text-white border border-purple-600 focus:border-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="sector" className="block text-gray-300 mb-2">
                      Sector
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      value={formData.sector}
                      onChange={handleFormChange}
                      className="w-full p-3 rounded-lg bg-transparent text-white border border-purple-600 focus:border-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 transition-all"
                      required
                    >
                      <option value="">Select Sector</option>
                      {jobRoles.map((role, index) => (
                        <option key={index} value={role.title}>
                          {role.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="jobType" className="block text-gray-300 mb-2">
                      Job Type
                    </label>
                    <select
                      id="jobType"
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleFormChange}
                      className="w-full p-3 rounded-lg bg-transparent text-white border border-purple-600 focus:border-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 transition-all"
                      required
                    >
                      <option value="">Select Job Type</option>
                      <option value="Contract">Contract</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Full-time">Full-time</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-gray-300 mb-2">
                      Job Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleFormChange}
                      placeholder="Enter job description"
                      className="w-full p-3 rounded-lg bg-transparent text-white border border-purple-600 focus:border-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 transition-all h-32 resize-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="qualifications" className="block text-gray-300 mb-2">
                      Qualifications
                    </label>
                    <textarea
                      id="qualifications"
                      name="qualifications"
                      value={formData.qualifications}
                      onChange={handleFormChange}
                      placeholder="Enter qualifications"
                      className="w-full p-3 rounded-lg bg-transparent text-white border border-purple-600 focus:border-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 transition-all h-32 resize-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contactDetails" className="block text-gray-300 mb-2">
                      Contact Details
                    </label>
                    <input
                      id="contactDetails"
                      name="contactDetails"
                      type="text"
                      value={formData.contactDetails}
                      onChange={handleFormChange}
                      placeholder="Enter contact details"
                      className="w-full p-3 rounded-lg bg-transparent text-white border border-purple-600 focus:border-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-gray-300 mb-2">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleFormChange}
                      placeholder="Enter location"
                      className="w-full p-3 rounded-lg bg-transparent text-white border border-purple-600 focus:border-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-gray-300 mb-2">
                      Application Deadline
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleFormChange}
                      className="w-full p-3 rounded-lg bg-transparent text-white border border-purple-600 focus:border-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 text-white font-semibold text-lg hover:scale-105 transition-transform glow-purple"
                  >
                    Submit Job Posting
                  </button>
                </form>
              </div>

              {/* Lottie Animation */}
              <div className="hidden lg:block sticky top-8 h-[450px] justify-center items-center">
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

          {/* Nano-Contractors Tab */}
          {activeTab === "nanoContractors" && (
            <div className="text-center flex flex-col justify-center items-center animate-fade-in">
              <Player
                autoplay
                loop
                src={worker}
                style={{ height: "450px", width: "500px" }}
              />
              <p className="text-gray-300 text-lg mt-4">
                Content for Nano-Contractors goes here...
              </p>
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

        /* Slide-In Animation for Form */
        .animate-slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          animation: slide-in-left 0.8s ease-out forwards;
        }

        @keyframes slide-in-left {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Form Input Focus States */
        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
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
        }
      `}</style>
    </div>
  );
};

export default JobTabs;