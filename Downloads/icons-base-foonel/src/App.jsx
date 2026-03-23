import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalProblem from './components/RealProblem';
import IndustryShift from './components/IndustryShift';
import FatalFlaws from './components/FatalFlaws';
import LearningSteps from './components/LearningSteps';
import LeadForm from './components/LeadForm';
import ProofEngine from './components/ProofEngine';
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Global scroll reveals for sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      <Navbar />
      <main>
        <div id="hero"><Hero /></div>
        <div id="problem"><ProfessionalProblem /></div>
        <div id="market"><IndustryShift /></div>
        <div id="flaws"><FatalFlaws /></div>
        <div id="steps"><LearningSteps /></div>
        <div id="apply"><LeadForm /></div>
        <div id="proof"><ProofEngine /></div>
        <div id="curriculum"><Curriculum /></div>
        <div id="results"><Testimonials /></div>
        <div id="faq"><FAQ /></div>
        <div id="cta"><CTASection /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
