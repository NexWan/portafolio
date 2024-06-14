'use client'

import React, { useState } from 'react'; // Ensure React is imported for useState
import styles from './home.module.css';
import { ReactTyped, Typed } from 'react-typed';
import Image from 'next/image';

const Home = () => {
  const [typed, setTyped] = useState<Typed | undefined>();
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false); // State to track completion of the first animation
  const [clicked, setClicked] = useState(false); // State to track if the user clicked the button
  let name: string = "Leo";

  return (
    <div id='homeBody' className={`${styles.homeBody} ${' text-2xl rounded-b-xl py-5 min-h-screen text-center justify-center content-center my-auto '}`}>
      <div className='p-5'>
        <ReactTyped
          onBegin={() => { typed?.stop(); }}
          strings={[`Hello, I'm ${name}.`]}
          typeSpeed={30}
          backSpeed={15}
          className='text-4xl font-bold text-center'
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
            <Image src='https://github.com/nexwan.png' width={300} height={300} className='rounded-full' alt={'pfp'} />
            <div className='p-5'>
              <ReactTyped
                typedRef={(instance) => { setTyped(instance); }}
                onBegin={() => { typed?.stop(); }}
                strings={['Fullstack Developer', 'Software Engineer Student', 'Networking Enthusiast', 'Tech Enthusiast']}
                typeSpeed={40}
                backSpeed={50}
                className='text-2xl font-bold text-center'
                loop
              />
            </div>
          </div>
          <div>
            <h1>Want to know more about me?</h1>
            <a href='#about' className='hover:underline py-2' onClick={(event) => setClicked(true)}>Click me!</a>
          </div>
        </div>
      )}
      {clicked && (
        <div id='about' className={`${styles.aboutBody} ${styles.fadeIn} w-screen my-24 p-5`}>
          <div className=' mx-auto max-w-screen-lg'>
            <h1 className=' text-3xl py-5 font-semibold'>About Me</h1>
            <p className=' text-lg text-center'>
              I'm a 20 year old mexican student currently studying Software Engineering at the Tecnologico Nacional de Mexico.<br></br>
              I'm passionate about technology and I'm always looking to learn something new!<br></br><br></br>
              I'm currently learning about Fullstack development, specially the backend part of it. I'm also learning about networking and cybersecurity.<br></br>
              I've participated at the Oracle Academy and I'm currently involved with a state wide project called "DinoBus".<br></br><br></br>
              I'm also really passionate about music, I play the guitar and I'm always looking for new music to listen to.<br></br><br></br>
              <b>Here you can see what I'm currently listening to ;D<br></br></b>
              <img className='mx-auto my-12' src="https://spotify-github-profile.vercel.app/api/view?uid=31yzahwadeqrj7t3znaogbz63vjm&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=false" />
            </p>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Home;