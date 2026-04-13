import React from 'react';
import { Hero } from '../components/Hero';
import { LogoStrip } from '../components/LogoStrip';
import { Features } from '../components/Features';
import { SoftwareShowcase } from '../components/SoftwareShowcase';
import { Efficiency } from '../components/Efficiency';
import { ServiceList } from '../components/ServiceList';
import { About } from '../components/About';
import { Integrations } from '../components/Integrations';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Features />
      <SoftwareShowcase />
      <Efficiency />
      <ServiceList />
      <About />
      <Integrations />
    </>
  );
};

export default Home;
