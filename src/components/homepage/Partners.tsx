import React, { memo } from "react";
import Marquee from "react-fast-marquee";

// Define the props type for PartnerSection
interface PartnerSectionProps {
  title: string;
  partners: string[];
  direction: "left" | "right";
  borderSide: "r" | "l";
}

const governmentPartners: string[] = [
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735042390/Ministry_of_Heavy_Industries_India.svg_fhp1cc.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735042392/ombadc_rmdidp.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735042389/Ministry_of_Coal_India.svg_fyx0tc.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735041145/NSDC_luqbyd.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735042390/Ministry_of_Mines_India.svg_hpnvzl.png",
];

const corporatePartners: string[] = [
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735042701/asci_xexfdv.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735041141/JINDAL_STEEL_wpau1m.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735041151/TATA_STEEL_hoirtn.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735041150/TATA_POWER_uayv1g.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735043985/Coal_India_Logo.svg_wwns1e.png",
];

const multilateralPartners: string[] = [
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735041153/UNICEF_bgidzk.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735041138/GIZ_bsb7es.png",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1735045063/United_Nations_Environment_Programme_Logo.svg_rp7oev.png",
];

const PartnerSection: React.FC<PartnerSectionProps> = memo(
  ({ title, partners, direction, borderSide }) => (
    <div className="relative flex justify-center items-center py-24">
      <div className="w-full relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div
            className={`absolute z-20 h-44 w-44 rounded-full bg-transparent border-${borderSide}-4 border-purple-600 -top-10 flex flex-col justify-center items-center`}
          >
            <div
              className={`absolute top-0 left-0 w-full h-full border-purple-600 rounded-full`}
            ></div>
            <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-purple-600"></div>
            <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-purple-600"></div>
            <div className="w-32 h-32 py-16 px-8 bg-purple-600 rounded-full flex justify-center items-center">
              <span className="text-xl text-white font-bold">{title}</span>
            </div>
          </div>
        </div>
        <Marquee gradient={false} speed={50} direction={direction} pauseOnHover>
          {partners.map((logo, index) => (
            <div
              key={index}
              className="mx-6"
              style={{ width: "200px", height: "80px" }}
            >
              <img
                src={logo}
                alt={`${title} Partner ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                loading="lazy"
                onError={(e) =>
                  (e.currentTarget.src = "https://via.placeholder.com/150")
                }
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
);
PartnerSection.displayName = "PartnerSection";

const OurPartners: React.FC = () => {
  return (
    <div className="bg-black relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1743490676/12900822_1920_1080_30fps_ldejrt.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900 via-white/30 to-black z-1"></div>
      <div className="flex flex-col justify-center items-center container mx-auto py-14 px-4 sm:px-12 relative z-10">
        <div className="flex justify-center mb-6">
        <h1 className="text-white text-4xl font-bold">
            OUR <span className="text-orange-600">PARTNERS</span>
          </h1>
        </div>
        <div className="relative my-12 w-full">
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[3px] h-[550px] border-l-[3px] border-dashed border-purple-600 z-0"></div>
          <PartnerSection
            title="Government"
            partners={governmentPartners}
            direction="left"
            borderSide="r"
          />
          <PartnerSection
            title="Corporate"
            partners={corporatePartners}
            direction="right"
            borderSide="l"
          />
          <PartnerSection
            title="Multilaterals"
            partners={multilateralPartners}
            direction="left"
            borderSide="r"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(OurPartners);