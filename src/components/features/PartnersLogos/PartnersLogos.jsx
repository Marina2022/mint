import s from './PartnersLogos.module.scss';
import company1 from '@/assets/img/companies/company1.svg'
import company2 from '@/assets/img/companies/company2.svg'
import company3 from '@/assets/img/companies/company3.svg'
import company4 from '@/assets/img/companies/company4.svg'
import company5 from '@/assets/img/companies/company5.svg'
import company6 from '@/assets/img/companies/company6.svg'
import company7 from '@/assets/img/companies/company7.svg'
const PartnersLogos = () => {
  return (
      <ul className={s.partnersLogos}>
        <li>
          <img src={company1} alt="company"/>
        </li>
        <li>
          <img src={company2} alt="company"/>
        </li>
        <li>
          <img src={company3} alt="company"/>
        </li>
        <li>
          <img src={company4} alt="company"/>
        </li>
        <li>
          <img src={company5} alt="company"/>
        </li>
        <li>
          <img src={company6} alt="company"/>
        </li>
        <li>
          <img src={company7} alt="company"/>
        </li>
      </ul>
  );
};

export default PartnersLogos;