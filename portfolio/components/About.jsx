import React from "react";
import Image from "next/image";
import Link from "next/link";
import MeImage from "../public/assets/meImage.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // A self-taught blockend developer
          </p>
          <p className="py-2 text-gray-600">
            My name is Mike, after leading teams as a project manager working
            with NFTs and metaverses I continuing my work with web3 as a
            developer. Through my background in higher education, I have
            developed organizational and interpersonal skills that support
            strong critical assessment and advanced my ability to work with
            dynamic teams, foster leadership, and encourage quality engagement.
          </p>
          <p className="py-2 text-gray-600">
            I ardently believe in the future web3 makes possible and I look for
            opportunities within the ecosystem to participate and make an
            impact. I am here to buidl tools and resources that help users and
            support communities.
          </p>
          <Link href="/portfolio">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              You can find most of my projects here.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={MeImage} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
