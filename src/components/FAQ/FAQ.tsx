import s from './FAQ.module.scss';
import faqData from '../../data/faqData';
import React from 'react';
import FAQItem from './FAQItem/FAQItem';

const FAQ = () => {
  return (
    <section className={s.faq}>
      <ul className={s.faq_list}>
        {faqData.map((el) => (
          <FAQItem key={el.id} tab={el} />
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
