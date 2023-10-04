import { useTranslation } from 'react-i18next';
import { donateStuffList } from '@/utils/donationStuff';
import DonateStuffItem from './DonateStuffItem';
import s from './DonateStuff.module.scss';

const DonateStuff = () => {
  const { t } = useTranslation();

  return (
    <>
      <ul className={s.list}>
        {donateStuffList.map((item) => (
          <DonateStuffItem key={item.title} item={item} />
        ))}
      </ul>
      <div className={`border-style ${s.address}`}>
        <h2 className={s.address_title}>{t('Help Ukrainians! Send stuff!')}</h2>
        <p className={s.address_subtitle}>{t('Address')}</p>
        <p className={s.address_text}>Poland, Warsaw, 03-890 Ponarska 6-A</p>
      </div>
    </>
  );
};

export default DonateStuff;
