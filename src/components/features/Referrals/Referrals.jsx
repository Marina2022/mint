import s from './Referrals.module.scss';
import triangle from '@/assets/img/referrals-and-airdrop/airdropTriangle.svg'

const Referrals = () => {
  return (
      <div className={s.bgWrapper}>
        <div className={s.overlay}></div>
        <section id="referrals" className={s.referrals}>
          <div className={s.container1}>
            <h2 className={s.title}><span className={s.greenLetter}>R</span>eferrals</h2>
            <div className={s.text}>Get <span className={s.greenPercent}>20%</span> referrals for every Mint NFT you
              refer through your referral link,
              credited instantly to your wallet.
            </div>
            <ul className={s.advantages}>
              <li className={s.advantagesItem}>
                <div className={s.attr}>Soon...</div>
                <div className={s.label}>Your points</div>
              </li>
              <li className={s.advantagesItem}>
                <div className={s.attr}>20%</div>
                <div className={s.label}>You will recieve a ref bonus from every mint</div>
              </li>
              <li className={s.advantagesItem}>
                <div className={s.attr}>0.001E</div>
                <div className={s.label}>Mint price</div>
              </li>
            </ul>
          </div>
        </section>

        <section id="airdrop" className={s.airdrop}>
          <div className={s.container2}>
            <h2 className={s.title}><span className={s.greenLetter}>A</span>irdrop</h2>
            <div className={s.youWill}>
              <div>You will ....</div>

              <img className={s.triangle} src={triangle} alt="decorative element"/>
            </div>
          </div>
        </section>
      </div>

  )
};

export default Referrals;