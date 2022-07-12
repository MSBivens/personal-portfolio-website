import Head from "next/head";
import Navbar from "../components/Navbar";
// import Image from "next/image";
import Main from "../components/Main";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike Bivens | Blockend Dev</title>
        <meta
          name="keywords"
          content="web development, programmings, web3, smart contracts, DAO"
        />
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
