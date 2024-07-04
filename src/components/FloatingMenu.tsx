// components/FloatingMenu.tsx

import React, { useState } from 'react';
import { Link } from 'react-scroll';

// Define menu items as an array of objects
const menuItems = [
  { id: 'home', label: 'Home', href: 'home' },
  { id: 'about', label: 'About', href: 'about' },
  { id: 'projects', label: 'Projects', href: 'projects' },
  { id: 'contact', label: 'Contact', href: 'contact' },
];

const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-4 right-4 md:left-4 z-49">
      {/* Hamburger Menu Button (for mobile) */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menu Items (for mobile) */}
      <ul className={`mt-4 bg-gray-100 md:bg-transparent rounded-lg p-4 md:p-0 md:flex md:flex-col md:space-y-4 md:space-x-0 ${isOpen ? 'block' : 'hidden'} md:block`}>
        {menuItems.map(item => (
          <li key={item.id} className="md:transform md:rotate-90 md:origin-center">
            <Link
              to={item.href}
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-gray-900 block py-1 px-2 rounded-lg transition duration-300 cursor-pointer"
              onClick={() => setIsOpen(false)} // Close the menu on click (for mobile)
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Normal Menu (for larger screens) */}
      <div className="hidden md:flex md:fixed md:top-20 md:left-0 md:z-50">
        <ul className="space-x-15">
          {menuItems.map(item => (
            <li key={item.id} className="transform rotate-90 origin-center">
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-900 block py-1 px-2 rounded-lg transition duration-300 my-9 cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
