import React from 'react'
import styles from './home.module.css'

const home = () => {
    let name:string = "John Doe";
  return (
    <div id='homeBody' className={`${styles.homeBody} ${' text-2xl rounded-b-xl px-5 h-screen'}`}>
      {name}
    </div>
  )
}

export default home
