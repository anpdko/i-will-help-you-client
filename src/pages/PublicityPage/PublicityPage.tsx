import { useTranslation } from 'react-i18next';

import s from './PublicityPage.module.scss';

import pablicyData, { ITranslation } from '../../data/pablicyData.ts';
import ListSection from '@/components/UI/ListSection/ListSection.tsx';

const PublicityPage = () => {
  const { t, i18n } = useTranslation();

  const translations = (): ITranslation[] => {
    const translation = pablicyData.map((item) => {
      return item.translations.find(
        (translation) => translation.language === i18n.language,
      );
    }) as ITranslation[];

    return translation;
  };

  return (
    <section className={s.publicity}>
      <div className='container'>
        <ListSection
          title={t('Publicity and Media Relations') || ''}
          subTitle={t('Publicity and Media Relations') || ''}
          items={translations()}
          variant='paragraphs'
        />
      </div>
    </section>
  );
};

export default PublicityPage;
