import React from "react";
import { useNavigate } from "react-router-dom";
import HorizontalComponent from "../components/Bussiness/HorizontalComponent";
import Hero from "../components/Bussiness/Hero";
import AsSeenOn from "../components/common/AsSeenOn";
import TestimonialSection from "../components/homepage/TestimonialSection";
import Workers from "../components/Bussiness/Workers";
import NewsLetterPlusHowCards from "../components/homepage/NewsLetterPlusHowCards";
import RegistrationTab from "../components/Bussiness/RegistrationTab";
import BusinessPromotionalBanner from "../components/Bussiness/BusinessPromotionalBanner";
import { FaBuildingUser } from "react-icons/fa6";

const Businesses: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/job-search-engine/job-providers/profile");
  };

  return (
    <div className="relative">
      <Hero />
      <AsSeenOn />
      <BusinessPromotionalBanner />
      <RegistrationTab />
      <HorizontalComponent />
      <TestimonialSection />
      <Workers />
      <NewsLetterPlusHowCards />

      {/* Profile Icon Button */}
      <button
        className="fixed top-16 sm:top-24 -right-5 flex flex-col items-center justify-center gap-2 h-[130px] w-[56px] sm:w-[64px] p-4 rounded-3xl bg-black/30 backdrop-blur-md border border-purple-500/40 shadow-[0_0_12px_#7c3aed55] hover:shadow-[0_0_25px_#a855f7aa] hover:scale-105 hover:border-purple-400 text-purple-200 transition-all duration-300 z-50 cursor-pointer group"
        onClick={handleProfileClick}
        onKeyDown={(e) => e.key === "Enter" && handleProfileClick()}
        role="button"
        aria-label="Go to business profile"
        tabIndex={0}
      >
        <FaBuildingUser className="text-[22px] transform -rotate-90 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-[22px] p-4 font-semibold transform -rotate-90 group-hover:text-purple-300 transition-colors duration-300">
          Profile
        </span>
      </button>
    </div>
  );
};

export default Businesses;
