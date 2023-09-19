import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './ListSection.module.scss';

interface IListItem {
  _id: string;
  listTitle: string;
  subItems?: string[];
}

interface IList {
  _id: string;
  language: string;
  title: string;
  list: IListItem[];
}
interface IParagraph {
  _id: string;
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
    if (variant === 'list') {
      return (
        <ul className={s.list}>
          {(items as IList[]).map((item, index) => (
            <li key={item._id} className={s.item}>
              <h3 data-count={index + 1 + '.'}>{item.title}</h3>
              {item.list.map((list) => (
                <ul key={list._id} className={s.item__list}>
                  <h4>{list.listTitle}</h4>
                  {(list.subItems || []).map((subItem) => {
                    const [beforeColon, afterColon] = subItem.split(':');
                    return (
                      <li key={uuidv4()} className={s.item__list}>
                        {afterColon ? ( // Check if there is a colon
                          <>
                            <span>{beforeColon}:</span> {afterColon}
                          </>
                        ) : (
                          <>{subItem}</>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ))}
            </li>
          ))}
        </ul>
      );
    } else if (variant === 'paragraphs') {
      return (
        <ul className={s.list}>
          {(items as IParagraph[]).map((item, index) => (
            <li key={item._id} className={s.item}>
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
