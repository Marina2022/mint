import logoImg from '@/assets/img/logo.svg'
import s from './Logo.module.scss'
const Logo = () => {
  return (
      <div className={s.logoWrapper}>
        <img src={logoImg} alt="logo"/>        
        <div className={s.logoText}>
          <span className={s.green}>YOU</span><span className={s.blue}>R</span> LOGO
        </div>        
      </div>
  );
};

export default Logo;