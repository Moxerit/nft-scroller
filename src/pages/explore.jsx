import { useState } from "react";
import NftCard from "../components/nftcard";
import { fetchNFTs } from "../utils/fetchNFTs";

const Explore = () => {
  const [owner, setOwner] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [NFTs, setNFTs] = useState("");

  return (
    <div>
      <header className=" py-24  mb-12 w-full   alchemy">
        <div className="flex-grow flex justify-end mr-12 mb-12"></div>
        <div className="flex flex-col items-center mb-12">
          <div className="mb-16 text-white text-center">
            <h1 className="text-5xl  font-bold font-body my-4">NFT Scroller</h1>
            <p className="my-4">Find NFTs by wallet and NFT contract address </p>
          </div>
          <div className="flex flex-col items-center justify-center my-4 w-2/6 gap-y-2 ">
            <input
              className="border rounded-lg focus:outline-none py-2 px-3 w-full my-4"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              placeholder="Insert your wallet address"
            ></input>
            <input
              className="focus:outline-none rounded-lg py-2 px-3 w-full my-4"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              placeholder="Insert NFT Contract address (optional)"
            ></input>
          </div>
          <div className="w-2/6 flex justify-center">
            <button class="bg-[#141d24] rounded-lg hover:bg-[#1c2c35] text-white font-bold py-2 px-4 border-b-4 border-[#c1292e] hover:border-[#d8464b] my-4" onClick={() => {
                fetchNFTs(owner, contractAddress, setNFTs);
              }}>
              Search
            </button>
          </div>
        </div>
      </header>

      <section className="flex flex-wrap justify-center">
        {NFTs ? (
          NFTs.map((NFT) => {
            return (
              <NftCard
                image={NFT.media[0].gateway}
                id={NFT.id.tokenId}
                title={NFT.title}
                address={NFT.contract.address}
                description={NFT.description}
                attributes={NFT.metadata.attributes}
              ></NftCard>
            );
          })
        ) : (
          <div>No NFTs found</div>
        )}
      </section>
    </div>
  );
};

export default Explore;
