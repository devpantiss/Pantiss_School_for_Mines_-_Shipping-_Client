import React from 'react'
import HeroSection from '../components/Academics/Hero';
import LifeAtSkillnet from '../components/Academics/LifeAtSkillnet';
import HowToApply from '../components/Academics/HoToApply';
// import TrainingPrograms from '../components/Academics/TrainingPrograms';
import QualityBanner from '../components/Academics/QualityBanner';
import Hiring from '../components/Academics/Hiring';
import HorizontalAccordion from '../components/Academics/HorizontalAccordian';
// import NewsLetterPlusHowCards from '../components/Academics/NewsLetter';
import Why from '../components/Academics/Why';
import Impact from '../components/Academics/Impact';
import TopFaculties from '../components/Academics/TopFaculties';
import LmsBanner from '../components/Academics/LMSBanner';
import DashboardBanner from '../components/Academics/DashboardBanner';

const Academics: React.FC = () => {
  return (
    <div>
        <HeroSection />
        <LifeAtSkillnet />
        <Why />
        <HowToApply />
        {/* <TrainingPrograms /> */}
        <Impact />
        <QualityBanner />
        <TopFaculties />
        <DashboardBanner />
        <Hiring />
        <LmsBanner />
        <HorizontalAccordion />
        {/* <NewsLetterPlusHowCards /> */}
    </div>
  )
}

export default Academics;