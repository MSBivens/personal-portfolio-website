import React from "react";
import BuidlCard from "./BuidlCard";
import { buidling } from "../data";

const About = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        I&#39;m a blockend developer and skills coach. I code smart contracts
        and research their applications with DAO&#39;s and digital assets. My
        extensive background in building and leading skills development allows
        me to share this experience with others. Check out my active efforts
        below!
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>
        <div className="grid gap-6 my-3 md:grid-cols-2">
          {buidling.map((buidl) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={buidling.title}
            >
              <BuidlCard buidl={buidl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
