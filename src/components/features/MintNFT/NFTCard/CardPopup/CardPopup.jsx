import s from './CardPopup.module.scss';
import triangle from '@/assets/img/mintNFT/popupTriangle.svg'

const CardPopup = () => {
  return (
      <div className={s.popup}>
        <h4 className={s.title}>Zrstarts #1</h4>
        <div className={s.row}>
          <span className={s.name}>NFT Price:</span>
          <span className={s.value}>0 ETH</span>
        </div>
        <div className={s.row}>
          <span className={s.name}> Platform Fee:</span>
          <span className={s.value}>0.0001 ETH</span>
        </div>

        <img className={s.popupTriangle} src={triangle} alt="decorative element"/>
      </div>
  );
};

export default CardPopup;