import React from "react";
import Link from "next/link";

const PortfolioItem = ({ title, tagline, projectUrl, techStack }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid gap-4 justify-center items-center">
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="flex flex-col items-center justify-center">{tagline}</p>
        <p className="flex flex-col items-center justify-center">{techStack}</p>
        <Link href={projectUrl}>
          <p className="flex flex-col items-center justify-center font-bold text-lg cursor-pointer">
            See the Repo
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
