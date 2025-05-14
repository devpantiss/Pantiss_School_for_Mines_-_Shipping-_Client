import React, { useState, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaClock,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Finance Executive",
    company: "Wipro",
    location: "Bangalore",
    experience: "0-2 Years",
    salary: "₹3,00,000 - ₹4,50,000",
    description:
      "Handle daily financial transactions, support audits, and manage reports.",
    posted: "2 days ago",
  },
  {
    title: "Junior Accountant",
    company: "Infosys",
    location: "Hyderabad",
    experience: "1 Year",
    salary: "₹3,20,000 - ₹4,00,000",
    description:
      "Manage bookkeeping, invoices, and assist with budget planning.",
    posted: "1 day ago",
  },
  {
    title: "Accounts Assistant",
    company: "TCS",
    location: "Chennai",
    experience: "Freshers",
    salary: "₹2,80,000 - ₹3,60,000",
    description:
      "Support senior accountants with reconciliations and documentation.",
    posted: "3 days ago",
  },
  {
    title: "Financial Analyst",
    company: "Accenture",
    location: "Mumbai",
    experience: "2-3 Years",
    salary: "₹5,00,000 - ₹7,00,000",
    description: "Analyze budgets, financial planning, and reporting.",
    posted: "5 days ago",
  },
  {
    title: "Payroll Executive",
    company: "HCL Technologies",
    location: "Noida",
    experience: "1-2 Years",
    salary: "₹3,50,000 - ₹4,80,000",
    description: "Process payroll, tax deductions, and salary disbursement.",
    posted: "4 hours ago",
  },
  {
    title: "Audit Associate",
    company: "Deloitte",
    location: "Gurgaon",
    experience: "0-1 Year",
    salary: "₹4,20,000 - ₹5,00,000",
    description:
      "Conduct financial audits, internal checks and ensure compliance.",
    posted: "6 hours ago",
  },
  {
    title: "Accounts Receivable Analyst",
    company: "Capgemini",
    location: "Kolkata",
    experience: "1 Year",
    salary: "₹3,60,000 - ₹4,50,000",
    description: "Manage invoicing, collections, and client payment tracking.",
    posted: "1 hour ago",
  },
  {
    title: "Budget Analyst",
    company: "EY",
    location: "Ahmedabad",
    experience: "2 Years",
    salary: "₹4,80,000 - ₹6,00,000",
    description: "Prepare budget reports, forecasts and monitor expenditures.",
    posted: "2 days ago",
  },
  {
    title: "Cost Accountant",
    company: "L&T Finance",
    location: "Pune",
    experience: "3 Years",
    salary: "₹5,50,000 - ₹6,50,000",
    description:
      "Prepare cost reports, analyze cost structures, and recommend savings.",
    posted: "3 hours ago",
  },
  {
    title: "Treasury Analyst",
    company: "ICICI Bank",
    location: "Delhi",
    experience: "2-4 Years",
    salary: "₹6,00,000 - ₹8,00,000",
    description: "Manage cash flows, investments and banking relationships.",
    posted: "6 hours ago",
  },
  {
    title: "Internal Auditor",
    company: "KPMG",
    location: "Mumbai",
    experience: "1-2 Years",
    salary: "₹4,70,000 - ₹6,00,000",
    description: "Conduct internal audits and ensure compliance with policies.",
    posted: "5 days ago",
  },
  {
    title: "Finance Operations Associate",
    company: "Genpact",
    location: "Gurgaon",
    experience: "0-1 Year",
    salary: "₹3,40,000 - ₹4,00,000",
    description: "Support finance operations and process improvements.",
    posted: "1 day ago",
  },
  {
    title: "Billing Specialist",
    company: "Oracle",
    location: "Bangalore",
    experience: "2 Years",
    salary: "₹3,60,000 - ₹4,60,000",
    description:
      "Ensure accurate invoicing and maintain client billing records.",
    posted: "8 hours ago",
  },
  {
    title: "Accounts Payable Officer",
    company: "IBM",
    location: "Chennai",
    experience: "1-3 Years",
    salary: "₹4,20,000 - ₹5,50,000",
    description: "Manage vendor payments and reconciliation processes.",
    posted: "12 hours ago",
  },
  {
    title: "Senior Accountant",
    company: "Tech Mahindra",
    location: "Hyderabad",
    experience: "4 Years",
    salary: "₹6,50,000 - ₹7,50,000",
    description: "Lead accounting processes, oversee financial statements.",
    posted: "2 days ago",
  },
  {
    title: "Tax Associate",
    company: "PwC",
    location: "Mumbai",
    experience: "0-1 Year",
    salary: "₹4,00,000 - ₹5,00,000",
    description: "Assist in filing tax returns and preparing tax reports.",
    posted: "5 hours ago",
  },
  {
    title: "Accounts Executive",
    company: "Zoho Corp",
    location: "Chennai",
    experience: "1-2 Years",
    salary: "₹3,00,000 - ₹3,80,000",
    description: "Work on ledgers, reconciliations, and vendor interactions.",
    posted: "1 day ago",
  },
  {
    title: "Finance Trainee",
    company: "Flipkart",
    location: "Bangalore",
    experience: "Fresher",
    salary: "₹2,50,000 - ₹3,20,000",
    description: "Assist finance team with day-to-day operations.",
    posted: "7 hours ago",
  },
  {
    title: "Reconciliation Analyst",
    company: "Amazon",
    location: "Hyderabad",
    experience: "1-2 Years",
    salary: "₹3,60,000 - ₹4,80,000",
    description: "Handle bank and vendor reconciliations.",
    posted: "6 hours ago",
  },
  {
    title: "Management Accountant",
    company: "Siemens",
    location: "Gurgaon",
    experience: "3 Years",
    salary: "₹5,80,000 - ₹7,20,000",
    description: "Support budgeting, forecasting and internal controls.",
    posted: "2 days ago",
  },
  {
    title: "Accounts Intern",
    company: "Unacademy",
    location: "Bangalore",
    experience: "Internship",
    salary: "₹10,000 - ₹15,000/month",
    description: "Learn accounting basics and support day-to-day tasks.",
    posted: "3 hours ago",
  },
  {
    title: "Statutory Compliance Officer",
    company: "OYO",
    location: "Gurgaon",
    experience: "2 Years",
    salary: "₹4,50,000 - ₹5,50,000",
    description: "Ensure compliance with financial regulations and laws.",
    posted: "4 hours ago",
  },
  {
    title: "Financial Controller",
    company: "Zomato",
    location: "Delhi",
    experience: "5 Years",
    salary: "₹10,00,000 - ₹12,00,000",
    description: "Oversee entire finance and accounting operations.",
    posted: "1 day ago",
  },
  {
    title: "Bookkeeper",
    company: "Freshworks",
    location: "Chennai",
    experience: "1 Year",
    salary: "₹3,00,000 - ₹3,50,000",
    description: "Maintain books of accounts and daily transactions.",
    posted: "9 hours ago",
  },
  {
    title: "Tax Analyst",
    company: "Grant Thornton",
    location: "Mumbai",
    experience: "2 Years",
    salary: "₹4,80,000 - ₹6,20,000",
    description: "Work on corporate tax filings and planning.",
    posted: "5 hours ago",
  },
  {
    title: "Finance Data Analyst",
    company: "PhonePe",
    location: "Bangalore",
    experience: "1-2 Years",
    salary: "₹5,00,000 - ₹6,50,000",
    description: "Analyze financial data and generate business insights.",
    posted: "2 days ago",
  },
  {
    title: "Revenue Analyst",
    company: "Swiggy",
    location: "Hyderabad",
    experience: "2 Years",
    salary: "₹4,50,000 - ₹6,00,000",
    description: "Monitor and forecast revenue trends and metrics.",
    posted: "7 hours ago",
  },
  {
    title: "Grants Accountant",
    company: "Tata Trusts",
    location: "Mumbai",
    experience: "3 Years",
    salary: "₹4,80,000 - ₹6,00,000",
    description: "Manage financial reporting for funded programs.",
    posted: "6 hours ago",
  },
  {
    title: "Junior Financial Planner",
    company: "SBI Life",
    location: "Delhi",
    experience: "1 Year",
    salary: "₹3,80,000 - ₹4,60,000",
    description: "Help create financial plans and assist clients.",
    posted: "2 days ago",
  },
  {
    title: "Cash Flow Executive",
    company: "Axis Bank",
    location: "Pune",
    experience: "2 Years",
    salary: "₹3,50,000 - ₹4,70,000",
    description: "Monitor and manage company cash flow activities.",
    posted: "3 hours ago",
  },
  {
    title: "ERP Finance Consultant",
    company: "SAP",
    location: "Bangalore",
    experience: "3-5 Years",
    salary: "₹7,00,000 - ₹9,00,000",
    description: "Implement ERP modules and manage finance systems.",
    posted: "1 day ago",
  },
  {
    title: "Inventory Accountant",
    company: "Marico",
    location: "Mumbai",
    experience: "2 Years",
    salary: "₹4,00,000 - ₹5,00,000",
    description: "Track inventory costs and reconcile with ledgers.",
    posted: "4 hours ago",
  },
];

const filters = ["Role", "City", "Experience", "Salary", "Gender"];
const JOBS_PER_PAGE = 8;

const JobListPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null); // Ref for scrollable container

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const paginatedJobs = jobs.slice(startIndex, startIndex + JOBS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0; // Scroll the container to top
      }
    }
  };

  return (
    <div className="relative min-h-screen mt-16">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743490676/12900822_1920_1080_30fps_ldejrt.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      <div className="relative z-20 flex p-6">
        <aside className="w-1/4 bg-white/80 h-full p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-purple-600 mb-4">Filter</h3>
          {filters.map((filter) => (
            <div key={filter} className="mb-2">
              <button
                className="w-full flex justify-between items-center p-2 bg-gray-200 rounded-md"
                onClick={() =>
                  setActiveFilter(activeFilter === filter ? null : filter)
                }
              >
                {filter}{" "}
                {activeFilter === filter ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeFilter === filter && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="p-2 bg-gray-100 rounded-md mt-1"
                >
                  <p className="text-sm text-gray-700">Options for {filter}</p>
                </motion.div>
              )}
            </div>
          ))}
        </aside>

        <main
          ref={scrollRef}
          className="w-2/4 px-6 overflow-y-auto h-screen pb-32"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Accountant Jobs 2025 - 50 job vacancies
          </h2>
          <p className="text-sm text-gray-300 mb-4">{jobs.length} Job(s) Found</p>
          {paginatedJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white/80 p-4 rounded-lg shadow-md border mb-4"
            >
              <h3 className="text-lg text-purple-500 font-semibold">
                {job.title}
              </h3>
              <p className="text-sm text-gray-800">{job.company}</p>
              <div className="flex items-center text-sm text-gray-800 mt-2">
                <FaBriefcase className="mr-2" /> {job.experience}
                <FaMapMarkerAlt className="ml-4 mr-2" /> {job.location}
              </div>
              <p className="text-sm font-semibold text-gray-800 mt-2">
                💰 {job.salary}
              </p>
              <p className="text-sm text-gray-800 mt-2">{job.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-800 flex items-center">
                  <FaClock className="mr-1" /> {job.posted}
                </span>
                <button className="bg-purple-500 text-white px-4 py-1 rounded-md">
                  Quick Apply
                </button>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-purple-500 text-white disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded ${
                  page === currentPage
                    ? "bg-purple-700 text-white"
                    : "bg-white text-purple-700 border border-purple-500"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-purple-500 text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </main>

        <aside className="w-1/4 bg-white/80 h-full p-4 rounded-lg shadow-md">
          <h3 className="text-lg text-purple-600 font-semibold">
            Active Jobs By Role
          </h3>
          <ul className="mt-4 text-sm text-gray-900">
            <li>Accountant (21)</li>
            <li>Admin (30)</li>
            <li>Agriculture and Dairy (1)</li>
            <li>Architect (3)</li>
            <li>BPO / Customer Care (21)</li>
          </ul>
          <button className="bg-purple-500 text-white px-4 py-2 mt-4 w-full rounded-md">
            See More
          </button>
        </aside>
      </div>
    </div>
  );
};

export default JobListPage;