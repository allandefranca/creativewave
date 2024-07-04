// pages/index.tsx

import React from 'react';
import FloatingMenu from '../components/FloatingMenu';
import BrandName from '../components/BrandName';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <BrandName />
      <FloatingMenu />
      <Hero />
      <About />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
