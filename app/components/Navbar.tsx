'use client'

import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const options = ["Home", "Skills", "Projects", "Contact"];
    const [active, setActive] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const index = options.findIndex(option => option.toLowerCase() === pathname.slice(1));
        if(pathname === '/') setActive(0); // Set active to 0 if pathname is / (options.)
        if (index !== -1) {
            setActive(index);
        }
    },[options, pathname] );

    const handleClick = (index: number) => {
        setActive(index);
        console.log(index);
    };

    return (
        <ul className='flex mx-12 space-x-10'>
            {options.map((option, index) => {
                const isActive = active === index;
                return <li 
                    className={`hover:scale-105 transition-all hover:cursor-pointer hover:underline  ${isActive ? 'underline underline-offset-4 scale-105 decoration-2' : ''}`} // Apply underline if active
                    onClick={() => handleClick(index)} 
                    key={index}
                >
                    <Link href={`/${option.toLowerCase()}`}>{option}</Link>
                </li>;
            })}
        </ul>
    );
};

export default Navbar
