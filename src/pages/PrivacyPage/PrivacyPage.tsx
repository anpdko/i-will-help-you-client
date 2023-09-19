import { useTranslation } from 'react-i18next';

import s from './PrivacyPage.module.scss';

import privacyData, { ITranslation } from '../../data/privacyData.ts';
import ListSection from '@/components/UI/ListSection/ListSection.tsx';

const PrivacyPage = () => {
  const { t, i18n } = useTranslation();

  const translations = (): ITranslation[] => {
    const translation = privacyData.map((item) => {
      return item.translations.find(
        (translation) => translation.language === i18n.language,
      );
    }) as ITranslation[];

    return translation;
  };

  return (
    <section className={s.privacy}>
      <div className='container'>
        <ListSection
          title={t('Privacy Policy for iwillhelpyou.charity') || ''}
          subTitle={t('Privacy Policy for iwillhelpyou.charity') || ''}
          items={translations()}
          variant='list'
        />
      </div>
    </section>
  );
};

export default PrivacyPage;
