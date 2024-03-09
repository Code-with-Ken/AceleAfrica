import React from 'react'
import AboutSection from '@/components/about_section'
import Header from '@/components/header'

const About = () => {
  return (
    <div>
      {/* banner */}
      <Header src="/assets/images/bat-2.jpg" title="About us" subtitle="Renewable Energy for a Sustainable World." alt="about us"/>
      <AboutSection />
    </div>
  )
}

export default About