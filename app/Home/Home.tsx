'use client'

import React, { useState } from 'react'; // Ensure React is imported for useState
import styles from './home.module.css';
import { ReactTyped, Typed } from 'react-typed';
import Image from 'next/image';

const Home = () => {
  const [typed, setTyped] = useState<Typed | undefined>();
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false); // State to track completion of the first animation
  const [clicked, setClicked] = useState(false); // State to track if the user clicked the button
  const birthDate = new Date(2003, 7, 13); // Note: Months are 0-indexed, so 7 is August
  var age = new Date().getFullYear() - birthDate.getFullYear();
  const monthDifference = new Date().getMonth() - birthDate.getMonth();
  const dayDifference = new Date().getDate() - birthDate.getDate();
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  let name: string = "Leo";

  return (
    <div id='homeBody' className={`${styles.homeBody} ${styles.fadeIn} ${' text-white z-10 text-2xl rounded-b-xl py-5 min-h-screen text-center justify-center content-center my-auto '}`}>
      <div className='p-5'>
        <ReactTyped
          onBegin={() => { typed?.stop(); }}
          strings={[`Hello, I'm ${name}.`]}
          typeSpeed={30}
          backSpeed={15}
          className='text-2xl md:text-4xl font-bold text-center'
          onComplete={() => {
            setFirstAnimationComplete(true); // Set the state to true when the first animation completes
            console.log('First animation done');
          }}
          showCursor={false}
        />
      </div>
      {firstAnimationComplete && ( // Render the second ReactTyped component only after the first animation completes
        <div className={`'p-5' ${styles.fadeIn}`}> {/* Add the fadeIn class here */}
          <div className='flex flex-col items-center'>
            <Image src='https://github.com/nexwan.png' width={300} height={300} className='rounded-full h-32 w-32 md:w-max md:h-max' alt={'pfp'} />
            <div className='p-5'>
              <ReactTyped
                typedRef={(instance) => { setTyped(instance); }}
                onBegin={() => { typed?.stop(); }}
                strings={['Fullstack Developer', 'Software Engineer Student', 'Networking Enthusiast', 'Tech Enthusiast']}
                typeSpeed={40}
                backSpeed={50}
                className='text-xl md:text-2xl font-bold text-center'
                loop
              />
            </div>
          </div>
          <div>
            <h1 className='text-lg md:text-xl'>Want to know more about me?</h1>
            <a href='#about' className='hover:underline py-2 text-lg md:text-xl' onClick={(event) => setClicked(true)}>Click me!</a>
          </div>
        </div>
      )}
      {clicked && (
        <div id='about' className={`${styles.aboutBody} ${styles.fadeIn} w-screen my-24 p-5`}>
          <div className=' mx-auto max-w-screen-md'>
            <h1 className=' md:text-3xl py-5 font-semibold'>About Me</h1>
            <p className={`md:text-lg text-justify mb-5 text-base ${styles.customParagraph} `}>
              I&apos;m a {age} year old mexican student currently studying Software Engineering at the Tecnologico Nacional de Mexico.
              I&apos;m passionate about technology and I&apos;m always looking to learn something new!
              I&apos;m currently learning about Fullstack development, specially the backend part of it. I&apos;m also learning about networking and cybersecurity.<br></br>
              I&apos;ve participated at the Oracle Academy and I&apos;m currently involved with a state wide project called &quot;DinoBus&quot;.
              I&apos;m also really passionate about music, I play the guitar and I&apos;m always looking for new music to listen to.<br></br>
              I also won a hackaton organized by my university at regional level with a project called &apos;Manos que ven&apos; which is a project that teaches sign language through a react native app.<br></br>
              Oh and I&apos;m currently working at Softtek as a software developer intern.
            </p>
            <b className='text-lg md:text-xl'>Here you can see what I&apos;m listening to<br></br></b>
            <img className='mx-auto my-6 w-fit' src="https://spoti-playing.vercel.app/api/svg?userId=31yzahwadeqrj7t3znaogbz63vjm&compact=true" alt="spotify" />
            <p className=' text-sm'>This is my own embeded SVG implementation! {<a href='https://github.com/NexWan/SpotiPlaying' className='cursor-pointer text-blue-400 hover:scale-105'>SpotiPlaying</a>}</p>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Home;