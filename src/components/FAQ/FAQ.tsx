import { IFaqData } from '../../data/faqData';
import FAQItem from './FAQItem/FAQItem';
import s from './FAQ.module.scss';

interface FAQProps {
  data: IFaqData[];
}

const FAQ = ({ data }: FAQProps) => {
  return (
    <section className={s.faq}>
      <div className='container'>
        <h3 className={s.faq_subtitle}>FAQ</h3>
        <div className={s.faq_container}>
          <h2 className={s.faq_heading}>FAQ</h2>
          <ul className={s.faq_list}>
            {data.map((el) => (
              <FAQItem key={el.id} tab={el} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
