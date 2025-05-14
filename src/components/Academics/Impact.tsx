import React, { useState, useMemo, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

// interface Programme {
//   name: string;
//   link: string;
// }

// const trainingData = {
//   technicianDepartments: [
//     "Department of Welding Technology",
//     "Department of Electrical Systems",
//     "Department of Security Training",
//   ],
//   operatorDepartments: [
//     "Department of Heavy Machinery Operations",
//     "Department of Mining Operations",
//   ],
//   miningTechnicianProgrammes: [
//     { name: "Certificate in Mining Welding", link: "#" },
//     { name: "Advanced Certification in Mining Welding", link: "#" },
//     { name: "Diploma in Electrical Systems", link: "#" },
//     { name: "Advanced Diploma in Electrical Systems", link: "#" },
//     { name: "Certificate in Security Guard Training", link: "#" },
//     { name: "Advanced Security Guard Training", link: "#" },
//   ],
//   miningOperatorProgrammes: [
//     { name: "Diploma in Excavator Operation", link: "#" },
//     { name: "Advanced Excavator Operator Certification", link: "#" },
//     { name: "Certificate in Dumper Operation", link: "#" },
//     { name: "Advanced Dumper Operator Certification", link: "#" },
//   ],
// };

const sectorPrograms = {
  Mining: [
    "Drilling Operator",
    "Mine Electrician",
    "Blasting Assistant",
    "Load-Haul-Dump Operator",
    "HSE Assistant",
  ],
  "Steel & Aluminium": [
    "Furnace Operator",
    "Rolling Mill Technician",
    "Casting Assistant",
    "Welding Technician",
    "Crane Operator",
  ],
  Power: [
    "Line Technician",
    "Substation Helper",
    "Solar Panel Installer",
    "Control Room Operator",
    "Electrical Maintenance Helper",
  ],
  Hydrocarbons: [
    "Rig Floorhand",
    "Pipeline Fitter",
    "Pump Technician",
    "Boiler Operator",
    "Instrumentation Helper",
  ],
  Shipping: [
    "Deck Cadet",
    "Marine Welder",
    "Engine Room Fitter",
    "Cargo Handler",
    "Dock Assistant",
  ],
};

const PantissImpactPrograms: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<"technician" | "operator">("technician");
  const [activeSector, setActiveSector] = useState(Object.keys(sectorPrograms)[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const departments =
  //   activeTab === "technician"
  //     ? trainingData.technicianDepartments
  //     : trainingData.operatorDepartments;

  // const programmes =
  //   activeTab === "technician"
  //     ? trainingData.miningTechnicianProgrammes
  //     : trainingData.miningOperatorProgrammes;

  const filteredPrograms = useMemo(() => {
    return sectorPrograms[activeSector as keyof typeof sectorPrograms].filter((program) =>
      program.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeSector, searchTerm]);

  return (
    <section className="relative overflow-hidden text-white bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${offsetY * 0.4}px)`, transition: "transform 0.1s ease-out" }}
        >
          <source
            src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743695643/2759477-uhd_3840_2160_30fps_1_1_1_1_fuvcck.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-purple-800 to-black" />

      {/* Content */}
      <div className="relative z-20 py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Explore <span className="text-orange-500">PANTISS</span> Skilling Programs
          </h2>
          <p className="text-base md:text-lg mt-4">
            Programs tailored for the future of Mining, Shipping, and Heavy Industries
          </p>
        </div>

        {/* Sector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(sectorPrograms).map((sector) => (
            <button
              key={sector}
              onClick={() => {
                setActiveSector(sector);
                setSearchTerm("");
              }}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition ${
                activeSector === sector
                  ? "bg-white text-orange-500 shadow"
                  : "bg-orange-500 text-white hover:bg-gray-600"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center border border-white rounded overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder={`Search in ${activeSector}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-white outline-none"
            />
            <span className="px-3 text-white">
              <FiSearch size={20} />
            </span>
          </div>
        </div>

        {/* Filtered Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map((program, idx) => (
              <div key={idx} className="bg-transparent ring-2 ring-orange-500 text-white text-center p-4 rounded shadow hover:bg-gray-100 hover:text-orange-500 transition">
                {program}
              </div>
            ))
          ) : (
            <p className="col-span-full text-center italic text-gray-400">
              No programs found for this search.
            </p>
          )}
        </div>

        {/* Academy Tabs */}
        {/* <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-white mb-6">
            Mining & Heavy Machinery Academy
          </h3>

          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-5 py-2 font-medium rounded-lg ${
                activeTab === "technician" ? "bg-orange-500 text-white" : "bg-white text-orange-500"
              }`}
              onClick={() => setActiveTab("technician")}
            >
              Technician
            </button>
            <button
              className={`px-5 py-2 font-medium rounded-lg ${
                activeTab === "operator" ? "bg-orange-500 text-white" : "bg-white text-orange-500"
              }`}
              onClick={() => setActiveTab("operator")}
            >
              Operator
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Departments</h4>
              <ul className="space-y-2">
                {departments.map((dept, idx) => (
                  <li key={idx} className="text-gray-300 border-b pb-2 border-gray-600">
                    {dept}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {programmes.map((prog, idx) => (
                <div key={idx} className="bg-white shadow-md rounded p-4 flex justify-between items-center">
                  <span className="text-gray-800 font-medium text-sm">{prog.name}</span>
                  <a
                    href={prog.link}
                    className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs hover:bg-orange-600"
                  >
                    Know More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PantissImpactPrograms;
