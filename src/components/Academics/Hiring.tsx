import React from "react";
import Marquee from "react-fast-marquee";

const companyLogos = [
  { src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/tata_steel_eh81pq.jpg", alt: "Tata Steel" },
  { src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/tata_steel_eh81pq.jpg", alt: "Honeywell" },
  { src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/G4S__logo_.svg_vcz6im.png", alt: "G4S" },
  { src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248275/Coal_India_Logo.svg_1_fit4mk.png", alt: "Coal India" },
  { src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/Tata_Power_piq2vv.png", alt: "Tata Power" },
  { src: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1743248276/bhel_dmv4uz.avif", alt: "BHEL" },
];

const Hiring: React.FC = () => {
  return (
    <section className="relative flex flex-wrap md:flex-nowrap bg-black text-white p-6 md:p-12">
      {/* Left Section */}
      <div className="md:w-2/3 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Secure Stable & Well-Paid Blue-Collar Jobs
        </h2>

        <button className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-purple-700 transition-all">
          APPLY NOW
        </button>

        {/* Top Marquee - Left to Right */}
        <Marquee pauseOnHover={true} speed={40} gradient={true} gradientWidth={50} direction="left">
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="h-12 mx-4" />
          ))}
        </Marquee>

        {/* Bottom Marquee - Right to Left */}
        <Marquee pauseOnHover={true} speed={40} gradient={true} gradientWidth={50} direction="right">
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} className="h-12 mx-4" />
          ))}
        </Marquee>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 bg-purple-600 text-white p-8 rounded-lg text-center shadow-lg">
        <div className="space-y-6">
          <div>
            <h3 className="text-4xl font-bold">INR 35,000 P.M.</h3>
            <p className="text-sm">Average Salary for Skilled Workers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">INR 15,000 P.M.</h3>
            <p className="text-sm">Entry-Level Factory Worker Salary</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">INR 200 / Hour</h3>
            <p className="text-sm">Daily Wage for Certified Technicians</p>
          </div>
        </div>
      </div>

      {/* Floating Apply Now Button */}
      <a
        href="#apply"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white font-bold py-2 px-4 rounded-l-lg rotate-90 shadow-lg hover:bg-purple-700 transition-all"
      >
        Apply Now
      </a>
    </section>
  );
};

export default Hiring;
