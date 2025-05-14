import React, { useState } from "react";

interface Applicant {
  id: number;
  name: string;
  email: string;
  status: "Pending" | "Accepted" | "Rejected";
  resume: string;
  details: string;
}

interface JobDetails {
  title: string;
  company: string;
  description: string;
  salary: string;
  experience: string;
  posted: string;
  qualification: string;
  location: string;
  openings: number;
}

const job: JobDetails = {
  title: "Welder",
  company: "Tata Steel",
  description: "Responsible for joining metal parts using welding techniques, ensuring structural integrity and durability of fabricated products.",
  salary: "2.0-3.5 LPA",
  experience: "0-2 Years",
  posted: "Today",
  qualification: "10th Pass",
  location: "Bhubaneswar",
  openings: 10,
};

const dummyApplicants: Applicant[] = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Pending", resume: "resume_john.pdf", details: "Experienced web developer with 5 years of experience in React and Node.js." },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Accepted", resume: "resume_jane.pdf", details: "Data Scientist with expertise in machine learning and AI." },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", status: "Rejected", resume: "resume_alice.pdf", details: "Frontend Developer specializing in UI/UX design." },
];

const ApplicantTrackerPage: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>(dummyApplicants);

  const updateStatus = (id: number, status: "Accepted" | "Rejected") => {
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant.id === id ? { ...applicant, status } : applicant
      )
    );
  };

  return (
    <div className="p-6 mt-16 bg-black">
      <div className="bg-purple-900 text-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-sm">{job.company}</p>
        <p className="italic my-2">{job.description}</p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p><strong>💰 Salary:</strong> {job.salary}</p>
          <p><strong>📅 Exp:</strong> {job.experience}</p>
          <p><strong>📅 Posted:</strong> {job.posted}</p>
          <p><strong>🎓 Qualification:</strong> {job.qualification}</p>
          <p><strong>📍 Location:</strong> {job.location}</p>
          <p><strong>📦 Openings:</strong> {job.openings}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-gray-200 rounded-lg text-center">
          <p className="text-lg font-bold">Total Applicants</p>
          <p className="text-2xl">{applicants.length}</p>
        </div>
        <div className="p-4 bg-green-200 rounded-lg text-center">
          <p className="text-lg font-bold">Accepted</p>
          <p className="text-2xl">{applicants.filter(a => a.status === "Accepted").length}</p>
        </div>
        <div className="p-4 bg-red-200 rounded-lg text-center">
          <p className="text-lg font-bold">Rejected</p>
          <p className="text-2xl">{applicants.filter(a => a.status === "Rejected").length}</p>
        </div>
      </div>
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Resume</th>
              <th className="p-3 text-left">Details</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id} className="border-t">
                <td className="p-3 text-white">{applicant.name}</td>
                <td className="p-3 text-white">{applicant.email}</td>
                <td className={`p-3 font-bold ${
                  applicant.status === "Accepted" ? "text-green-600" :
                  applicant.status === "Rejected" ? "text-red-600" : "text-yellow-600"}`}>{applicant.status}</td>
                <td className="p-3">
                  <a href={`#`} className="text-blue-500 underline">{applicant.resume}</a>
                </td>
                <td className="p-3 max-w-xs text-white overflow-hidden text-ellipsis">{applicant.details}</td>
                <td className="p-3 space-x-2">
                  <button
                    className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
                    onClick={() => updateStatus(applicant.id, "Accepted")}
                    disabled={applicant.status !== "Pending"}
                  >
                    Accept
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded disabled:opacity-50"
                    onClick={() => updateStatus(applicant.id, "Rejected")}
                    disabled={applicant.status !== "Pending"}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantTrackerPage;
