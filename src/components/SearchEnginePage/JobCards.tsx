import { useState } from "react";
import { Link } from "react-router-dom";

const jobsData = {
  "Jobs in Odisha": [
    {
      viewLink: "/job-details",
      title: "Welder",
      company: "Tata Steel",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/tata_steel_eh81pq.jpg",
      location: "Bhubaneswar",
      salary: "2.0-3.5 LPA",
      experience: "0-2 Years",
      posted: "Today",
      qualification: "10th Pass",
      openings: 10,
      description:
        "Responsible for joining metal parts using welding techniques, ensuring structural integrity and durability of fabricated products.",
    },
    {
      viewLink: "/job-details",
      title: "Electrician",
      company: "NTPC Limited",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/NTPC-Preview_mmpq59.png",
      location: "Cuttack",
      salary: "2.2-3.8 LPA",
      experience: "1-3 Years",
      posted: "Today",
      qualification: "ITI Electrician",
      openings: 15,
      description:
        "Install, maintain, and repair electrical systems and equipment, ensuring safety and compliance with industry standards.",
    },
  ],
  "Jobs in India": [
    {
      viewLink: "/job-details",
      title: "Welder",
      company: "BHEL",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/bhel_dmv4uz.avif",
      location: "Mumbai",
      salary: "2.2-3.6 LPA",
      experience: "1-3 Years",
      posted: "Today",
      qualification: "Diploma in Welding",
      openings: 12,
      description:
        "Perform welding tasks on heavy machinery components and structures, ensuring precision and durability.",
    },
    {
      viewLink: "/job-details",
      title: "Electrician",
      company: "Tata Power",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/Tata_Power_piq2vv.png",
      location: "Delhi",
      salary: "2.5-4.0 LPA",
      experience: "2-4 Years",
      posted: "Today",
      qualification: "ITI Electrician",
      openings: 18,
      description:
        "Maintain and troubleshoot electrical systems in industrial and commercial buildings, ensuring uninterrupted power supply.",
    },
  ],
  "International Jobs": [
    {
      viewLink: "/job-details",
      title: "Welding Technician",
      company: "Samsung Engineering",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/samsung_logo_rkeb1v.png",
      location: "UAE",
      salary: "6.0-8.5 LPA",
      experience: "3-5 Years",
      posted: "Today",
      qualification: "Diploma in Welding",
      openings: 8,
      description:
        "Handle welding operations for large-scale infrastructure projects in compliance with international standards.",
    },
    {
      viewLink: "/job-details",
      title: "Construction Electrician",
      company: "Bechtel",
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/bechtel_logo_o8wzwn.png",
      location: "Canada",
      salary: "7.0-9.0 LPA",
      experience: "2-6 Years",
      posted: "Today",
      qualification: "ITI Electrician + International License",
      openings: 10,
      description:
        "Install and maintain electrical systems at industrial sites, ensuring adherence to Canadian safety regulations.",
    },
  ],
};

export default function JobTabs() {
  const [activeTab, setActiveTab] = useState<
    "Jobs in Odisha" | "Jobs in India" | "International Jobs"
  >("Jobs in Odisha");

  return (
    <div className="bg-black min-h-screen">
      <div className="w-full max-w-7xl mx-auto p-4">
        <div className="flex border-b">
          {Object.keys(jobsData).map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 flex-1 text-center ${
                activeTab === tab
                  ? "border-b-4 border-purple-600 font-bold text-purple-600"
                  : "text-gray-50 hover:text-purple-500"
              }`}
              onClick={() =>
                setActiveTab(
                  tab as "Jobs in Odisha" | "Jobs in India" | "International Jobs"
                )
              }
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {jobsData[activeTab].map((job, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-2xl border bg-purple-600/30 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                <img
                  src={job.logo}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">{job.title}</h1>
                  <p className="text-gray-100">{job.company}</p>
                </div>
              </div>
              <p className="text-gray-100 text-sm italic">{job.description}</p>
              <div className="grid grid-cols-3 gap-x-5 gap-y-5">
                <p className="text-md text-left text-gray-100">
                  💰 <strong>Salary:</strong>{" "}
                  <span className="text-md">{job.salary}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  📅 <strong>Exp:</strong>{" "}
                  <span className="text-md">{job.experience}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  🗓️ <strong>Posted:</strong>{" "}
                  <span className="text-md">{job.posted}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  🎓 <strong>Qualification:</strong>{" "}
                  <span className="text-md">{job.qualification}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  📍 <strong>Location:</strong>{" "}
                  <span className="text-md">{job.location}</span>
                </p>
                <p className="text-md text-left text-gray-100">
                  📦 <strong>Openings:</strong>{" "}
                  <span className="text-md">{job.openings}</span>
                </p>
              </div>
              <Link
                to="/job-search-engine/job-seekers/auth"
                className="mt-4 w-full text-center bg-violet-500 text-white py-2 rounded-lg hover:bg-violet-600 transition-colors"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
