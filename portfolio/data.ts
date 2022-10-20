import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Buidl, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const buidling: Buidl[] = [
  {
    Icon: RiComputerLine,
    title: "Developer Relations | BuildBear",
    about:
      "Assisting with developer relations, creating valuable content for the product",
  },
  {
    Icon: FaServer,
    title: "Fullstack Developer | NudeClub",
    about: "Building the MVP for the first NSFW NFT Marketplace",
  },
  {
    Icon: AiOutlineApi,
    title: "Founder | TheDrop",
    about:
      "Developing an extensive tool for NFT traders & writing a weekly newsletter",
  },
  {
    Icon: MdDeveloperMode,
    title: "Founder | Token Boards",
    about: "Hacking a job board that fully integrates the web3 ethos",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Skills Coaching | Freelance",
    about: "Providing professional and personal skill development services",
  },
  {
    Icon: RiComputerLine,
    title: "President | ACB GI",
    about: "Leading the alumni corporation board of my Fraternitie's chapter",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "Token Boards",
    image_path: "/assets/project-images/tokenboards.png",
    deployed_url: "https://token-boards-ethonline.vercel.app/",
    github_url: "https://github.com/MSBivens/token-boards",
    description: "A decentralized job board leveraging web3 technology",
    key_techs: ["NextJS", "Tailwind CSS", "Hardhat", "OpenZeppelin", "WAGMI"],
  },
  {
    name: "TheDrop",
    image_path: "/assets/project-images/theDrop.png",
    deployed_url: "https://www.thedrop.fyi/",
    github_url: "https://github.com/MSBivens/thedrop-website",
    description:
      "A web app for NFT analytics and a weekly newsletter for collectors",
    key_techs: ["NextJS", "Tailwind CSS", "Alchemy API"],
  },

  {
    name: "NudeClub",
    image_path: "/assets/project-images/nudeclub.png",
    deployed_url: "https://www.nude.club/",
    github_url: "https://github.com/NudeClub/NudeClubMVP",
    description: "A NSFW NFT marketplace with emphasis on supporting creators",
    key_techs: ["NextJS", "TailwindCSS", "Axios", "Hardhat", "OpenZeppelin"],
  },

  {
    name: "Community Funding",
    image_path: "/assets/project-images/cofun.png",
    deployed_url: "https://www.example.com",
    github_url: "https://github.com/MSBivens/community-funding",
    description: "Web3 version of Kickstarter",
    key_techs: ["NextJS", "Tailwind CSS", "Hardhat", "OpenZeppelin"],
  },
];

export const contents: IContent[] = [
  {
    name: "Web3 Topics Blog",
    image_path: "/assets/content-images/medium.png",
    content_url: "https://medium.com/@msbivens_",
    description: "A blog covering a range of web3 topics",
    key_words: [
      "Web3",
      "Development",
      "Smart Contracts",
      "Private Nodes",
      "DAOs",
      "NFTs",
    ],
  },
  {
    name: "Journey to Web3",
    image_path: "/assets/content-images/journey.png",
    content_url: "https://www.publish0x.com/journey-to-web3",
    description:
      "This blog followed my journey from no code to working in web3",
    key_words: ["Web3", "Development", "Smart Contracts", "Dev Bootcamps"],
  },

  {
    name: "Podcasts",
    image_path: "/assets/content-images/podchaser.png",
    content_url:
      "https://www.podchaser.com/creators/mike-bivens-107a99qAVv/appearances",
    description:
      "I've been a host and guest for a number of podcasts, find my credits here.",
    key_words: [
      "Mental Health",
      "Social Justice",
      "Conservation",
      "Video Games",
      "Comic Books",
    ],
  },
];
