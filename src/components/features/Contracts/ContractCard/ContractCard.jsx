import s from './ContractCard.module.scss';
import Button from "@/components/ui/Button/Button.jsx";

const ContractCard = ({contract}) => {
  return (
      <div className={s.card}>
        <div className={s.imageWrapper}>
          <img src={contract.img} alt="contract picture"/>
        </div>
        <div className={s.text}>{contract.text}</div>
        <Button classname={s.btn}>Vote</Button>
      </div>

  );
};
export default ContractCard;