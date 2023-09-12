import { useTranslation } from 'react-i18next';
import { donateStuffList } from '../../../../utils/donationStuff';
import s from './DonateStuff.module.scss';

const DonateStuff = () => {
  const { t } = useTranslation();

  return (
    <>
      <ul className={s.list}>
        {donateStuffList.map((item) => (
          <li key={item.title} className={`border-style ${s.item}`}>
            <img src={item.icon} alt={item.title} className={s.item__img} />
            <div className={s.item__wrap}>
              <h3 className={s.item__title}>{t(item.title)}</h3>
              <p className={s.item__desc}>{t(item.desc)}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={`border-style ${s.address}`}>
        <h2 className={s.address__title}>
          {t('Help Ukrainians! Send stuff!')}
        </h2>
        <p className={s.address__subtitle}>{t('Address')}</p>
        <p className={s.address__text}>Poland, Warsaw, 03-890 Ponarska 6-A</p>
      </div>
    </>
  );
};

export default DonateStuff;
