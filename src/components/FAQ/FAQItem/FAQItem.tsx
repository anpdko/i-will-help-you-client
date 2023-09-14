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
    <li key={tab.id} className={s.item} onClick={handleToggleFAQ}>
      <div className={s.item__body}>
        <h4 className={s.item__title}>{tab.title}</h4>
        <button type='button' className={s.item__btn}>
          <svg
            className={
              toggleFAQ
                ? `${s.item__icon_open}`
                : `${s.item__icon_closed}`
            }
          >
            <use href={sprite + '#chevron-down'} />
          </svg>
        </button>
      </div>
      <div
        className={
          toggleFAQ
            ? `${s.item__content_open}`
            : `${s.item__content_closed}`
        }
      >
        <div className={s.item__descr}>
          <p className={s.text}>{tab.description}</p>
        </div>
      </div>
    </li>
  );
};

export default FAQItem;
