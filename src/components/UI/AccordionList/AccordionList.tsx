import { useState } from 'react';


import sprite from '../../../assets/sprite.svg';
import s from './AccordionList.module.scss';

interface IListItem {
  _id: string;
  listTitle: string;
  subItems?: string[];
}

interface ITranslation {
  language: 'en' | 'ua';
  description?: string;
  list?: IListItem[];
  title?: string;
  subtitle?: string;
  _id: string;
}
interface IAccordionList {
  selectedTranslation: ITranslation[];
}

const AccordionList = ({ selectedTranslation }: IAccordionList) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

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
          className={s.item}
          onClick={() => handleToggleFAQ(index)}
        >
          <div className={s.item__body}>
            <h4 className={s.item__title}>{translation.title}</h4>
            <button type='button' className={s.item__btn}>
              <svg
                className={
                  openItems.includes(index)
                    ? `${s.item__icon_open}`
                    : `${s.item__icon_closed}`
                }
              >
                <use href={sprite + '#chevron-down'} />
              </svg>
            </button>
          </div>
          <div
            className={
              openItems.includes(index)
                ? `${s.item__content_open}`
                : `${s.item__content_closed}`
            }
          >
            <div className={s.item__descr}>
              <p className={s.text}>{translation.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccordionList;
