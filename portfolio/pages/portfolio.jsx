import React from "react";
import PortfolioItem from "../components/PortfolioItem";

const portfolio = () => {
  return (
    <div className="w-full p-2 py-40">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Portfolio
        </p>
        <h2 className="py-4">Nearly all of my projects</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <PortfolioItem
            title="Portfolio Website"
            tagline="A personal & portfolio website for me."
            projectUrl="https://github.com/MSBivens/personal_portfolio_website"
            techStack="JavaScript | Next.js | Tailwind"
          />
          <PortfolioItem
            title="MEV Flashbot"
            tagline="A Flashbot capable of minting an NFT on the Goerli testnet."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-mev-practical"
            techStack="Solidity | Hardhat | Alchemy | Openzeppelin | Ethers.js"
          />
          <PortfolioItem
            title="Aave Flash Loan"
            tagline="A flash loan system with Openzeppelin and Aave."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-flash-loans"
            techStack="Solidity | Hardhat | Openzeppelin | Aave"
          />
          <PortfolioItem
            title="Lottery Game w/ The Graph"
            tagline="The front-end for the lottery game built previously."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-graph"
            techStack="JavaScript | Hardhat | Next.js | The Graph"
          />
          <PortfolioItem
            title="Lottery Game w/ VRF"
            tagline="Lottery game built with Chainlink and Openzeppelin."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-chainlink-vrf"
            techStack="Solidity | Hardhat | Chainlink | Ethers.js"
          />
          <PortfolioItem
            title="Ceramic dApp"
            tagline="A dApp using Self.ID from Ceramic, allowing users to write data to a decentralized profile."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-ceramic"
            techStack="Solidity | Hardhat | Ceramic | Eths.js | Ceramic"
          />
          <PortfolioItem
            title="IPFS NFT Collection"
            tagline="An NFT collection stored on IPFS, using Pinata."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-ipfs-practical"
            techStack="Solidity | Hardhat | Alchemy | Ethers.js | Pinata"
          />
          <PortfolioItem
            title="LW3 DeFi Exchange"
            tagline="A DeFi exhchange for the DAO built previously."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-defi-exchange"
            techStack="Solidity | JavaScript | Hardhat | Alchemy | Vercel"
          />
          <PortfolioItem
            title="LW3 ICO"
            tagline="An ICO for members of the DAO built previously."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-initial-coin-offering"
            techStack="Solidity | JavaScript | Hardhat | Alchemy | Vercel"
          />
          <PortfolioItem
            title="LW3 DAO"
            tagline="A DAO exclusive to holders of the NFT collection built previously."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-dao"
            techStack="Solidity | JavaScript | Hardhat | Alchemy | Vercel"
          />
          <PortfolioItem
            title="LW3 NFT Collection"
            tagline="An NFT collection for the whitelist app built previously."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-nft-collection"
            techStack="Solidity | JavaScript | Hardhat | Alchemy | Vercel"
          />
          <PortfolioItem
            title="LW3 Whitelist dApp"
            tagline="A dApp to register users for a whitelist."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-whitelist-dapp"
            techStack="Solidity | JavaScript | Hardhat | Alchemy | Vercel"
          />
          <PortfolioItem
            title="Road to Web3 Week9"
            tagline="A token swap dApp wiht 0x API integration."
            projectUrl="https://github.com/MSBivens/road-to-web3-week9-token-swap-0x"
            techStack="Solidity | JavaScript | Hardhat | 0x | Coin Gecko"
          />
          <PortfolioItem
            title="Road to Web3 Week8"
            tagline="A betting game dApp built on Optimism with Chainlink VRF"
            projectUrl="https://github.com/MSBivens/road-to-web3-week8-betting-game"
            techStack="Solidity | JavaScript | Hardhat | Alchemy | Chainlink"
          />
          <PortfolioItem
            title="DAO Template"
            tagline="Broilerplate for a simple DAO."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-dao-template"
            techStack="Solidity | JavaScript | Hardhat"
          />
          <PortfolioItem
            title="NFT Marketplace Front-end w/ The Graph"
            tagline="An alternate version the NFT Marketplace, using The Graph."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-nft-marketplace-frontend-thegraph-indexer"
            techStack="JavaScript | Next.js | Tailwind | The Graph"
          />
          <PortfolioItem
            title="NFT Marketplace Front-end w/ Moralis"
            tagline="The front end of an NFT marketplace using moralis for indexing."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-nft-marketplace-frontend-moralis-indexer"
            techStack="JavaScript | Next.js | Tailwind | Moralis"
          />
          <PortfolioItem
            title="NFT Marketplace Back-end"
            tagline="An NFT marketplace backend with hardhat."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-nft-marketplace-backend"
            techStack="Solidity | JavaScript | Hardhat | Openzeppelin"
          />
          <PortfolioItem
            title="Hardhat NFTs"
            tagline="NFT collection built with Hardhat and stored on IPFS."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-hardhat-nft"
            techStack="Solidity | JavaScript | Hardhat | IPFS"
          />
          <PortfolioItem
            title="DeFi Lender"
            tagline="A DeFi dApp for understanding lending and wrappeth ETH."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-defi"
            techStack="Solidity | Hardhat"
          />
          <PortfolioItem
            title="ERC20"
            tagline="An simple ERC20 coin."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-erc20"
            techStack="Solidity | Hardhat"
          />
          <PortfolioItem
            title="Next.js Lottery"
            tagline="The front end for Hardhat Lottery."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-nextjs-lottery"
            techStack="Javascript | Next.js"
          />
          <PortfolioItem
            title="Hardhat Lottery"
            tagline="A lottery contract system built with Hardhat."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-hardhat-lottery"
            techStack="Solidity | JavaScript | Hardhat | Ethers.js"
          />
          <PortfolioItem
            title="Road to Web3 Week7"
            tagline="An NFT marketplace."
            projectUrl="https://github.com/MSBivens/road-to-web3-week7-nft-marketplace"
            techStack="Solidity | Hardhat | Alchemy | IPFS | Pinata"
          />
          <PortfolioItem
            title="Road to Web3 Week 6"
            tagline="Creates a staking app by working off of a scaffold ETH challenge."
            projectUrl="https://github.com/MSBivens/road-to-web3-week6-staking-app"
            techStack="Solidity | JavaScript | Hardhat"
          />
          <PortfolioItem
            title="Road to Web3 Week5"
            tagline="Creates an ERC720 token with Chainlink API support."
            projectUrl="https://github.com/MSBivens/road-to-web-3-week5-chainlink-api"
            techStack="Solidity | Openzeppelin | Chainlink"
          />
          <PortfolioItem
            title="Front End Fund Me"
            tagline="A front-end for the Fund Me project."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-frontend-fund-me"
            techStack="JavaScript"
          />
          <PortfolioItem
            title="10 Line NFT Collection"
            tagline="Very simple NFT collection."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-10-line-nft-collection"
            techStack="Solidity | Hardhat | OpenZeppelin | Ethers.js | Alchemy"
          />
          <PortfolioItem
            title="Hardhat Fund Me"
            tagline="Showcases linting, mocks, and gas optimization."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-hardhat-fund-me"
            techStack="Solidity | Hardhat | Chainlink | Ethers.js | Aave"
          />
          <PortfolioItem
            title="Hardhat Simple Storage"
            tagline="Showcases deploying with Hardhat"
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-hardhat-simple-storage"
            techStack="Solidity | Hardhat | Etherscan | Ethers.js"
          />
          <PortfolioItem
            title="Ethers Simple Storage."
            tagline="Showcases deploying on a local blockchain and contract interactions."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-ethers-simple-storage"
            techStack="Solidity | Hardhat | Ganache | Ethers.js"
          />
          <PortfolioItem
            title="First dApp"
            tagline="Let's you set a mood and call it later."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-first-dapp"
            techStack="Solidity | RemixIDE | Replit | Ethers.js"
          />
          <PortfolioItem
            title="Road to Web3 Week4"
            tagline="NFT Gallery"
            projectUrl="https://github.com/MSBivens/road-to-web3-week4-nft-gallery"
            techStack="Solidity | Hardhat | Tailwind | Ethers.js"
          />
          <PortfolioItem
            title="Cryptoccurency"
            tagline="Very basic 10-line crypto coin."
            projectUrl="https://github.com/MSBivens/learn-web3-dao-cryptocurrency"
            techStack="Solidity | Remix IDE | OpenZeppelin"
          />
          <PortfolioItem
            title="Road to Web3 Week3"
            tagline="NFTs with Metadata and that are stored on-chain."
            projectUrl="https://github.com/MSBivens/road-to-web3-week3-nfts-with-onchain-metadata"
            techStack="Solidity | JavaScript | Hardhat | Alchemy"
          />
          <PortfolioItem
            title="Fund Me"
            tagline="Smart contract to showcase construcotrs, modifiers, loops, etc."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-fund-me"
            techStack="Solidity | Remix IDE"
          />
          <PortfolioItem
            title="Simple Storage Factory"
            tagline="Showcases inheritance, overrides, and contract interactions."
            projectUrl="https://github.com/MSBivens/fcc-solidity--javascript-course-storage-factory-smart"
            techStack="Solidity | RemixIDE"
          />
          <PortfolioItem
            title="Road to Web3 Week2"
            tagline="DeFi version of a buy me a coffee app."
            projectUrl="https://github.com/MSBivens/road_to_web3_week2_defi_dapp"
            techStack="Solidity | Hardhat | Replit | Alchemy | Ethers.js"
          />
          <PortfolioItem
            title="Simple Storage"
            tagline="Simple storage smart contract."
            projectUrl="https://github.com/MSBivens/fcc-solidity-javascript-course-simple-storage-smart-contract"
            techStack="Solidity | RemixIDE"
          />
          <PortfolioItem
            title="Road to Web3 Week1"
            tagline="This contract lets users create an ERC721 and deploy to a testnet."
            projectUrl="https://github.com/MSBivens/road_to_web3_week1_erc721_smart_contract"
            techStack="Solidity | Hardhat | Alcehmy | OpenZeppelin | Filebase"
          />
          <PortfolioItem
            title="dNFT Character Builder"
            tagline="A character builder template for games using dNFTs."
            projectUrl="https://github.com/MSBivens/dnft_character_builder"
            techStack="Solidity | Python | Brownie | Flask"
          />
          <PortfolioItem
            title="Learn Web3"
            tagline="A web app that helps connect learners with web3 resources."
            projectUrl="https://github.com/MSBivens/learn_web3"
            techStack="Python | Flask | MySQL | Tailwind"
          />
          <PortfolioItem
            title="Stock Info App"
            tagline="Web app that helps research your favorite stocks and saves them."
            projectUrl="https://github.com/MSBivens/stock-info-app"
            techStack="JavaScript | Python | Bootstrap 5 | Django"
          />
          <PortfolioItem
            title="Doors vs Wheels"
            tagline="A webapp that tracks users input on how many doors and windows they have."
            projectUrl="https://github.com/MSBivens/doors_vs_wheels"
            techStack="HTML | CSS | Python | Flask"
          />
          <PortfolioItem
            title="Bootcamp Flask + MySQL"
            tagline="A collection of assignments for the Flask + MySQL track with Coding Dojo."
            projectUrl="https://github.com/MSBivens/bootcamp_flask_mysql"
            techStack="HTML | CSS | Python | Flask | MySQL"
          />
          <PortfolioItem
            title="Bootcamp Flask"
            tagline="A collection of assignments for the Flask track with Coding Dojo."
            projectUrl="https://github.com/MSBivens/bootcamp_flask"
            techStack="HTML | CSS | Python | Flask"
          />
          <PortfolioItem
            title="Bootcamp MySQL"
            tagline="A collection of assignments for the MySQL track with Coding Dojo."
            projectUrl="https://github.com/MSBivens/bootcamp_mysql"
            techStack="HTML | CSS | MySQl"
          />
          <PortfolioItem
            title="Bootcamp Python"
            tagline="A collection of assignments for the Python track with Coding Dojo."
            projectUrl="https://github.com/MSBivens/bootcamp_python"
            techStack="HTML | CSS | Python"
          />
          <PortfolioItem
            title="Bootcamp Web Fundamentals"
            tagline="A collection of assignments for the Web Fundamentals track with Coding Dojo."
            projectUrl="https://github.com/MSBivens/bootcamp_web_fundamentals"
            techStack="HTML | CSS | JavaScript"
          />
        </div>
      </div>
    </div>
  );
};

export default portfolio;
