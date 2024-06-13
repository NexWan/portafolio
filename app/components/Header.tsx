'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => { // This is a hook that runs when the component mounts
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`mx-auto border-b-2 border-b-white sticky top-0 transition-all ${isSticky ? 'bg-dark-nav scale-105' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto items-center flex justify-between max-h-16 min-h-12">
        <h1 className="mx-12 text-2xl">Leo</h1>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;