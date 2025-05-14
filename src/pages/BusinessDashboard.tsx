import React from 'react';
import { FaSignOutAlt, FaUserTie } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Define interfaces for type safety
interface BusinessProfile {
  name: string;
  logo: string | null;
  industry: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  description: string;
  recruiterName: string;
  recruiterEmail: string;
  recruiterPhone: string;
}

interface PostedJob {
  id: string;
  title: string;
  companyName: string;
  location: string;
  postedDate: string;
  status: 'Open' | 'Closed';
}

// Static mock data
const mockProfile: BusinessProfile = {
  name: 'Tech Corp',
  logo: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746104822/Hydrocarbon-removebg-preview_nqzwz3.png',
  industry: 'Technology',
  location: 'San Francisco, CA',
  email: 'contact@techcorp.com',
  phone: '9876543210',
  website: 'https://techcorp.com',
  description: 'Tech Corp is a leading innovator in software solutions, specializing in AI and cloud computing. We are committed to building cutting-edge technology for global businesses.',
  recruiterName: 'Jane Smith',
  recruiterEmail: 'jane.smith@techcorp.com',
  recruiterPhone: '5551234567',
};

const mockPostedJobs: PostedJob[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    companyName: 'Tech Corp',
    location: 'San Francisco, CA',
    postedDate: '2025-04-20',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Backend Engineer',
    companyName: 'Tech Corp',
    location: 'New York, NY',
    postedDate: '2025-04-18',
    status: 'Open',
  },
  {
    id: '3',
    title: 'Data Scientist',
    companyName: 'Tech Corp',
    location: 'Remote',
    postedDate: '2025-04-15',
    status: 'Closed',
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    companyName: 'Tech Corp',
    location: 'San Francisco, CA',
    postedDate: '2025-04-10',
    status: 'Open',
  },
  {
    id: '5',
    title: 'Product Manager',
    companyName: 'Tech Corp',
    location: 'Austin, TX',
    postedDate: '2025-04-08',
    status: 'Open',
  },
  {
    id: '6',
    title: 'UI/UX Designer',
    companyName: 'Tech Corp',
    location: 'Remote',
    postedDate: '2025-04-05',
    status: 'Closed',
  },
  {
    id: '7',
    title: 'Mobile Developer',
    companyName: 'Tech Corp',
    location: 'San Francisco, CA',
    postedDate: '2025-04-03',
    status: 'Open',
  },
  {
    id: '8',
    title: 'QA Engineer',
    companyName: 'Tech Corp',
    location: 'Chicago, IL',
    postedDate: '2025-04-01',
    status: 'Open',
  },
];

// Main dashboard component
const BusinessDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-900 mt-16 p-4 sm:p-8">
      {/* Background gradient for futuristic effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4b0082_0%,#1e3a8a_50%,#000000_100%)] opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Scrollable */}
          <div className="lg:w-2/3 space-y-6 p-4 overflow-y-auto max-h-[calc(100vh-8rem)]">
            {/* Header with title and logout */}
            <div className="flex justify-between items-center">
              <h1
                className="text-4xl sm:text-5xl font-extrabold text-gray-200 tracking-wide"
                style={{ textShadow: '0 0 10px #7c3aed' }}
              >
                Business Profile
              </h1>
              <button
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:scale-105 hover:shadow-[0_0_20px_#7c3aed] transition-all duration-300"
                aria-label="Logout"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>

            {/* Company Profile Card */}
            <div className="relative p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <div className="flex items-center space-x-4">
                {/* Company Logo */}
                <div className="w-24 h-24 rounded-full border border-purple-600/50 shadow-[0_0_12px_#7c3aed] hover:scale-105 transition-transform duration-300 overflow-hidden">
                  {mockProfile.logo ? (
                    <img
                      src={mockProfile.logo}
                      alt={`${mockProfile.name} logo`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
                      <span className="text-sm">No logo</span>
                    </div>
                  )}
                </div>
                <div>
                  <h2
                    className="text-3xl font-bold text-gray-200"
                    style={{ textShadow: '0 0 5px #7c3aed' }}
                  >
                    {mockProfile.name}
                  </h2>
                  <p className="text-lg text-purple-400">{mockProfile.industry}</p>
                  <p className="text-gray-400">{mockProfile.location}</p>
                  <p className="text-gray-400">{mockProfile.email} | {mockProfile.phone}</p>
                  <a
                    href={mockProfile.website}
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mockProfile.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Posted Jobs Section */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <h2
                className="text-3xl font-bold text-gray-200 mb-6"
                style={{ textShadow: '0 0 5px #7c3aed' }}
              >
                Posted Jobs
              </h2>
              {mockPostedJobs.length > 0 ? (
                <div className="max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
                    {mockPostedJobs.map((job) => (
                      <div
                        key={job.id}
                        className="p-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_15px_#7c3aed] hover:scale-105 hover:shadow-[0_0_20px_#7c3aed] transition-all duration-300 cursor-pointer"
                        onClick={() => navigate('/job-search-engine/job/applicants')}
                        role="button"
                        tabIndex={0}
                        aria-label={`View applicants for ${job.title}`}
                        onKeyDown={(e) => e.key === 'Enter' && navigate('/job-search-engine/job/applicants')}
                      >
                        <h3 className="text-xl font-semibold text-gray-200">{job.title}</h3>
                        <p className="text-gray-400">{job.companyName}</p>
                        <p className="text-gray-400">{job.location}</p>
                        <p className="text-gray-400">Posted: {job.postedDate}</p>
                        <span
                          className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                            job.status === 'Open'
                              ? 'bg-green-600/30 text-green-400'
                              : 'bg-red-600/30 text-red-400'
                          }`}
                        >
                          {job.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">No jobs posted yet. Start posting to attract talent!</p>
              )}
            </div>
          </div>

          {/* Right Column: Static About and Recruiter Details */}
          <div className="lg:w-1/3 w-full max-w-[400px] space-y-6">
            {/* About Section */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center space-x-2">
                <span>About</span>
              </h3>
              <p className="text-gray-400">{mockProfile.description}</p>
            </div>

            {/* Recruiter Details Section */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center space-x-2">
                <FaUserTie className="text-purple-400" />
                <span>Recruiter Details</span>
              </h3>
              <div className="space-y-2">
                <p className="text-gray-200 font-medium">{mockProfile.recruiterName}</p>
                <p className="text-gray-400">{mockProfile.recruiterEmail}</p>
                <p className="text-gray-400">{mockProfile.recruiterPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;