import React from 'react'
import HeroSection from '../components/home/HeroSection.jsx'
import ServicesSection from '../components/home/ServicesSection.jsx'
import WhyChooseUs from '../components/home/WhyChooseUs.jsx'
import BusinessSetupProcess from '../components/home/BusinessSetupProcess.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import PackageToCTA from '../components/home/PackageToCTA.jsx'
import Projects from '../components/home/Projects.jsx'
import Clientele from '../components/home/Clientele.jsx'
import Articles from '../components/home/Articles.jsx'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <BusinessSetupProcess />
      <PackageToCTA />
      <Projects />
      <Clientele />
      <Articles />
    </div>
  )
}

export default Home
