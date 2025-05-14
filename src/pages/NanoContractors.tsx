import React from 'react'
import Hero from '../components/nanoContractors/Hero'
import InfoSection from '../components/nanoContractors/InfoSection'
import WorkSection from '../components/nanoContractors/WorkSection'
import InsightsSection from '../components/nanoContractors/Insights'
import Stats from '../components/nanoContractors/Stats'
import Testimonials from '../components/nanoContractors/Testimonials'
import NewsSection from '../components/nanoContractors/NewsSection'
import NewsLetterPlusHowCards from '../components/homepage/NewsLetterPlusHowCards'

const NanoContractors: React.FC = () => {
  return (
    <div>
        <Hero />
        <InfoSection />
        <WorkSection />
        <InsightsSection />
        <Stats />
        <Testimonials />
        <NewsSection />
        <NewsLetterPlusHowCards />
    </div>
  )
}

export default NanoContractors