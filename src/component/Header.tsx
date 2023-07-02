import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-red-500 to-pink-500 py-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-white text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Saad</h1>
        <nav className={`space-x-4 sm:flex ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Hire Us</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Development</a>
          {/* Add more options here */}
        </nav>
        <div className="sm:hidden">
          <button
            className="text-white focus:outline-none focus:text-gray-300"
            onClick={toggleMenu}
          >
            <svg
              className={`h-6 w-6 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
