import React from "react";
import BlogsItem from "./BlogsItem";
import Image from "next/image";

import publish0xImg from "../public/assets/blog-images/publish0x.png";
import mediumImg from "../public/assets/blog-images/medium.png";
import mirrorImg from "../public/assets/blog-images/mirror.png";

const Blogs = () => {
  return (
    <div id="blogs" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Blogs
        </p>
        <h2 className="py-4">Writings on Web3 Topics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <BlogsItem
            title="Journey to Web"
            backgroundImg={publish0xImg}
            blogUrl="https://www.publish0x.com/journey-to-web3"
            tagline="Detailing my journey from no code to web3 dev"
          />
          <BlogsItem
            title="Medium"
            backgroundImg={mediumImg}
            blogUrl="https://medium.com/@msbivens_"
            tagline="Assorted articles on Web3 topics"
          />
          <BlogsItem
            title="Mirror"
            backgroundImg={mirrorImg}
            blogUrl="https://mirror.xyz/0xc46C2e614c3Ec2B679961caf095204FbcFA23fAC"
            tagline="Writings as NFTs to raise funds for projects"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
