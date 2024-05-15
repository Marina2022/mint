import s from './Hero.module.scss';
import Button from "@/components/ui/Button/Button.jsx";
import checkinIcon from '@/assets/img/checkinIcon.svg'
const Hero = () => {
  return (
      <div className={s.hero}>
        <h1 className={s.title}>Mint, interact, become true person.</h1>
        <Button classname={s.btn}>
          <img src={checkinIcon} alt="checkin icon"/>
          Daily check in
        </Button>
      </div>
  );
};

export default Hero;