// components/AboutSection.tsx

import React, { useEffect, useRef, useState } from 'react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 py-16 transition-opacity duration-1000 ${
        isVisible ? 'animate-fadeIn' : 'opacity-0'
      }`}
    >
      <div className="max-w-4xl mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About CreativeWave</h2>
          <p className="text-lg text-white">
            Welcome to CreativeWave, where innovation meets creativity in every ripple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white">
              At CreativeWave, our mission is to empower individuals and businesses to harness the power of creativity. We break free from conventions, ride the waves of imagination, and create experiences that resonate deeply.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">What Drives Us</h3>
            <p className="text-white">
              Driven by curiosity and a relentless pursuit of excellence, we thrive on challenges that push us to explore new horizons. Our commitment to innovation drives us to discover cutting-edge solutions that shape the future of design.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Our Team</h3>
          <p className="text-white">
            Meet our diverse team of visionaries, artists, and technologists who bring dreams to life. With expertise spanning digital design, interactive experiences, and beyond, we collaborate seamlessly to craft unique narratives and unforgettable journeys.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <a href="#contact" className="text-white bg-transparent border-2 border-white py-2 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
            Join the Wave
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
