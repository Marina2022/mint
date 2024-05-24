import s from './FaqItem.module.scss';
import plus from '@/assets/img/faq/plus.svg'
import minus from '@/assets/img/faq/minus.svg'
import {useState} from "react";
const FaqItem = ({item}) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
      <li className={s.item}>
        <div className={s.titlePart} onClick={() => setIsOpen(prev => !prev)}>
          <div className={s.title}>{item.title}</div>
          <button  className={isOpen ? s.buttonOpen : s.button}><img
              src={isOpen ? minus : plus} alt="toggle open button"/></button>
        </div>
        {
            isOpen && (
                <div className={s.text}>
                  {item.text}
                </div>
            )
        }
      </li>
  );
};

export default FaqItem;