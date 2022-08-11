import React from "react";
import TopProjectItem from "./TopProjectItem";

import rowImg from "../public/assets/project-images/row.png";
import theDropImg from "../public/assets/project-images/theDrop.png";
import cofunImg from "../public/assets/project-images/cofun.png";
import wagmiWebsiteIMG from "../public/assets/project-images/wagmiWebsite.png";

const TopProjects = () => {
  return (
    <div id="topprojects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Top Projects
        </p>
        <h2 className="py-4">Highlighted Portfolio Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <TopProjectItem
            title="WIP: Road to Web3 Analytics"
            backgroundImg={rowImg}
            projectUrl="https://github.com/MSBivens/RW3-PoK-Analytics"
            techStack="JavaScript | Next.js | Alchemy API | Kudos API | Tailwind CSS"
          />
          <TopProjectItem
            title="WIP: TheDrop"
            backgroundImg={theDropImg}
            projectUrl="https://github.com/MSBivens/thedrop-website"
            techStack="JavaScript | Next.js | Alchemy API | Tailwind CSS"
          />
          <TopProjectItem
            title="WIP: Community Funding"
            backgroundImg={cofunImg}
            projectUrl="https://github.com/MSBivens/community-funding"
            techStack="Solidity | Hardhat | Next.js | The Graph | IPFS"
          />
          <TopProjectItem
            title="WAGMI Squad Website"
            backgroundImg={wagmiWebsiteIMG}
            projectUrl="https://wagmi-squad-website.vercel.app/"
            techStack="JavaScript | Next.js | Tailwind CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
