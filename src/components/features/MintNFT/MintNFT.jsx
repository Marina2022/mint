import s from './MintNFT.module.scss';
import NFTCard from "@/components/features/MintNFT/NFTCard/NFTCard.jsx";

const MintNft = () => {

  const cards = Array.from({length: 16}, () => 1)

  return (
      <div className={s.mintNFT} id="mint">
        <div className={s.overlay}>
          <div className={s.container}>
            <h2 className={s.title}>Mint<span className={s.nft}> NFT</span></h2>
            <ul className={s.cards}>
              {
                cards.map((card, i) => <NFTCard card={card} key={i}/>)
              }
            </ul>
          </div>
        </div>
      </div>
  );
};

export default MintNft;
