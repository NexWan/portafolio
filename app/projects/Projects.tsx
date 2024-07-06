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
                title='SpotiPlaying'
                desc='SpotiPlaying is an embeded SVG that shows the song you are listening to on Spotify, it uses the Spotify API to get the song data and the SVG is made with vanilla HTML and CSS so you can embed it on your website or github profile'
                image='https://spoti-playing.vercel.app/api/svg?userId=31yzahwadeqrj7t3znaogbz63vjm'
                url='https://github.com/NexWan/SpotiPlaying'
                techs={[['HTML', 'https://go-skill-icons.vercel.app/api/icons?i=html,css,react,typescript,tailwindcss,postgresql,nextjs,vercel&theme=dark']]}
                images={['/assets/img/spoti1.png', '/assets/img/spoti2.png', '/assets/img/spoti3.png']}
                isSvg={true}
                />
                <TemplateCard 
                title='Euroscrapper' 
                desc='Euroscrapper is a web scrapper made with python which scraps data from the website Eurogamer in a JSON format' 
                image='https://camo.githubusercontent.com/fa3c047176babcabaa0faec7b680a7524d1a5f9dd21a196f296ad435972d28d4/68747470733a2f2f692e696d6775722e636f6d2f453767496b79662e676966' 
                url='https://github.com/NexWan/euroscrapper'
                techs={[['Python', 'https://go-skill-icons.vercel.app/api/icons?i=python,bash&theme=dark'] ]}
                images={['/assets/img/scrapper1.png', '/assets/img/scrapper2.png', '/assets/img/scrapper3.png']}
                />
                <TemplateCard
                title='Chase a Rooster'
                desc='Chase a Rooster is a 3d game that I made with unity and C# for a school project where you need to catch a rooster in a different levels, it uses AI for the rooster to run away from you'
                image='https://i.imgur.com/uqQ5eSX.png'
                url='https://github.com/NexWan/Proyecto-Final-Graficacion'
                techs={[['Unity', "https://go-skill-icons.vercel.app/api/icons?i=unity,cs&theme=dark"]]}
                images={['/assets/img/rooster0.png', '/assets/img/rooster1.png', '/assets/img/rooster2.png', '/assets/img/rooster3.png']}
                />
                <TemplateCard
                title='Sql data script generator'
                desc='This is a desktop app I made with Java and JavaFX that generates a SQL script with a set of data that you provide, it generates the script for you to insert the data into a database'
                image='https://raw.githubusercontent.com/NexWan/Generador-de-datos/master/ImagesForGit/MainGUI.png'
                url='https://github.com/NexWan/Generador-de-datos/tree/master'
                techs={[['Java', "https://go-skill-icons.vercel.app/api/icons?i=java&theme=dark"]]}
                images={['/assets/img/sql1.png', '/assets/img/sql2.png', '/assets/img/sql3.png']}
                />
                <TemplateCard
                title='Engineering school chapter webpage'
                desc="This is a webpage that I'm making with Angular for my engineering school chapter, it's still in development"
                image='https://api.pikwy.com/web/6670465abe0c823d2832b926.jpg'
                url='https://github.com/CapituloSistemasITS/CapituloSistemasITS.github.io'
                pageUrl='https://cscits.vercel.app/home'
                techs={[['Angular', "https://go-skill-icons.vercel.app/api/icons?i=angular,ts,html,css,tailwind&theme=dark"]]}
                images={['/assets/img/cap1.png', '/assets/img/cap2.png', '/assets/img/cap3.png']}
                />
                <TemplateCard
                title='Database manager'
                desc='This is a desktop app I made with C# and WPF, using Sql Server as the database manager and google cloud, it allows you to manage a database with a GUI following a MVVM pattern'
                image='/assets/img/bd1.png'
                url='https://github.com/NexWan/ProyectoAdminBD'
                techs={[['C#', 'https://go-skill-icons.vercel.app/api/icons?i=cs,dotnet,gcp,sqlserver&theme=dark']]}
                images={['/assets/img/bd1.png', '/assets/img/bd2.png', '/assets/img/bd3.png', '/assets/img/bd4.png', '/assets/img/bd5.png']}
                />
                <TemplateCard
                title='iot container manager'
                desc='This is a desktop app me and my team made using Rust and ESP32, it allows you to manage a container with a GUI made with ElectronJS and Angular, it uses a database made with Postgres and Elysia for the backend server'
                image='/assets/img/container.png'
                url='https://github.com/NexWan/Proyecto-final-programables'
                techs={[['Rust', 'https://go-skill-icons.vercel.app/api/icons?i=rust,angular,electron,elysia,postgres&theme=dark']]}
                images={['/assets/img/container.png', '/assets/img/container2.png', '/assets/img/container3.png', '/assets/img/container4.png', '/assets/img/container5.png']}
                />
            </div>
        </div>
    </div>
  )
}

export default Projects
