import React from 'react'
import HeroSection from '../components/Workers/Hero'
import HowItWorks from '../components/Workers/HowItWorks'
import WorkWithBest from '../components/Workers/WorkWithBest'
import Focus from '../components/Workers/Focus'
import InsightsSection from '../components/Workers/Insights'
import TestimonialSection from '../components/Workers/Testimonials'
import NewsLetterPlusHowCards from '../components/homepage/NewsLetterPlusHowCards'

const Workers: React.FC = () => {
  return (
    <div>
        <HeroSection />
        <WorkWithBest />
        <Focus />
        <HowItWorks />
        <InsightsSection />
        <TestimonialSection />
        <NewsLetterPlusHowCards />
    </div>
  )
}

export default Workers