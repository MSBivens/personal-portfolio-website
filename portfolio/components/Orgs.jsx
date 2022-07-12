import React from "react";
import OrgItem from "./OrgItem";
import dsp from "../public/assets/org-images/dsp.png";
import wagmi from "../public/assets/org-images/wagmi.png";

const Orgs = () => {
  return (
    <div id="orgs" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Organizations
        </p>
        <h2 className="py-4">Membership communities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <OrgItem
            title="Delta Sigma Phi"
            backgroundImg={dsp}
            orgUrl="https://deltasig.org/"
            tagline="Fraternity founded on Culture, Harmony, & Friendship"
          />
          <OrgItem
            title="WAGMI Squad"
            backgroundImg={wagmi}
            orgUrl="/"
            tagline="Web3 Developer Squad DAO"
          />
        </div>
      </div>
    </div>
  );
};

export default Orgs;
