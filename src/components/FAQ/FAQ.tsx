import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IFaqData, ITranslation } from '../../data/faqData';
import FAQItem from './FAQItem/FAQItem';

import sprite from '../../assets/sprite.svg';
import s from './FAQ.module.scss';

interface FAQProps {
  data: IFaqData[];
}

const FAQ = ({ data }: FAQProps) => {
  const { t, i18n } = useTranslation();
  const [visibleFAQCount, setVisibleFAQCount] = useState(4);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<IFaqData[]>([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const getTranslation = (faq: IFaqData): ITranslation | undefined => {
    return faq.translations.find(
      (translation) => translation.language === i18n.language,
    );
  };

  const handleOpenAllFAQ = () => {
    setVisibleFAQCount(data.length);
  };

  const handleSearchButtonClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      const results = data.filter((faq) => {
        const translation = getTranslation(faq);
        return (
          translation &&
          translation.title.toLowerCase().includes(query.toLowerCase())
        );
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

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
                  <use href={sprite + '#search'} />
                </svg>
              </button>
            </div>
          </div>

          <h3 className={s.subtitle}>FAQ</h3>
        </div>
        <div className={s.body}>
          <ul>
            {(searchQuery ? searchResults : data.slice(0, visibleFAQCount)).map(
              (faq) => (
                <FAQItem key={faq._id} translation={getTranslation(faq)} />
              ),
            )}
          </ul>
          {visibleFAQCount < data.length && !searchQuery && (
            <button className={s.more} onClick={handleOpenAllFAQ}>
              {t('Open more FAQ')}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
