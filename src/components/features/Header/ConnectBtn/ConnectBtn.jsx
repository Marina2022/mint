import s from './ConnectBtn.module.scss'
import Button from "@/components/ui/Button/Button.jsx";

const ConnectBtn = ({onClick}) => {  
  return (
      <Button classname={s.connectBtn} onClick={onClick} >Connect wallet</Button>
  );
};

export default ConnectBtn;