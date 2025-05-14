import React, { memo, useMemo, useEffect, useRef, useState } from "react";

// Interfaces
interface Stat {
  value: string;
  description: string;
}

interface Company {
  name: string;
  logo: string;
}

interface Student {
  name: string;
  batch: string;
  package: string;
  image: string;
}

// Static Data
const statsData: Stat[] = [
  { value: "50+", description: "Recruiters partnered with Pantiss" },
  { value: "120+", description: "Job offers in Mining, Shipping, Power & Infrastructure" },
  { value: "₹3 Lac", description: "Average salary of top 25% placed students" },
  { value: "20+", description: "Global companies hiring Pantiss graduates" },
  { value: "100+", description: "Students placed at packages above ₹3.5 Lakh" },
];

const companiesData: Company[] = [
  { name: "Vedanta Resources", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746008397/Screenshot_2025-04-30_at_3.49.16_PM-removebg-preview_pf7adb.png" },
  { name: "Tata Steel", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742810048/Tata_Steel_Logo_gyv6rz.png" },
  { name: "Wistron", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746006925/wistron_u1oa59.svg" },
  { name: "Jindal Steel & Power", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746007990/Screenshot_2025-04-30_at_3.38.59_PM-removebg-preview_h2oxkt.png" },
  { name: "Dhoot Transmission", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746007547/Screenshot_2025-04-30_at_3.34.57_PM-removebg-preview_nbmrom.png" },
  { name: "Schneider Electric", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746006925/schneider_electric_q2ujfb.png" },
  { name: "FleetGuard", logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746006925/fleetguard_tuohkr.png" },
];

const studentsData: Student[] = [
  {
    name: "Anjali Gocchi",
    batch: "Batch 2023",
    package: "₹3.5 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000395/students-7_xxzu1w.jpg",
  },
  {
    name: "Ranjita Gochayat",
    batch: "Batch 2023",
    package: "₹3.5 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000395/student-6_ap9vlq.jpg",
  },
  {
    name: "Nabjyoti Nayak",
    batch: "Batch 2024",
    package: "₹3.5 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000395/student-5_gbdqmb.jpg",
  },
  {
    name: "Manoj Kumar Kisan",
    batch: "Batch 2024",
    package: "₹3 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000304/student-4_yx4ee4.jpg",
  },
  {
    name: "Kanha Raula",
    batch: "Batch 2024",
    package: "₹2.8 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000303/student-3_frvbwb.jpg",
  },
  {
    name: "Subham Majhi",
    batch: "Batch 2025",
    package: "₹2.8 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000304/student-2_dw91lt.jpg",
  },
  {
    name: "Chandan Sahoo",
    batch: "Batch 2025",
    package: "₹2.64 Lac.",
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746000304/student-1_krlvqn.jpg",
  },
];

// Components
const StatCard = memo(({ stat }: { stat: Stat }) => (
  <div className="bg-transparent ring-2 ring-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
    <p className="text-gray-100 mt-2">{stat.description}</p>
  </div>
));

const CompanyLogo = memo(({ company }: { company: Company }) => (
  <div className="flex-shrink-0 w-44 h-44 flex items-center justify-center p-4">
    <img
      src={company.logo}
      alt={company.name}
      className="w-full h-full object-contain"
      loading="lazy"
      decoding="async"
    />
  </div>
));

const StudentCard = memo(({ student }: { student: Student }) => (
  <div className="flex-shrink-0 w-64 bg-transparent rounded-lg text-center">
    <img
      src={student.image}
      alt={student.name}
      className="w-44 h-44 rounded-full object-cover mx-auto mb-4 border-2 border-orange-500"
      loading="lazy"
      decoding="async"
    />
    <h4 className="text-lg font-semibold text-gray-100">{student.name}</h4>
    <p className="text-sm text-gray-50">{student.batch}</p>
    <p className="text-orange-600 font-bold mt-2">{student.package}</p>
  </div>
));

// Main Section
const PlacementsSection: React.FC = () => {
  const [isPausedCompanies, setIsPausedCompanies] = useState(false);
  const [isPausedStudents, setIsPausedStudents] = useState(false);
  const companiesScrollRef = useRef<HTMLDivElement>(null);
  const studentsScrollRef = useRef<HTMLDivElement>(null);

  const companiesList = useMemo(() => [...companiesData, ...companiesData], []);
  const studentsList = useMemo(() => [...studentsData, ...studentsData], []);

  useEffect(() => {
    const container = companiesScrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const scroll = () => {
      if (!isPausedCompanies) {
        scrollPosition += scrollSpeed;
        container.scrollLeft = scrollPosition;
        const totalWidth = companiesData.length * 192;
        if (scrollPosition >= totalWidth) scrollPosition = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPausedCompanies]);

  useEffect(() => {
    const container = studentsScrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    let animationFrameId: number;

    const scroll = () => {
      if (!isPausedStudents) {
        scrollPosition += scrollSpeed;
        container.scrollLeft = scrollPosition;
        const totalWidth = studentsData.length * 272;
        if (scrollPosition >= totalWidth) scrollPosition = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPausedStudents]);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743490663/12266398_1920_1080_30fps_njenhk.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-900/60 to-black z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-300 uppercase">Placements & Careers</h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
            Glance at the <span className="text-orange-500">Top Companies</span> Hiring from Us
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
            Skilling Revolution Starts at Us: Exceptional Placements for 2021-2025 Batches
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Stats */}
          <div className="lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-6">{statsData.map((stat, i) => <StatCard key={i} stat={stat} />)}</div>

          {/* Scrolling Content */}
          <div className="lg:w-2/3">
            <div
              ref={companiesScrollRef}
              className="flex overflow-x-hidden bg-gradient-to-r from-black/10 via-white/40 to-black/10 gap-4 mb-12"
              onMouseEnter={() => setIsPausedCompanies(true)}
              onMouseLeave={() => setIsPausedCompanies(false)}
            >
              {companiesList.map((company, i) => (
                <CompanyLogo key={`${company.name}-${i}`} company={company} />
              ))}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-50">Students Getting Highest Packages</h3>
            </div>

            <div
              ref={studentsScrollRef}
              className="flex overflow-x-hidden gap-6 p-4"
              onMouseEnter={() => setIsPausedStudents(true)}
              onMouseLeave={() => setIsPausedStudents(false)}
            >
              {studentsList.map((student, i) => (
                <StudentCard key={`${student.name}-${i}`} student={student} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors">
            View Placements
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(PlacementsSection);