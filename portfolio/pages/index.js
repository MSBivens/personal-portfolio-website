import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import TechStack from "../components/TechStack";
import TopProjects from "../components/TopProjects";
import Blogs from "../components/Blogs";
import Orgs from "../components/Orgs";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike Bivens | Blockend Dev</title>
        <meta
          name="keywords"
          content="web development, programming, web3, smart contracts, DAO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </div>
  );
}
