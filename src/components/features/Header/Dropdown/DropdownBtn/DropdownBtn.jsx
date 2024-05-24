import s from './DropdownBtn.module.scss';
import {useRef, useState} from "react";
import DropdownMenu from "@/components/features/Header/Dropdown/DropdownMenu/DropdownMenu.jsx";
import {headerDropdownMenuItems} from "@/devData/headerDropdownMenuItems.js";
import dropdownBtn from '@/assets/img/dropdownBtn.svg'
const DropdownBtn = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const btnClickHandler = () => {
    setIsMenuOpen(prev => !prev)
  }
  
  const [currentItem, setCurrentItem] = useState(headerDropdownMenuItems[0])
  const btnRef = useRef()

  return (
      <div className={s.wrapper}>
        <button className={isMenuOpen ? s.btnMenuOpen : s.btn} onClick={btnClickHandler} ref={btnRef}>
          <img src={currentItem.img} alt="icon"/>
          <span className={s.text}>
            {currentItem.name}
          </span>
            {
                currentItem.soon && <div className={s.soon}>Soon</div>
            }
            <img className={isMenuOpen ? s.arrowDownBtnMenuOpen : s.arrowDownBtn} src={dropdownBtn}
                 alt="dropdown button"/>
        </button>
        {
            isMenuOpen && <DropdownMenu setIsMenuOpen={setIsMenuOpen} setCurrentItem={setCurrentItem} btnRef={btnRef} />  
        }        
      </div>
  );
};

export default DropdownBtn;