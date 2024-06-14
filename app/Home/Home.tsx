'use client'

import React, { useState } from 'react'; // Ensure React is imported for useState
import styles from './home.module.css';
import { ReactTyped, Typed } from 'react-typed';
import Image from 'next/image';

const Home = () => {
  const [typed, setTyped] = useState<Typed | undefined>();
  const [firstAnimationComplete, setFirstAnimationComplete] = useState(false); // State to track completion of the first animation
  let name: string = "Leonardo";

  return (
    <div id='homeBody' className={`${styles.homeBody} ${' text-2xl rounded-b-xl p-5 h-screen text-center justify-center content-center my-auto'}`}>
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
        </div>
      )}
    </div>
  );
};

export default Home;