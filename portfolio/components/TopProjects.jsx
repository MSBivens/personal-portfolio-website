import Image from "next/image";
import React from "react";
import TopProjectItem from "./TopProjectItem";

import lotteryImg from "../public/assets/project-images/lottery.PNG";
import templateImg from "../public/assets/project-images/dao-template.PNG";
import dnftImg from "../public/assets/project-images/dnft.PNG";
// import propertyImg from '../public/assets/project-images/property.png';

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
          {/* <TopProjectItem */}
          {/* title="Property Finder" */}
          {/* backgroundImg={propertyImg} */}
          {/* projectUrl="/property" */}
          {/* techStack={techStack} */}
          {/* /> */}
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
