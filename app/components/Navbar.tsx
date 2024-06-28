"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = ({setSticky,}:{setSticky:() => void;}) => {
  const options = ["Home", "Skills", "Projects", "Contact"];
  const [active, setActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage slide menu visibility
  const pathname = usePathname();

  useEffect(() => {
    const index = options.findIndex(
      (option) => option.toLowerCase() === pathname.slice(1)
    );
    if (pathname === "/") setActive(0); // Set active to 0 if pathname is / (options.)
    if (index !== -1) {
      setActive(index);
    }
  }, [options, pathname]);

  const handleClick = (index: number) => {
    setActive(index);
    console.log(index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; // Toggle slide menu visibility

  if(isMenuOpen) setSticky();

  return (
    <>
      <button className="sm:hidden mr-5 " onClick={toggleMenu}>
        {/* Icon or text to represent menu toggle */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="35"
          viewBox="0 0 50 50"
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
      </button>
      {/* Adjusted classes for conditional rendering based on isMenuOpen and screen size */}
      <ul
        className={`mx-12 space-x-10 ${
          isMenuOpen ? "hidden sm:hidden" : "flex sm:flex"
        } hidden md:flex justify-center sm:justify-end sm:space-x-5 md:space-x-10 lg:space-x-20`}
      >
        {options.map((option, index) => {
          const isActive = active === index;
          return (
            <li
              className={`hover:scale-105 transition-all hover:cursor-pointer hover:underline  ${
                isActive
                  ? "underline underline-offset-4 scale-105 decoration-2"
                  : ""
              }`} // Apply underline if active
              onClick={() => handleClick(index)}
              key={index}
            >
              <Link href={`/${option.toLowerCase()}`}>{option}</Link>
            </li>
          );
        })}
      </ul>
      {/* Slide Menu for smaller screens */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center space-y-5 z-50">
          <div className=" fixed inset-0 z-50 w-screen h-screen" >
          <ul className="w-screen h-screen fixed inset-0 z-40 bg-gray-800 bg-opacity-75 sm:hidden flex flex-col items-center justify-center space-y-6">
            {options.map((option, index) => (
              <li
                className="text-white text-xl z-30"
                onClick={() => {
                  handleClick(index);
                  toggleMenu();
                }}
                key={index}
              >
                <Link href={`/${option.toLowerCase()}`}>{option}</Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

