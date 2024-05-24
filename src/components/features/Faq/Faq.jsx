import s from './Faq.module.scss';
import FaqItem from "@/components/features/Faq/FaqItem/FaqItem.jsx";
import {faq} from "@/devData/faq.js";

const Faq = () => {
  return (
      <div id="faq" className={s.faq}>
        <div className={s.faqContainer}>
          <div className={s.innerContainer}>
            <h2 className={s.title}>
              <span className={s.greenLetter}>F</span>aq
            </h2>
            <div className={s.title2}>Faq</div>
            <ul className={s.faqList}>
              {
                faq.map((item, i) => <FaqItem item={item} key={i}/>)
              }
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Faq;