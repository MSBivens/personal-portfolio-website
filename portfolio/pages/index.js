import Head from "next/head";
import About from "../components/About";

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
