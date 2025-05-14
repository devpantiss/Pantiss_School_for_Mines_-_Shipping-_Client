import React, { useState } from "react";

interface Programme {
  name: string;
  link: string;
}

interface TrainingData {
  technicianDepartments: string[];
  operatorDepartments: string[];
  miningTechnicianProgrammes: Programme[];
  miningOperatorProgrammes: Programme[];
}

const trainingData: TrainingData = {
  technicianDepartments: [
    "Department of Welding Technology",
    "Department of Electrical Systems",
    "Department of Security Training",
  ],
  operatorDepartments: [
    "Department of Heavy Machinery Operations",
    "Department of Mining Operations",
  ],
  miningTechnicianProgrammes: [
    { name: "Certificate in Mining Welding", link: "#" },
    { name: "Advanced Certification in Mining Welding", link: "#" },
    { name: "Diploma in Electrical Systems", link: "#" },
    { name: "Advanced Diploma in Electrical Systems", link: "#" },
    { name: "Certificate in Security Guard Training", link: "#" },
    { name: "Advanced Security Guard Training", link: "#" },
  ],
  miningOperatorProgrammes: [
    { name: "Diploma in Excavator Operation", link: "#" },
    { name: "Advanced Excavator Operator Certification", link: "#" },
    { name: "Certificate in Dumper Operation", link: "#" },
    { name: "Advanced Dumper Operator Certification", link: "#" },
  ],
};

const TrainingPrograms: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"technician" | "operator">("technician");

  const departments =
    activeTab === "technician"
      ? trainingData.technicianDepartments
      : trainingData.operatorDepartments;

  const programmes =
    activeTab === "technician"
      ? trainingData.miningTechnicianProgrammes
      : trainingData.miningOperatorProgrammes;

  return (
    <section className="relative w-full py-12 px-4 sm:px-8 bg-gradient-to-b from-black via-purple-900 to-black">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-8">
        New-age programmes at <br className="sm:hidden" />
        <span className="text-white">Mining & Heavy Machinery Academy</span>
      </h2>

      {/* Tabs and Content */}
      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`flex-1 py-3 px-4 text-center font-semibold text-sm sm:text-base rounded-t-lg transition-colors duration-300 ${
              activeTab === "technician"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("technician")}
          >
            Mining Technician
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center font-semibold text-sm sm:text-base rounded-t-lg transition-colors duration-300 ${
              activeTab === "operator"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("operator")}
          >
            Mining Operator
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Departments */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Departments</h3>
            <ul className="space-y-3">
              {departments.map((department, index) => (
                <li
                  key={index}
                  className="border-b border-gray-200 pb-2 text-gray-300 text-sm sm:text-base"
                >
                  {department}
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {programmes.map((programme, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
                >
                  <span className="text-gray-800 font-medium text-sm sm:text-base">
                    {programme.name}
                  </span>
                  <a
                    href={programme.link}
                    className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-orange-600 transition-colors duration-300"
                  >
                    Know More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Apply Now Button (Fixed on the right) */}
      <a
        href="#apply"
        className="fixed right-0 top-1/2 transform z-50 -translate-y-1/2 bg-orange-600 text-white px-4 py-2 rounded-l-lg text-xl font-semibold hover:bg-orange-700 transition-colors duration-300"
      >
        Apply Now
      </a>
    </section>
  );
};

export default TrainingPrograms;
