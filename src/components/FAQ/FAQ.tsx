import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IFaqData, ITranslation } from '../../data/faqData';
import FAQItem from './FAQItem/FAQItem';

import s from './FAQ.module.scss';

interface FAQProps {
  data: IFaqData[];
}

const FAQ = ({ data }: FAQProps) => {
  const { t, i18n } = useTranslation();
  const [visibleFAQCount, setVisibleFAQCount] = useState(4); // Початкова кількість видимих пунктів FAQ

  const getTranslation = (faq: IFaqData): ITranslation | undefined => {
    return faq.translations.find(
      (translation) => translation.language === i18n.language,
    );
  };

  const handleOpenAllFAQ = () => {
    setVisibleFAQCount(data.length);
  };

  return (
    <section className={s.faq}>
      <div className='container'>
        <div className={s.header}>
          <h2 className='heading1'>FAQ</h2>
          <h3 className={s.subtitle}>FAQ</h3>
        </div>
        <div className={s.body}>
          <ul>
            {data.slice(0, visibleFAQCount).map((faq) => (
              <FAQItem key={faq._id} translation={getTranslation(faq)} />
            ))}
          </ul>
          {visibleFAQCount < data.length && (
            <button className={s.more} onClick={handleOpenAllFAQ}>{t('Open more FAQ')}</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
