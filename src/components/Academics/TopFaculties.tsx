import React from "react";

const facultyList = [
  {
    name: "Dr. Anil Kumar",
    title: "Professor of Mining Engineering",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739264129/WhatsApp_Image_2025-02-11_at_2.23.03_PM_1_no2bgc.jpg",
  },
  {
    name: "Capt. Meera Sinha",
    title: "Head of Maritime Studies",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739274160/WhatsApp_Image_2025-02-11_at_5.11.00_PM_x6jwuo.jpg",
  },
  {
    name: "Dr. Rakesh Rao",
    title: "Geology & Exploration",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739771766/WhatsApp_Image_2025-02-13_at_1.52.50_PM_h2o6vf.jpg",
  },
  {
    name: "Ms. Priya Das",
    title: "Shipping Logistics Expert",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739771766/WhatsApp_Image_2025-02-13_at_1.52.50_PM_1_npx2n9.jpg",
  },
  {
    name: "Dr. Arjun Sen",
    title: "Environmental Safety",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1744797244/WhatsApp_Image_2025-04-16_at_11.57.56_AM_liyoub.jpg",
  },
];

const TopFaculties: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-black via-purple-800 to-black text-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Meet Our <span className="text-orange-500">Top Faculty</span>
      </h2>

      <div className="w-full overflow-hidden marquee-container">
        <div className="marquee-track flex whitespace-nowrap gap-6 py-4 px-6">
          {[...facultyList, ...facultyList].map((faculty, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[450px] max-w-xs bg-black/60 ring-2 ring-orange-500 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-[80%] w-full">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{faculty.name}</h3>
                <p className="text-sm text-orange-400">{faculty.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add raw CSS for marquee and hover pause */}
      <style>{`
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-track {
          display: flex;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TopFaculties;
