import s from './MenuItem.module.scss';

const MenuItem = ({item, setCurrentItem, setIsMenuOpen}) => {
  
  const itemClickHandler = ()=>{
    setCurrentItem(item)
    setIsMenuOpen(false)
  }
  
  return (
      <li  className={s.menuItem} onClick={itemClickHandler}>
        <img src={item.img} alt="icon"/>
          {item.name} 
        {
          item.soon && <div className={s.soon}>Soon</div>
        }
      </li>
  );
};

export default MenuItem;