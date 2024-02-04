import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import Hero from '../../components/homeComponents/Hero';
import About from '../../components/homeComponents/About';
import Features from '../../components/homeComponents/Features';
import CtaSection from '../../components/homeComponents/CtaSection';
import Footer from '../../components/footer/Footer';
export default function Home() {
    Aos.init({
        duration: 1800,
        offset: 0,
      });
      return (
        <div className='overflow-hidden'>
          <Hero />
          <About />
          <Features />
          <CtaSection />
          {/* <Footer /> */}
        </div>
      );
}
