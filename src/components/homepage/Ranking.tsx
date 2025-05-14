import React from "react";

interface RankingCardProps {
  logo: string;
  rank: string;
  description: string;
}

const RankingCard: React.FC<RankingCardProps> = ({ logo, description }) => {
  return (
    <div className="w-[450px] mx-4 p-6 ring-2 ring-orange-500 rounded-2xl shadow-sm bg-black/30 backdrop-blur-md">
      <img src={logo} alt="Accreditation Logo" className="h-24 mb-4 mx-auto" />
      <div className="w-full flex flex-wrap">
        <p className="text-sm text-gray-50 w-full text-center mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const Ranking: React.FC = () => {
  const accreditations = [
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746099074/SCMS_yjzmgs.png",
      rank: "NAAC A+",
      description: "Skill Council for Mining Sector",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746104823/LSC-logo-removebg-preview_tzg0qq.png",
      rank: "NBA",
      description: "Logistics Sector Council.",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_400,h_100/v1746104823/Rubber-removebg-preview_jg5caq.png",
      rank: "NBA",
      description:
        "Rubber, Chemical & Petrochemical Skill Development Council.",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746099064/Power_jqvk3e.png",
      rank: "NBA",
      description: "Power Sector Skill Council.",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746104823/IESC-removebg-preview_ra8pvj.png",
      rank: "NBA",
      description: "Infrastructure Equipments Skill Council",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746104822/Hydrocarbon-removebg-preview_nqzwz3.png",
      rank: "NBA",
      description: "Hydrocarbon Sector Skill Council.",
    },
    {
      logo: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1746104822/IISSSC-removebg-preview_o0qz4s.png",
      rank: "NBA",
      description: "Indian Iron & Steel Sector Skill Council.",
    },
  ];

  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-16 px-4"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742820278/2cf04226-46c3-4820-90e4-61a001350d8b_l1cetk.jpg)",
      }}
    >
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            display: inline-flex;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Our <span className="text-orange-500">Accreditations</span>
          </h1>
          <p className="text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
            Recognitions that reflect our unwavering commitment to academic
            quality and excellence.
          </p>
        </div>

        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="marquee p-3">
            {accreditations.concat(accreditations).map((item, index) => (
              <div className="w-72 mx-24">
                <RankingCard key={index} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
