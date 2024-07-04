// components/BrandName.tsx

import React from 'react';

const BrandName: React.FC = () => {
  const scrollToHome = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed top-4 left-4 md:left-20 p-2 md:p-4 cursor-pointer z-50"
      onClick={scrollToHome}
    >
      <h1 className="text-xl md:text-2xl font-bold text-gray-800">
        CreativeWave
      </h1>
    </div>
  );
};

export default BrandName;
