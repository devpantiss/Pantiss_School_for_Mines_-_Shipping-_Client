import React from "react";
import { Link } from "react-router-dom";

// Define types for job roles
interface JobRole {
  title: string;
  jobs: string;
  icon: string;
  isNew: boolean;
  path: string;
}

// Skilled Worker Roles
const skilledWorkerRoles: JobRole[] = [
  {
    title: "Electrician",
    jobs: "245 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/Screenshot_2025-03-29_at_11.58.01_AM-removebg-preview_aklevc.png",
    isNew: false,
  },
  {
    title: "Welder",
    jobs: "189 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/welder-removebg-preview_acphyj.png",
    isNew: true,
  },
  {
    title: "Dumper Operator",
    jobs: "112 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/dump-truck_3963799-removebg-preview_kbe05q.png",
    isNew: false,
  },
  {
    title: "Excavator Operator",
    jobs: "98 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/excavator-removebg-preview_kshkel.png",
    isNew: true,
  },
  {
    title: "Security Guard",
    jobs: "305 Active Jobs",
    path: "/job-listings",
    icon: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743230001/policeman-removebg-preview_cslk3h.png",
    isNew: false,
  },
];

const JobTabs: React.FC = () => {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl text-white font-semibold mb-8">
          For Skilled Workers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skilledWorkerRoles.map((role, index) => (
            <Link
              to={role.path}
              key={index}
              className="job-card bg-transparent p-6 rounded-lg border-2 border-purple-600/60 shadow-lg hover:shadow-purple-600/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={role.icon}
                alt={role.title}
                className="w-24 h-24 mb-4 mx-auto"
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
            </Link>
          ))}
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .glow-purple {
          text-shadow: 0 0 10px var(--purple-600), 0 0 20px var(--purple-600);
          box-shadow: 0 0 10px var(--purple-600), 0 0 20px var(--purple-600);
        }

        .job-card {
          backdrop-filter: blur(5px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .job-card:hover {
          transform: translateY(-5px);
        }

        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }

        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }

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
