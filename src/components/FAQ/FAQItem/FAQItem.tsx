import { useState } from 'react';

import { ITranslation } from '../../../data/faqData';

import sprite from '../../../assets/sprite.svg';
import s from './FAQItem.module.scss';

interface FAQProps {
  translation?: ITranslation;
}

const FAQItem = ({ translation }: FAQProps) => {
  const [toggleFAQ, setToggleFAQ] = useState(false);

  const handleToggleFAQ = (): void => {
    setToggleFAQ((prev) => !prev);
  };

  if (!translation) {
    return null;
  }

  return (
    <li key={translation._id} className={s.item} onClick={handleToggleFAQ}>
      <div className={s.item__body}>
        <h4 className={s.item__title}>{translation.title}</h4>
        <button type='button' className={s.item__btn}>
          <svg
            className={
              toggleFAQ ? `${s.item__icon_open}` : `${s.item__icon_closed}`
            }
          >
            <use href={sprite + '#chevron-down'} />
          </svg>
        </button>
      </div>
      <div
        className={
          toggleFAQ ? `${s.item__content_open}` : `${s.item__content_closed}`
        }
      >
        <div className={s.item__descr}>
          <p className={s.text}>{translation.description}</p>
        </div>
      </div>
    </li>
  );
};

export default FAQItem;
