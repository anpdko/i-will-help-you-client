import React from 'react';

import s from './ListSection.module.scss';

interface IList {
  title: string;
  listTitle: string;
  list: [];
}
interface IParagraph {
  title: string;
  description: string;
}

interface IListProps {
  title: string;
  subTitle: string;
  items: IParagraph[] | IList[];
  variant: 'list' | 'paragraphs';
}

const ListSection: React.FC<IListProps> = ({
  title,
  subTitle,
  items,
  variant,
}) => {
  const renderItems = () => {
    console.log('items', items);

    if (variant === 'list') {
      return (
        <ul className={s.list}>
          {(items as IList[]).map((item, index) => (
            <li key={index.toString()} className={s.item}>
              <h3>{item.title}</h3>
              <ul>
                {item.listTitle}
                {item.list?.map((item, i) => (
                  <li key={i.toString()}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      );
    } else if (variant === 'paragraphs') {
      return (
        <ul className={s.list}>
          {(items as IParagraph[]).map((item, index) => (
            <li key={index.toString()} className={s.item}>
              <h3 data-count={index + 1 + '.'}>{item.title}</h3>
              <p className='text'>{item.description}</p>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <article className={s.content}>
      <div className={s.header}>
        <h1 className={`${s.title} heading2`}>{title}</h1>
        <h2 className={s.subtitle}>{subTitle}</h2>
      </div>
      {renderItems()}
    </article>
  );
};

export default ListSection;
