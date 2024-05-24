import s from './Footer.module.scss'
import Logo from "@/components/logo/Logo.jsx";
import twitter from '@/assets/img/footer/twitter.svg'
import discord from '@/assets/img/footer/discord.svg'
const Footer = () => {
  return (
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.leftFooter}>
            <Logo/>
            <div className={s.copy}>YourLogo2024</div>
          </div>          
          <div className={s.rightFooter}>
            <div className={s.followTitle}>FOLLOW</div>
            <ul className={s.socials}>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter"/>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={discord} alt="discord"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )
}
export default Footer;
