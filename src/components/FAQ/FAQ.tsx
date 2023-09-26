import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AccordionList from '../UI/AccordionList/AccordionList';

import { IFaqData, ITranslation } from '../../data/faqData';

import sprite from '../../assets/sprite.svg';
import s from './FAQ.module.scss';

interface FAQProps {
  data: IFaqData[];
  showMoreButton?: boolean;
}

const FAQ = ({ data, showMoreButton = true }: FAQProps) => {
  const { t, i18n } = useTranslation();
  const [visibleFAQCount, setVisibleFAQCount] = useState(showMoreButton ? 4 : data.length);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<IFaqData[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const getTranslation = (faq: IFaqData): ITranslation | undefined =>
    faq.translations.find((translation) => translation.language === i18n.language);

  const handleOpenAllFAQ = () => setVisibleFAQCount(data.length);

  const handleSearchButtonClick = () => setIsSearchActive(!isSearchActive);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const results = query
      ? data.filter((faq) => {
          const translation = getTranslation(faq);
          return translation && translation.title.toLowerCase().includes(query);
        })
      : [];
    setSearchResults(results);
  };

  const selectedTranslation = searchQuery
    ? searchResults.map(getTranslation).filter(Boolean)
    : data.slice(0, visibleFAQCount).map(getTranslation).filter(Boolean);

  return (
    <section className={s.faq}>
      <div className='container'>
        <div className={s.header}>
          <div className={s.column}>
            <h2 className='heading1'>FAQ</h2>
            <div className={s.search}>
              <input
                className={`${s.input} ${isSearchActive ? `${s.show}` : ''}`}
                type='text'
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button aria-label='Search' onClick={handleSearchButtonClick}>
                <svg>
                  <use href={`${sprite}#search`} />
                </svg>
              </button>
            </div>
          </div>
          <h3 className={s.subtitle}>FAQ</h3>
        </div>
        <div className={s.body}>
          <AccordionList selectedTranslation={selectedTranslation as ITranslation[]} />
        </div>
        {showMoreButton && visibleFAQCount < data.length && !searchQuery && (
          <div className={s.more}>
            <button onClick={handleOpenAllFAQ}>{t('Open more FAQ')}</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
