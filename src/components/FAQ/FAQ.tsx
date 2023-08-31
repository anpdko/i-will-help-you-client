import s from './FAQ.module.scss';
import faqData from '../../data/faqData';

const FAQ = () => {
  return (
    <section className={s.faq}>
      <ul className={s.faq_list}>
        {faqData.map((el) => (
          <li key={el.id} className={s.faq_item}>
            <h3 className={s.faq_item__title}>{el.title}</h3>
            <p className={s.faq_item__descr}>{el.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default FAQ;
