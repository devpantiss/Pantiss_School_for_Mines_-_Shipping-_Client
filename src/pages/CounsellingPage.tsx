import React from 'react'
import Hero from '../components/Counselling/Hero'
import CounsellingServices from '../components/Counselling/CounsellingServices'
import ChooseYourPath from '../components/Counselling/ChooseYourPath'
import FaqSection from '../components/Counselling/FaqSection'
import HowToHelp from '../components/Counselling/HowToHelp'
import Impact from '../components/Counselling/Impact'
import AssessmentSection from '../components/Counselling/AssessmentSection'
import PhilosophySection from '../components/Counselling/PhilosophySection'
import Counsillors from '../components/Counselling/Counsillors'

const CounsellingPage: React.FC = () => {
  return (
    <div>
        <Hero />
        <CounsellingServices />
        <PhilosophySection />
        <ChooseYourPath />
        <HowToHelp />
        <Impact />
        <AssessmentSection />
        <Counsillors />
        <FaqSection />
    </div>
  )
}

export default CounsellingPage