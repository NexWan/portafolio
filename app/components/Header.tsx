'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

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
    <div className={` z-50 overscroll-contain w-screen mx-auto border-b-2 border-b-white sticky  top-0 transition-all ${isSticky ? 'bg-dark-nav scale-y-105' : 'bg-transparent'} overflow-x-hidden`}>
      <div className={`max-w-screen-xl mx-auto items-center flex justify-between max-h-16 min-h-12 transition-all ${isSticky ? 'scale-105' : ''}`}>
        <div className='flex flex-row justify-between'>
          <Image src='https://github.com/nexwan.png' width={30} height={30} className='rounded-full ml-5' alt={'pfp'} />
          <h1 className=" ml-2 text-2xl font-semibold ">Leo </h1>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;