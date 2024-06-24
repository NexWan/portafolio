'use client';

import React from "react";
import Image from "next/image";
import Socials from "./Socials";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={`h-max pb-20 ${styles.fadeIn}`}>
      <div className="mx-auto max-w-screen-lg rounded-xl">
        <h1 className="text-3xl font-bold text-center mt-10">Contact</h1>
        <p className="text-center mt-5">You can contact me in any of these media!</p>
        <div className="flex flex-row items-center justify-between max-w-2xl mx-auto bg-dark-nav p-10 rounded-2xl shadow-2xl mt-5">
          <div className="flex flex-col justify-center items-center w-xl">
            <Image src='https://github.com/nexwan.png' width={200} height={200} className='rounded-full' alt={'pfp'} />
            <h1 className="text-2xl font-bold text-center mt-5">Leo</h1>
            <p className="text-center mt-5 font-semibold">Fullstack Developer</p>
          </div>
          <div className="flex flex-col justify-center mt-5 ">
            <Socials image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" url="https://github.com/NexWan" media="Github" />
            <Socials image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" url="https://www.linkedin.com/in/leonardo-contreras-martinez-a30843229/" media="Linkedin" />
            <Socials image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" url="https://twitter.com/oddaSnowLeopard" media="Twitter/X" />
            <Socials image="/assets/img/discord.png" url="" media="nexwan" />
            <Socials image='/assets/img/youtube.png' url="https://www.youtube.com/channel/UCiz20o43BnNUivexBrFH2Vw" media="Youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

