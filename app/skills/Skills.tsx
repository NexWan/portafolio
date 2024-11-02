import React from "react";
import styles from "./skills.module.css";

const Skills = () => {

    return (
        <div className={`${styles.fadeIn} ${styles.skillsBody} h-max pb-20 text-white`}>
            <div className="mx-auto max-w-screen-lg">
                <h1 className="md:text-3xl text-xl py-5 font-semibold text-center">Skills</h1>
                <p className=" md:text-lg text-base text-center">
                    I&apos;ve acquired a variety of skills during my time as a developer.
                    Here are some of the technologies I&apos;m familiar with:
                </p>
                <h1 className="md:text-3xl text-xl py-5 font-semibold text-center">My favorite tools</h1>
                <p className=" md:text-lg text-base text-center">
                    Here are some of the tools I use on a daily basis:
                </p>
                <div className={`flex flex-wrap max-w-screen-lg mx-auto gap-x-14 gap-y-6 justify-evenly my-5  shadow-sm shadow-white p-10 rounded-xl ${styles.colorSkills}`}>
                    <img src="https://go-skill-icons.vercel.app/api/icons?i=git,ts,vscode,react,tailwind,github,figma&titles=true&perline=4"/>
                </div>
                <div className="mx-auto my-10" id="front">
                    <h1 className="md:text-2xl text-xl font-semibold text-center">Front end</h1>
                    <div className={`flex flex-wrap max-w-screen-lg mx-auto gap-x-14 gap-y-6 justify-evenly my-5 w-xl shadow-sm shadow-white p-10 rounded-xl ${styles.colorSkills} `}>
                        <img src="https://go-skill-icons.vercel.app/api/icons?i=react,css,scss,tailwind,angular,html,js,figma,vue,canva&perline=5"/>
                    </div>
                </div>
                <div id="back" className="mx-auto my-10">
                    <h1 className="md:text-2xl text-xl font-semibold text-center">Back end</h1>
                    <div className={`flex flex-wrap max-w-screen-lg mx-auto gap-x-14 gap-y-6 justify-evenly my-5 w-xl shadow-sm shadow-white p-10 rounded-xl ${styles.colorSkills} `}>
                        <img src="https://go-skill-icons.vercel.app/api/icons?i=java,ts,js,python,cs,c,cpp,zig,rust,sqlite,oracle,sqlserver,googlecloud,azure,postgresql,spring&perline=8"/>
                    </div>
                </div>
                <div id="other" className="mx-auto my-10">
                    <h1 className="md:text-2xl text-xl font-semibold text-center">Other technologies</h1>
                    <div
                        className={`flex flex-wrap max-w-screen-lg mx-auto gap-x-14 gap-y-6 justify-evenly my-5 w-xl shadow-sm shadow-white p-10 rounded-xl ${styles.colorSkills} `}>
                        <img src="https://go-skill-icons.vercel.app/api/icons?i=git,vscode,idea,unity,arch,postman,nodejs,bun,api,svg&perline=5"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
