import React, { useState } from 'react';
import { FaSignOutAlt, FaBriefcase, FaTools, FaFileAlt, FaTimes } from 'react-icons/fa';

// Define interfaces for type safety
interface JobSeekerProfile {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  skills: string;
  experience: string;
  profilePic: string | null;
  resume: string | null;
  aadhar: string | null;
  certificate: string | null;
  license: string | null;
}

interface AppliedJob {
  id: string;
  jobTitle: string;
  companyName: string;
  applicationDate: string;
  status: 'Pending' | 'Interview' | 'Rejected' | 'Offered';
}

// Static mock data
const mockProfile: JobSeekerProfile = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  phone: '1234567890',
  location: 'New York, NY',
  skills: 'JavaScript, React, Tailwind, TypeScript',
  experience: '3 years as a Frontend Developer at Tech Corp',
  profilePic: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746537708/WhatsApp_Image_2025-02-04_at_2.08.31_AM_ltit4p.jpg',
  resume: 'john_doe_resume.pdf',
  aadhar: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746537708/aadhar_card_dpuepx.png',
  certificate: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746537708/certificate_ykmadu.jpg',
  license: 'https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746537711/licence_onmghe.png',
};

const mockAppliedJobs: AppliedJob[] = [
  {
    id: '1',
    jobTitle: 'Frontend Developer',
    companyName: 'Tech Corp',
    applicationDate: '2025-04-20',
    status: 'Pending',
  },
  {
    id: '2',
    jobTitle: 'Full Stack Engineer',
    companyName: 'Innovate Inc.',
    applicationDate: '2025-04-15',
    status: 'Interview',
  },
  {
    id: '3',
    jobTitle: 'UI/UX Designer',
    companyName: 'Design Studio',
    applicationDate: '2025-04-10',
    status: 'Rejected',
  },
  {
    id: '4',
    jobTitle: 'Backend Developer',
    companyName: 'Data Solutions',
    applicationDate: '2025-04-08',
    status: 'Offered',
  },
  {
    id: '5',
    jobTitle: 'DevOps Engineer',
    companyName: 'Cloud Inc.',
    applicationDate: '2025-04-05',
    status: 'Pending',
  },
  {
    id: '6',
    jobTitle: 'Product Manager',
    companyName: 'Innovate Inc.',
    applicationDate: '2025-04-03',
    status: 'Interview',
  },
  {
    id: '7',
    jobTitle: 'Graphic Designer',
    companyName: 'Creative Studio',
    applicationDate: '2025-04-01',
    status: 'Rejected',
  },
  {
    id: '8',
    jobTitle: 'Mobile Developer',
    companyName: 'App Corp',
    applicationDate: '2025-03-30',
    status: 'Offered',
  },
];

// Main dashboard component
const JobSeekersDashboard: React.FC = () => {
  // Split skills for tag display
  const skillsArray = mockProfile.skills.split(', ').map((skill) => skill.trim());

  // State for modal
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Open modal with image
  const openModal = (image: string) => {
    setModalImage(image);
  };

  // Close modal
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 mt-16 p-4 sm:p-8">
      {/* Background gradient for futuristic effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4b0082_0%,#1e3a8a_50%,#000000_100%)] opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Scrollable */}
          <div className="lg:w-2/3 space-y-6 overflow-y-auto px-4 py-4 max-h-[calc(100vh-8rem)]">
            {/* Header with title and logout */}
            <div className="flex justify-between items-center">
              <h1
                className="text-4xl sm:text-5xl font-extrabold text-gray-200 tracking-wide"
                style={{ textShadow: '0 0 10px #7c3aed' }}
              >
                Profile
              </h1>
              <button
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg hover:bg-purple-700 hover:scale-105 hover:shadow-[0_0_20px_#7c3aed] transition-all duration-300"
                aria-label="Logout"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>

            {/* Profile Header Card */}
            <div className="relative p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <div className="flex items-center space-x-4">
                {/* Profile Picture */}
                <div className="w-24 h-24 rounded-full border border-purple-600/50 shadow-[0_0_12px_#7c3aed] hover:scale-105 transition-transform duration-300 overflow-hidden">
                  {mockProfile.profilePic ? (
                    <img
                      src={mockProfile.profilePic}
                      alt="Profile picture"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
                      <span className="text-sm">No profile picture</span>
                    </div>
                  )}
                </div>
                <div>
                  <h2
                    className="text-3xl font-bold text-gray-200"
                    style={{ textShadow: '0 0 5px #7c3aed' }}
                  >
                    {mockProfile.fullName}
                  </h2>
                  <p className="text-lg text-purple-400">
                    Frontend Developer | {mockProfile.skills.split(', ')[0]}
                  </p>
                  <p className="text-gray-400">{mockProfile.location}</p>
                  <p className="text-gray-400">{mockProfile.email} | {mockProfile.phone}</p>
                </div>
              </div>
              {/* Resume Link */}
              {mockProfile.resume && (
                <div className="mt-4">
                  <p className="text-sm text-gray-200">Resume</p>
                  <span className="text-gray-400">{mockProfile.resume}</span>
                </div>
              )}
            </div>

            {/* Experience Section */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center space-x-2">
                <FaBriefcase className="text-purple-400" />
                <span>Experience</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-200 font-medium">{mockProfile.experience}</p>
                </div>
              </div>
            </div>

            {/* Documents Section */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center space-x-2">
                <FaFileAlt className="text-purple-400" />
                <span>Documents</span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-200">Aadhar</p>
                  {mockProfile.aadhar ? (
                    <img
                      src={mockProfile.aadhar}
                      alt="Aadhar card"
                      className="w-32 h-20 object-cover rounded border border-purple-600/50 shadow-[0_0_8px_#7c3aed] mt-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => mockProfile.aadhar && openModal(mockProfile.aadhar)}
                    />
                  ) : (
                    <p className="text-gray-400 mt-2">Not uploaded</p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-200">Certificate</p>
                  {mockProfile.certificate ? (
                    <img
                      src={mockProfile.certificate}
                      alt="Certificate"
                      className="w-32 h-20 object-cover rounded border border-purple-600/50 shadow-[0_0_8px_#7c3aed] mt-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => mockProfile.certificate && openModal(mockProfile.certificate)}
                    />
                  ) : (
                    <p className="text-gray-400 mt-2">Not uploaded</p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-gray-200">License</p>
                  {mockProfile.license ? (
                    <img
                      src={mockProfile.license}
                      alt="License"
                      className="w-32 h-20 object-cover rounded border border-purple-600/50 shadow-[0_0_8px_#7c3aed] mt-2 cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => mockProfile.license && openModal(mockProfile.license)}
                    />
                  ) : (
                    <p className="text-gray-400 mt-2">Not uploaded</p>
                  )}
                </div>
              </div>
            </div>

            {/* Applied Jobs Section */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <h2
                className="text-3xl font-bold text-gray-200 mb-6"
                style={{ textShadow: '0 0 5px #7c3aed' }}
              >
                Track Your Applied Jobs
              </h2>
              {mockAppliedJobs.length > 0 ? (
                <div className="overflow-x-auto max-h-96 overflow-y-auto">
                  <table className="w-full text-left text-gray-200">
                    <thead className="sticky top-0 bg-gradient-to-r from-gray-800 to-gray-900">
                      <tr>
                        <th className="p-3 text-sm font-semibold">Job Title</th>
                        <th className="p-3 text-sm font-semibold">Company</th>
                        <th className="p-3 text-sm font-semibold">Application Date</th>
                        <th className="p-3 text-sm font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockAppliedJobs.map((job) => (
                        <tr
                          key={job.id}
                          className="border-b border-purple-600/30 hover:bg-gray-800/50 transition-all duration-300"
                        >
                          <td className="p-3">{job.jobTitle}</td>
                          <td className="p-3">{job.companyName}</td>
                          <td className="p-3">{job.applicationDate}</td>
                          <td className="p-3">
                            <span
                              className={`px-3 py-1.5 rounded-full text-sm font-medium shadow-[0_0_8px_#7c3aed] ${
                                job.status === 'Pending'
                                  ? 'bg-yellow-600/30 text-yellow-400 hover:bg-yellow-600/40'
                                  : job.status === 'Interview'
                                  ? 'bg-blue-600/30 text-blue-400 hover:bg-blue-600/40'
                                  : job.status === 'Rejected'
                                  ? 'bg-red-600/30 text-red-400 hover:bg-red-600/40'
                                  : 'bg-green-60/30 text-green-400 hover:bg-green-600/40'
                              } transition-colors duration-300`}
                            >
                              {job.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-400">No jobs applied yet. Start applying to track your progress!</p>
              )}
            </div>
          </div>

          {/* Right Column: Static About and Skills */}
          <div className="lg:w-1/3 w-full max-w-[400px] space-y-6">
            {/* About Section */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center space-x-2">
                <span>About</span>
              </h3>
              <p className="text-gray-400">
                {mockProfile.experience}. Skilled in {mockProfile.skills}, with a passion for building
                user-friendly and performant web applications in a fast-paced environment.
              </p>
            </div>

            {/* Skills Section */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-600/30 shadow-[0_0_25px_#7c3aed]">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center space-x-2">
                <FaTools className="text-purple-400" />
                <span>Skills</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsArray.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm hover:bg-purple-600/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Image Zoom */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-gray-900/80 flex items-center justify-center z-50"
          onClick={closeModal}
          role="dialog"
          aria-label="Image zoom modal"
        >
          <div
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-purple-600/30 shadow-[0_0_25px_#7c3aed] max-w-3xl w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-200 hover:text-purple-400 transition-colors duration-300"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes size={24} />
            </button>
            <img
              src={modalImage}
              alt="Zoomed document"
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default JobSeekersDashboard;