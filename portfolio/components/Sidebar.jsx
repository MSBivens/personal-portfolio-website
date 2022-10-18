import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

import { useTheme } from "next-themes";
import Image from "next/image";
import MeImage from "../public/assets/meImage.jpg";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        className="mx-auto border rounded-full"
        src={MeImage}
        alt="/"
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Mike</span> Bivens
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Blockend Dev
      </p>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Skills Coach
      </p>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.linkedin.com/in/msbivens/">
          <FaLinkedinIn className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/MSBivens">
          <FaGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://twitter.com/MSBivens_">
          <FaTwitter className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Notifications */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <p className="my-2 ">Let&#39;s BUIDL together</p>
        <p className="my-2 ">Currently Available</p>
        <p className="my-2">Contact Via Socials</p>
      </div>

      <button className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none">
        Code
      </button>
      <button className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none">
        Coaching
      </button>
      {/* <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        Toggle Theme
      </button> */}
    </>
  );
};

export default Sidebar;
