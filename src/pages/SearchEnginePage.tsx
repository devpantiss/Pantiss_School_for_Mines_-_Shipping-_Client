import React from "react";
import HeroSection from "../components/SearchEnginePage/Hero";
// import Customers from "../components/SearchEnginePage/Customers";
// import CloudSection from "../components/SearchEnginePage/CloudSection";
import JobTabs from "../components/SearchEnginePage/JobsTabs";
// import OverLappingCards from "../components/SearchEnginePage/OverLappingCards";
// import HowSection from "../components/SearchEnginePage/HowSection";
// import OverLappingCards2 from "../components/SearchEnginePage/OverLappingCards2";
// import ImpactSection from "../components/SearchEnginePage/ImpactSection";
// import TestimonialSection from "../components/SearchEnginePage/TestimonialSection";
import NewsLetterPlusHowCards from "../components/SearchEnginePage/NewsLetterPlusHowCards";
import ForBusinessBanner from "../components/SearchEnginePage/ForBusinessBanner";
import JobCards from "../components/SearchEnginePage/JobCards";
import Why from "../components/SearchEnginePage/Why";
// import HorizontalScrollComponent from "../components/SearchEnginePage/HorizontalComponent";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <JobTabs />
      <ForBusinessBanner />
      <JobCards />
      <Why />
      {/* <Customers />
      <OverLappingCards />
      <HowSection />
      <OverLappingCards2 />
      <ImpactSection />
      <CloudSection />
      <TestimonialSection />
      <HorizontalScrollComponent /> */}
      <NewsLetterPlusHowCards />
    </div>
  );
};

export default HomePage;
