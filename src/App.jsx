import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import KeunggulanKami from './components/KeunggulanKami';
import PurityStats from './components/PurityStats';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Smooth scroll for anchor links using event delegation
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <BrandStory />
      <KeunggulanKami />
      <PurityStats />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
