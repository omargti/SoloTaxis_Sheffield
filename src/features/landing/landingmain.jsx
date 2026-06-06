import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../shared/utils/scrollToSection'
import HeroSection from './HeroSection'
import Services from './Services'
import { RideSection } from './RideandAppSection'
import About from './About'
import Testimonials from './Testimonials'
import DownloadDriveSection from './AppDownloadBanner'
import Faq from './Faqs'

const LandingMain = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash.replace("#", ""));
    }
  }, [location.hash]);

  return (
  
       <div>

    
      <HeroSection />           {/* 1. Hook — instant value prop & book CTA */}
      <Services />            {/* 2. Offer — what we provide & pricing clarity */}
      <RideSection />    {/* 3. Product — show the experience visually */}
      <About />              {/* 4. Credibility — who we are, years in business */}
      <Testimonials />          {/* 5. Social Proof — real customers seal the deal */}
      <DownloadDriveSection />   {/* 6. Convert — download app / become a driver */}
      <Faq />                  {/* 7. Objections — remove last buying barriers */}
                  {/* 8. Exit — contact, legal, socials */}
    </div>
   
  )
}

export default LandingMain
