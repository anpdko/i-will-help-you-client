import { useState } from 'react';
import s from './FAQItem.module.scss';
import { IFaqData } from '../../../data/faqData';

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
      <h4 className={s.faq_item__title}>{tab.title}</h4>
      {toggleFAQ && <p className={s.faq_item__descr}>{tab.description}</p>}
    </li>
  );
};

export default FAQItem;
