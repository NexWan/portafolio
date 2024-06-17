import React from "react";
import styles from "./projects.module.css";

interface TemplateCardProps {
  title: string;
  desc: string;
  image: string;
  url: string;
  pageUrl?: string;
}

const TemplateCard = ({
  title,
  desc,
  image,
  url,
  pageUrl,
}: TemplateCardProps) => {
  return (
    <div className={`rounded-xl p-4 ${styles.themeColor} flex justify-center flex-col`}>
      <h1 className="text-2xl font-bold text-center mt-5">{title}</h1>
      <p className="text-center mt-5">{desc}</p>
      <img src={image} alt={title} className=" w-max mx-auto mt-5" />
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
    </div>
  );
};

export default TemplateCard;
