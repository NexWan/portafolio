import React from 'react'
import Image from 'next/image'

const Socials = ({image, url, media}:{image:string, url:string, media:string}) => {
    const validateUrl = (url:string) => {
        if(url.includes('https://')){
            return '_blank'
        }
        return '_self'
    }
  return (
    <div className="flex flex-row items-center space-x-2 md:space-x-5 sm:mr-10 mt-2">
        <Image src={image} width={50} height={50} alt={"github"} />
    <a href={url} className="hover:underline font-semibold" target={validateUrl(url)} >{media}</a>
  </div>
  )
}

export default Socials
