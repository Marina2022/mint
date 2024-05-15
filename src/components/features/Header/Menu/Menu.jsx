import s from './Menu.module.scss';

const Menu = () => {
  return (
      <ul className={s.menu}>
        <li className={s.menuItem}>
          <a href="#mint">Mint</a>          
        </li>
        <li className={s.menuItem}>
          <a href="#contracts">Contracts</a>       
          <div className={s.soon}>soon</div>
        </li>
        <li className={s.menuItem}>
          <a href="#airdrop">Airdrop</a>
          <div className={s.soon}>soon</div>
        </li>
        <li className={s.menuItem}>
          <a href="#referrals">Referrals</a>           
        </li>
        <li className={s.menuItem}>
          <a href="#faq">Faq</a>
        </li>

      </ul>
  );
};

export default Menu;