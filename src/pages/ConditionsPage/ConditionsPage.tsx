import { useTranslation } from 'react-i18next';

import s from './ConditionsPage.module.scss';

import conditionsData, { ITranslation } from '../../data/conditionsData.ts';
import ListSection from '@/components/UI/ListSection/ListSection.tsx';

const ConditionsPage = () => {
  const { t, i18n } = useTranslation();

  const translations = (): ITranslation[] => {
    const translation = conditionsData.map((item) => {
      return item.translations.find(
        (translation) => translation.language === i18n.language,
      );
    }) as ITranslation[];

    return translation;
  };

  return (
    <section className={s.сonditions}>
      <div className='container'>
        <ListSection
          title={t("Conditions for Using the 'I Will Help You Foundation' Website") || ''}
          subTitle={t('Conditions') || ''}
          items={translations()}
          variant='list'
        />
      </div>
    </section>
  );
};

export default ConditionsPage;


