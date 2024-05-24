import s from './NFTCard.module.scss';
import cardPicture from '@/assets/img/mintNFT/cardPicture.png'
import Button from "@/components/ui/Button/Button.jsx";
import {useState} from "react";
import CardPopup from "@/components/features/MintNFT/NFTCard/CardPopup/CardPopup.jsx";

const NftCard = () => {
  const [minted, setMinted] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  const mintClickHandler = () => {
    setMinted(prev => !prev)
  }

  return (
      <li className={s.NftCard}>
        <div className={s.imageWrapper}>
          <img className={s.image} src={cardPicture} alt="nft picture"/>
          {
              minted && (
                  <div className={s.imageOverlay}>
                    <div className={s.mintedText}>Minted</div>
                  </div>
              )
          }
        </div>

        <h3 className={s.title}>Zrstarts #1</h3>
        <div className={s.priceBlock}>
          <div className={s.price}>Price</div>
          <div className={s.freeWrapper}>
            <div onMouseEnter={() => setPopupVisible(true)} onMouseLeave={() => setPopupVisible(false)}
                 className={s.free}>Free
            </div>
            {
                popupVisible && <CardPopup/>
            }
          </div>
        </div>
        <Button onClick={mintClickHandler} classname={s.btn}>Mint</Button>
      </li>

  );
};

export default NftCard;