'use client';

import React from "react";
import styles from "./projects.module.css";
import Popup from "../components/Popup";
import Image from "next/image";

interface TemplateCardProps {
  title: string;
  desc: string;
  image: string;
  url: string;
  pageUrl?: string;
  techs: string[][];
  images: string[];
}

const TemplateCard = ({
  title,
  desc,
  image,
  url,
  pageUrl,
  techs,
  images,
}: TemplateCardProps) => {
  const [show, setShow] = React.useState(false);
  const showPoup = () => {
    setShow(!show);
  }
  return (
    <div className={`rounded-xl p-4 ${styles.themeColor} hover:cursor-pointer flex justify-center flex-col hover:scale-105 transition-all duration-100`} onClick={showPoup}>
      <h1 className="text-2xl font-bold text-center mt-5">{title}</h1>
      <p className="text-center mt-5">{desc}</p>
      <Image src={`${image}`} alt={title} className=" w-full mx-auto mt-5 h-max" width={500} height={0} />
      <p className="text-center mt-5">
        Here you can see the{" "}
        <a
          href={url}
          className="underline underline-offset-4 decoration-2 hover:scale-105"
          target="_blank"
          rel="noreferrer"
        >
          repo
        </a>
        {" "}of the project!
        {pageUrl && (
          <>
            {" "}
            <br></br>
            and the{" "}
            <a
              href={pageUrl}
              className="underline underline-offset-4 decoration-2 hover:scale-105"
              target="_blank"
              rel="noreferrer"
            >
              page
            </a>
            {" "}of the project!
          </>
        )}
      </p>
      <Popup show={show} title={title} desc={desc} techs={techs} images={images} repo={url}/>
    </div>
  );
};

export default TemplateCard;
