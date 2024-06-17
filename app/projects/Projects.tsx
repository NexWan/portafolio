import React from 'react'
import TemplateCard from './TemplateCard'
import styles from './projects.module.css'
const Projects = () => {
  return (
    <div className={`h-max pb-20 ${styles.fadeIn}`}>
        <div className="mx-auto max-w-screen-lg">
            <h1 className="text-3xl font-bold text-center mt-10">Projects</h1>
            <p className="text-center mt-5">Here you can see some of my personal projects!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10"> 
                <TemplateCard 
                title='Euroscrapper' 
                desc='Euroscrapper is a web scrapper made with python which scraps data from the website Eurogamer in a JSON format' 
                image='https://camo.githubusercontent.com/fa3c047176babcabaa0faec7b680a7524d1a5f9dd21a196f296ad435972d28d4/68747470733a2f2f692e696d6775722e636f6d2f453767496b79662e676966' 
                url='https://github.com/NexWan/euroscrapper'
                />
                <TemplateCard
                title='Chase a Rooster'
                desc='Chase a Rooster is a 3d game that I made with unity and C# for a school project where you need to catch a rooster in a different levels, it uses AI for the rooster to run away from you'
                image='https://i.imgur.com/uqQ5eSX.png'
                url='https://github.com/NexWan/Proyecto-Final-Graficacion'
                />
                <TemplateCard
                title='Sql data script generator'
                desc='This is a desktop app I made with Java and JavaFX that generates a SQL script with a set of data that you provide, it generates the script for you to insert the data into a database'
                image='https://raw.githubusercontent.com/NexWan/Generador-de-datos/master/ImagesForGit/MainGUI.png'
                url='https://github.com/NexWan/Generador-de-datos/tree/master'
                />
                <TemplateCard
                title='Webpage for my engineering school chapter'
                desc="This is a webpage that I'm making with Angular for my engineering school chapter, it's still in development"
                image='https://api.pikwy.com/web/6670465abe0c823d2832b926.jpg'
                url='https://github.com/CapituloSistemasITS/CapituloSistemasITS.github.io'
                pageUrl='https://cscits.vercel.app/home'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects
