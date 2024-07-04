// components/ProjectsSection.tsx

import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Interactive Web Design',
    description: 'Explore our innovative approach to interactive web design, combining cutting-edge technologies with seamless user experiences.',
    imageUrl: '/images/project1.jpg',
  },
  {
    id: 2,
    title: 'Digital Branding Solutions',
    description: 'Discover how we redefine digital branding, crafting compelling narratives and memorable identities that resonate with audiences.',
    imageUrl: '/images/project2.jpg',
  },
  {
    id: 3,
    title: 'Creative Mobile Apps',
    description: 'From concept to deployment, dive into our portfolio of creative mobile applications designed to inspire and engage users globally.',
    imageUrl: '/images/project3.jpg',
  },
];

const ProjectsSection: React.FC = () => {
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
      id="projects"
      ref={sectionRef}
      className={`flex justify-center items-center min-h-screen bg-gray-100 py-16 transition-opacity duration-1000 ${
        isVisible ? 'animate-fadeIn' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600">
            Explore some of our recent projects that showcase our creativity and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          {projects.map(project => (
            <div
              key={project.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-500 ${
                isVisible ? 'animate-slideIn' : 'transform -translate-x-full'
              }`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
