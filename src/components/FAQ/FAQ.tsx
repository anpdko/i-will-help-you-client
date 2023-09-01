import s from './FAQ.module.scss';
import faqData from '../../data/faqData';
import FAQItem from './FAQItem/FAQItem';

const FAQ = () => {
  return (
    <section className={s.faq}>
      <h3 className={s.faq_subtitle}>FAQ</h3>
      <div className={s.faq_container}>
        <h2 className={`${s.faq_heading} heading2`}>FAQ</h2>
        <ul className={s.faq_list}>
          {faqData.map((el) => (
            <FAQItem key={el.id} tab={el} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
