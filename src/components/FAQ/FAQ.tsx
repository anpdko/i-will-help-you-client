import { useTranslation } from 'react-i18next';
import { IFaqData, ITranslation } from '../../data/faqData';
import FAQItem from './FAQItem/FAQItem';
import s from './FAQ.module.scss';

interface FAQProps {
  data: IFaqData[];
}

const FAQ = ({ data }: FAQProps) => {
  const { i18n } = useTranslation();

  const getTranslation = (faq: IFaqData): ITranslation | undefined => {
    return faq.translations.find(
      (translation) => translation.language === i18n.language,
    );
  };

  return (
    <section className={s.faq}>
      <div className='container'>
        <h3 className={s.subtitle}>FAQ</h3>
        <div className={s.body}>
          <h2 className='heading1'>FAQ</h2>
          <ul>
            {data.map((faq) => (
              <FAQItem key={faq._id} translation={getTranslation(faq)} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
