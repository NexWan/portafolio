'use client'

import Link from 'next/link'
import React, {useState} from 'react'

const Navbar = () => {
    let options = ["Home", "Skills", "Projects", "Contact"]
    let [active, setActive] = useState(0)

    const handleClick = (index:number) => {
        setActive(index)
        console.log(index)
        changePage(index)
    }

    const changePage = (index:number) => {
        switch(index) {
            case 0:
                <link href='/home' />
            case 1:
                <link href='/skills' />
            case 2:
                
            default:
        }
    }

  return (
      <ul className=' flex mx-12 space-x-10'>
            {options.map((option, index) => {
                return <li className="hover:scale-105 transition-all hover:cursor-pointer" onClick={() => handleClick(index)} key={index}>{
                    <Link href={`/${option.toLowerCase()}`}>{option}</Link> //This is madshit right here, I can't believe it works
                }</li>
            })}
      </ul>
  )
}

export default Navbar
