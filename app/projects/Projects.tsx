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
                techs={[['Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg'], ['BeautifulSoup', 'https://i.imgur.com/Cyi0REm.png'], ]}
                images={['/assets/img/scrapper1.png', '/assets/img/scrapper2.png', '/assets/img/scrapper3.png']}
                />
                <TemplateCard
                title='Chase a Rooster'
                desc='Chase a Rooster is a 3d game that I made with unity and C# for a school project where you need to catch a rooster in a different levels, it uses AI for the rooster to run away from you'
                image='https://i.imgur.com/uqQ5eSX.png'
                url='https://github.com/NexWan/Proyecto-Final-Graficacion'
                techs={[['Unity', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"], ['C#', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"]]}
                images={['/assets/img/rooster0.png', '/assets/img/rooster1.png', '/assets/img/rooster2.png', '/assets/img/rooster3.png']}
                />
                <TemplateCard
                title='Sql data script generator'
                desc='This is a desktop app I made with Java and JavaFX that generates a SQL script with a set of data that you provide, it generates the script for you to insert the data into a database'
                image='https://raw.githubusercontent.com/NexWan/Generador-de-datos/master/ImagesForGit/MainGUI.png'
                url='https://github.com/NexWan/Generador-de-datos/tree/master'
                techs={[['Java', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"], ['JavaFX', 'https://i.imgur.com/S2A8wCU.png']]}
                images={['/assets/img/sql1.png', '/assets/img/sql2.png', '/assets/img/sql3.png']}
                />
                <TemplateCard
                title='Engineering school chapter webpage'
                desc="This is a webpage that I'm making with Angular for my engineering school chapter, it's still in development"
                image='https://api.pikwy.com/web/6670465abe0c823d2832b926.jpg'
                url='https://github.com/CapituloSistemasITS/CapituloSistemasITS.github.io'
                pageUrl='https://cscits.vercel.app/home'
                techs={[['Angular', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain-wordmark.svg"],
                   ['TypeScript', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"], 
                   ['HTML', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"], 
                   ['CSS', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"],
                   ['TailwindCSS', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"]]}
                images={['/assets/img/cap1.png', '/assets/img/cap2.png', '/assets/img/cap3.png']}
                />
                <TemplateCard
                title='Database manager'
                desc='This is a desktop app I made with C# and WPF, using Sql Server as the database manager and google cloud, it allows you to manage a database with a GUI following a MVVM pattern'
                image='/assets/img/bd1.png'
                url='https://github.com/NexWan/ProyectoAdminBD'
                techs={[['C#', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"], ['WPF', 'https://i.imgur.com/4P6VJ9a.png'], ['SQL Server', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"], ['Google Cloud', "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg"]]}
                images={['/assets/img/bd1.png', '/assets/img/bd2.png', '/assets/img/bd3.png', '/assets/img/bd4.png', '/assets/img/bd5.png']}
                />
            </div>
        </div>
    </div>
  )
}

export default Projects
