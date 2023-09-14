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
        <h3 className={s.subtitle}>FAQ</h3>
        <div className={s.body}>
          <h2 className='heading1'>FAQ</h2>
          <ul>
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
