import React from "react";
import styles from "./skills.module.css";
import Image from "next/image";

const Skills = () => {
    const frontEndImages = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
    ];
    const backEndImages = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zig/zig-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    ];

    const otherTechImages = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/clion/clion-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg"
    ];

    const favs = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    ];

    return (
        <div className={`${styles.fadeIn} ${styles.skillsBody} h-max pb-20 text-white`}>
            <div className="mx-auto max-w-screen-lg">
                <h1 className="text-3xl py-5 font-semibold text-center">Skills</h1>
                <p className=" text-lg text-center">
                    I&apos;ve acquired a variety of skills during my time as a developer.
                    Here are some of the technologies I&apos;m familiar with:
                </p>
                <h1 className="text-3xl py-5 font-semibold text-center">My favorite tools</h1>
                <p className=" text-lg text-center">
                    Here are some of the tools I use on a daily basis:
                </p>
                <div className={`flex flex-wrap gap-x-14 gap-y-6 justify-evenly my-5 w-xl shadow-sm shadow-white p-10 rounded-xl ${styles.colorSkills}`}>
                    {favs.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt="Favorite tools"
                            className="size-12 lg:size-20 hover:scale-105 transition-all"
                            width={1}
                            height={1}
                        />
                    ))}
                </div>
                <div className="mx-auto my-10" id="front">
                    <h1 className="text-2xl font-semibold text-center">Front end</h1>
                    <div
                        className={`flex flex-wrap gap-x-14 gap-y-6 justify-evenly my-5 w-xl shadow-sm shadow-white p-10 rounded-xl ${styles.colorSkills} `}>
                        {frontEndImages.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt="Front end"
                                className="size-12 lg:size-20 hover:scale-105 transition-all"
                                width={1}
                                height={1}
                            />
                        ))}
                    </div>
                </div>
                <div id="back" className="mx-auto my-10">
                    <h1 className="text-2xl font-semibold text-center">Back end</h1>
                    <div
                        className={`flex flex-wrap gap-x-14 gap-y-6 justify-evenly my-5 w-xl shadow-sm shadow-white p-10 rounded-xl ${styles.colorSkills} `}>
                        {backEndImages.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt="Back end"
                                className=" size-12 lg:size-20 hover:scale-105 transition-all"
                                width={1}
                                height={1}
                            />
                        ))}
                    </div>
                </div>
                <div id="other" className="mx-auto my-10">
                    <h1 className="text-2xl font-semibold text-center">Other technologies</h1>
                    <div
                        className={`flex flex-wrap gap-x-14 gap-y-6 justify-evenly my-5 w-xl shadow-sm shadow-white p-10 rounded-xl ${styles.colorSkills} `}>
                        {otherTechImages.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt="Other technologies"
                                className="size-12 lg:size-20 hover:scale-105 transition-all"
                                width={1}
                                height={1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
