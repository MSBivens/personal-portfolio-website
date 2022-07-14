import React from "react";
import TopProjectItem from "./TopProjectItem";

import lotteryImg from "../public/assets/project-images/lottery.PNG";
import templateImg from "../public/assets/project-images/dao-template.png";
import dnftImg from "../public/assets/project-images/dnft.png";
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
            title="Lottery Game"
            backgroundImg={lotteryImg}
            projectUrl="https://github.com/MSBivens/learn-web3-dao-graph"
            techStack="Solidity | Hardhat | The Graph | Ethers.js | Next.js"
          />
          <TopProjectItem
            title="DAO Template"
            backgroundImg={templateImg}
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-dao-template"
            techStack="Solidity | TypeScript | Hardhat | Openzeppelin | Ethers.js"
          />
          <TopProjectItem
            title="dNFT Character Builder"
            backgroundImg={dnftImg}
            projectUrl="https://github.com/MSBivens/dnft_character_builder"
            techStack="Solidity | Python | Flask | Brownie | Chainlink"
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
