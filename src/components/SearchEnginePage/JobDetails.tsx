import React from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// Define the Job interface for TypeScript
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  qualification: string;
  salary: string;
  postedOn: string;
  jobType: string;
  gender: string;
  function: string;
  pwd: string;
  description: string[];
  type: string;
  contactPerson: string;
  email: string;
  phone: string;
  website: string;
  address: string;
}

// Sample job data (replace with API call in a real app)
const jobData: Job = {
  id: "1",
  title:
    "Multipurpose Assistant-Furniture Production and Installation: Machine Shop",
  company: "Furniture & Fittings Skill Council",
  location: "Nashik",
  experience: "0-1 Years",
  qualification: "Below 10th",
  salary: "1.8 - 2.4 INR P.A.",
  postedOn: "Mar 28, 2025",
  jobType: "Full Time",
  gender: "Both Male & Female",
  function: "Others",
  pwd: "No",
  description: [
    "This opportunity is with a leading furniture manufacturing company based in Nashik, recognized for its excellence and innovation in the industry, offering a dynamic work environment and growth potential for its employees.",
    "1) Assist in interpreting work dockets, and recce of work area/work site",
    "2) Assist in compiling list of the required materials, tools, and equipment, and arranging it",
    "3) Assist in setting up the work area as per the required operation",
    "4) Follow health, safety, and greening practices at the worksite and managing it",
    "5) Should possess good Employability Skills",
    "6) Assist in machine shop operations & general maintenance",
  ],
  type: "Furniture & Fittings",
  contactPerson: "Shivani Jaiswal",
  email: "shivani.jaiswal@ffsc.in",
  phone: "88xxxxxx74",
  website: "https://ffsc.in/",
  address:
    "407-408, 4th Floor DLF City Court, Sikanderpur, Mehrauli-Gurgaon Rd",
};

// Social media links (for sharing)
const socialLinks = [
  {
    name: "WhatsApp",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    url: "#",
  },
  {
    name: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733561.png",
    url: "#",
  },
  {
    name: "Twitter",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    url: "#",
  },
];

const JobDetails: React.FC = () => {
  // In a real app, fetch job data using useParams and an API
  // const { id } = useParams<{ id: string }>();
  const job = jobData; // Replace with API fetch based on id

  if (!job) {
    return <div className="text-center py-10 text-gray-600">Job not found</div>;
  }

  return (
    <div className="min-h-screen relative bg-transparent mt-12 py-10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743257159/6618336-uhd_3840_2160_24fps_1_qaxmgu.mp4"
          type="video/webm"
        />
        {/* <source
          src="https://www.videvo.net/videvo_files/converted/2016_12/preview/160228_Workshop_1080p.mp472287.mp4"
          type="video/mp4"
        /> */}
      </video>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-50"></div>

      <div className="container bg-transparent mx-auto z-10 px-4 max-w-7xl">
        {/* Header Section */}
        <div className="bg-purple-600 text-white p-6 rounded-t-lg shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
          <p className="text-sm mt-2 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.243l-4.243-4.243m0 0L9.172 7.757M12 12l4.243 4.243m0 0L12 12zm0 0l-4.243 4.243m4.243-4.243L7.757 16.243M12 12L7.757 7.757m4.243 4.243L16.243 7.757M12 21a9 9 0 100-18 9 9 0 000 18z"
              />
            </svg>
            Location(s): {job.location}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-transparent p-6 rounded-b-lg shadow-md flex flex-col lg:flex-row gap-6">
          {/* Job Details Section */}
          <div className="flex-1">
            {/* Job Details Card */}
            <div className="border border-gray-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">
                Job Details
              </h2>
              <h3 className="text-lg font-medium text-gray-100 mb-2">
                {job.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center text-white">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.243l-4.243-4.243m0 0L9.172 7.757M12 12l4.243 4.243m0 0L12 12zm0 0l-4.243 4.243m4.243-4.243L7.757 16.243M12 12L7.757 7.757m4.243 4.243L16.243 7.757M12 21a9 9 0 100-18 9 9 0 000 18z"
                    />
                  </svg>
                  Location(s): {job.location}
                </div>
                <div className="flex items-center text-white">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Exp: {job.experience}
                </div>
                <div className="flex items-center text-white">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332-.477-4.5-1.253"
                    />
                  </svg>
                  Qualification: {job.qualification}
                </div>
                <div className="flex items-center text-white">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 1v22M17 5H9a3 3 0 100 6h6a3 3 0 110 6H7" />
                  </svg>
                  Salary: {job.salary}
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-50">
                <p>Posted On: {job.postedOn}</p>
                <p className="mt-1">
                  Job Type: {job.jobType} | Gender: {job.gender} | Function:{" "}
                  {job.function} | PWD: {job.pwd}
                </p>
              </div>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Apply
              </button>
            </div>

            {/* Job Description Card */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">
                Job Description
              </h2>
              <p className="text-gray-50 mb-4">{job.description[0]}</p>
              <ul className="list-decimal pl-5 space-y-2 text-gray-50">
                {job.description.slice(1).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Details Section */}
          <div className="lg:w-1/3">
            <div className="border border-gray-200 rounded-lg p-6 sticky top-4">
              <div className="flex items-center mb-4">
                <img
                  src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743255049/ffsclogo_txufun.svg" // Replace with actual company logo
                  alt={`${job.company} logo`}
                  className="w-12 h-12 mr-3"
                />
                <div>
                  <h3 className="text-lg font-semibold text-purple-600">
                    Company:
                  </h3>
                  <p className="text-gray-50">{job.company}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-50">
                <div>
                  <strong>Type:</strong> {job.type}
                </div>
                <div>
                  <strong>Contact Person:</strong> {job.contactPerson}
                </div>
                <div>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${job.email}`}
                    className="text-purple-600 hover:underline"
                  >
                    {job.email}
                  </a>
                </div>
                <div>
                  <strong>Phone:</strong> {job.phone}
                </div>
                <div>
                  <strong>Website:</strong>{" "}
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    {job.website}
                  </a>
                </div>
                <div>
                  <strong>Address:</strong> {job.address}
                </div>
              </div>
              {/* <div className="px-2 py-4 bg-purple-600 mt-8 rounded-md text-center text-white hover:bg-purple-800">
                <Link to="/job-search-engine/job/applicants">View Applicants</Link>
              </div> */}
            </div>
          </div>
        </div>

        {/* Social Share Section */}
        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${link.name}`}
              >
                <img
                  src={link.icon}
                  alt={`${link.name} icon`}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
