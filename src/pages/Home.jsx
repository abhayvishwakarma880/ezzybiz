import React from 'react'
import HeroSection from '../components/home/HeroSection.jsx'
import ServicesSection from '../components/home/ServicesSection.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import BusinessSetupProcess from '../components/home/BusinessSetupProcess.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import PackageToCTA from '../components/home/PackageToCTA.jsx'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <BusinessSetupProcess />
      <AboutSection />
      <PackageToCTA />
    </div>
  )
}

export default Home
