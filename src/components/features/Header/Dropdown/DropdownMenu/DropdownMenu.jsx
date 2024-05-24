import s from './DropdownMenu.module.scss';
import {headerDropdownMenuItems} from "@/devData/headerDropdownMenuItems.js";
import MenuItem from "@/components/features/Header/Dropdown/DropdownMenu/MenuItem/MenuItem.jsx";
import {useEffect, useRef} from "react";
const DropdownMenu = ({setCurrentItem, setIsMenuOpen, btnRef}) => {
  
  useEffect(()=>{
    const escHandler = (e)=>{
      if (e.keyCode === 27) {
        setIsMenuOpen(false)
      }
    } 
    const outsideClickHandler = (e) =>{            
      if (e.target !== dropRef.current && !btnRef.current.contains(e.target) ) setIsMenuOpen(false)
    }
    
    window.addEventListener('keydown', escHandler)
    window.addEventListener('click', outsideClickHandler)
        
    return ()=>{
      window.removeEventListener('keydown', escHandler)
      window.removeEventListener('click', outsideClickHandler)
    } 
    
  }, [])
  
  const dropRef = useRef()
  
  return (
      <ul className={s.dropdownMenu} ref={dropRef}>
        {
          headerDropdownMenuItems.map((item,i)=><MenuItem item={item} key={i} setCurrentItem={setCurrentItem} setIsMenuOpen={setIsMenuOpen} />)  
        }        
      </ul>
  );
};

export default DropdownMenu;