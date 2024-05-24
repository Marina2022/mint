import s from './Header.module.scss'
import Logo from "@/components/logo/Logo.jsx";
import ConnectBtn from "@/components/features/Header/ConnectBtn/ConnectBtn.jsx";
import DropdownBtn from "@/components/features/Header/Dropdown/DropdownBtn/DropdownBtn.jsx";
import Menu from "@/components/features/Header/Menu/Menu.jsx";

const Header = () => {
    const onConnectButtonClick = () => {
    console.log('Клик по Connect Button')
  }
  
  return (
      <header className={s.header}>

        <Logo/>

        <div className={s.rightPartHeaderWrapper}>
          <Menu />
          <DropdownBtn/>
          <ConnectBtn onClick={onConnectButtonClick}/>
        </div>
      </header>
  );
};

export default Header;