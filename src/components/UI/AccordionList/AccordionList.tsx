import { useEffect, useState } from 'react';

import sprite from '../../../assets/sprite.svg';
import s from './AccordionList.module.scss';
import { SwiperRef } from 'swiper/react';

interface ITranslation {
  language?: 'en' | 'ua';
  desc: string;
  tag: string;
  _id: string;
}
interface IAccordionList {
  selectedTranslation: ITranslation[];
  variant?: 'projects';
  swiperRef?: SwiperRef;
}

const AccordionList = ({
  selectedTranslation,
  variant,
  swiperRef,
}: IAccordionList) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  useEffect(() => {
    swiperRef?.current?.update();
  }, [openItems, swiperRef]);

  const handleToggleFAQ = (index: number): void => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <ul>
      {selectedTranslation?.map((translation, index) => (
        <li
          key={translation._id}
          className={`${s.item} ${variant ? `${s[variant]}` : ''}`}
          onClick={() => handleToggleFAQ(index)}
        >
          <div className={s.item__body}>
            <h4 className={s.item__title}>{translation.tag}</h4>
            <button type='button' className={s.item__btn}>
              <svg
                className={
                  openItems.includes(index) ? `${s.open}` : `${s.closed}`
                }
              >
                <use href={sprite + '#chevron-down'} />
              </svg>
            </button>
          </div>
          <div
            className={`${s.item__content}
              ${openItems.includes(index) ? `${s.open}` : `${s.closed}`}`}
          >
            <div className={s.item__descr}>
              <p>{translation.desc}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccordionList;
