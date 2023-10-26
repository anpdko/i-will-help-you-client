import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDownSelect } from '@/components/icons/ArrowDownSelect';
import s from './DonateStuff.module.scss';

interface IitemProps {
  title: string;
  icon: string;
  desc: string;
}
interface DonateStuffItemProps {
  item: IitemProps;
}

const DonateStuffItem = ({ item }: DonateStuffItemProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
  };

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleItemClick();
    }
  };

  return (
    <li className={`border-style ${s.item} ${isOpen ? s.item_open : ''}`}>
      <div
        role='button'
        tabIndex={0}
        onKeyDown={(e) => handleTabKeyDown(e)}
        className={s.item_header}
        onClick={handleItemClick}
      >
        <div className={s.item_wrap}>
          <img src={item.icon} alt={item.title} className={s.item_img} />
          <h3 className={s.item_title}>{t(item.title)}</h3>
        </div>
        <button className={`${s.item_btn} ${isOpen ? s.item_btn_rotate : ''}`}>
          <ArrowDownSelect size='large' />
        </button>
      </div>
      {isOpen && <p className={s.item_desc}>{t(item.desc)}</p>}
    </li>
  );
};

export default DonateStuffItem;
