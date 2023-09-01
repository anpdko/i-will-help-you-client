import { useState } from 'react';
import { IFaqData } from '../../../data/faqData';
import sprite from '../../../assets/sprite.svg';
import s from './FAQItem.module.scss';

interface FAQProps {
  tab: IFaqData;
}

const FAQItem = ({ tab }: FAQProps) => {
  const [toggleFAQ, setToggleFAQ] = useState(false);

  const handleToggleFAQ = (): void => {
    setToggleFAQ((prev) => !prev);
  };

  return (
    <li key={tab.id} className={s.faq_item} onClick={handleToggleFAQ}>
      <div className={s.faq_item__container}>
        <h4 className={s.faq_item__title}>{tab.title}</h4>
        <button type='button' className={s.faq_item__btn}>
          <svg className={toggleFAQ ? `${s.faq_item__icon_open}` : `${s.faq_item__icon_closed}`}>
            <use href={sprite + '#chevron-down'} />
          </svg>
        </button>
      </div>
      {toggleFAQ && <p className={s.faq_item__descr}>{tab.description}</p>}
    </li>
  );
};

export default FAQItem;
