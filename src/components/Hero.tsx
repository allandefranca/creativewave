// components/Hero.tsx

import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [textColor1, setTextColor1] = useState<string>('text-purple-700');
  const [textColor2, setTextColor2] = useState<string>('text-green-700');
  const [textColor3, setTextColor3] = useState<string>('text-pink-700');

  useEffect(() => {
    const interval1 = setInterval(() => {
      const colors = ['text-red-600', 'text-sky-500', 'text-purple-700'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTextColor1(randomColor);
    }, 2000);

    const interval2 = setInterval(() => {
      const colors = ['text-yellow-600', 'text-blue-500', 'text-green-700'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTextColor2(randomColor);
    }, 3000);

    const interval3 = setInterval(() => {
      const colors = ['text-orange-600', 'text-teal-500', 'text-pink-700'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTextColor3(randomColor);
    }, 2500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  const scrollToSection = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="home"
      className="flex justify-center items-center min-h-screen bg-gradient-to-r from-amber-400 to-amber-600"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className={`text-8xl mt-10 sm:text-6xl md:text-9xl font-bold ${textColor1} transition duration-500`}>
          DESIGN
        </h1>
        <h1 className={`text-8xl sm:text-6xl md:text-9xl font-bold ${textColor2} transition duration-500`}>
          DESIGN
        </h1>
        <h1 className={`text-8xl sm:text-6xl md:text-9xl font-bold ${textColor3} transition duration-500`}>
          DESIGN
        </h1>
        <div className="flex flex-col items-center mt-10">
          <div className='text-5xl sm:text-3xl md:text-5xl'>Where</div>
          <div className='text-5xl sm:text-3xl md:text-5xl'>Creativity</div>
          <div className='text-5xl sm:text-3xl md:text-5xl'>Meets</div>
          <div className='text-5xl sm:text-3xl md:text-5xl'>Innovation.</div>
          <span className="mt-10 text-4xl sm:text-5xl cursor-pointer" onClick={scrollToSection}>
            &#8595;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
