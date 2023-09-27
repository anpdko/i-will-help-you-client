import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './ArticleSection.module.scss';

interface IListCount {
  _id: string;
  listTitle: string;
  subItems?: string[];
}

interface ITags {
  _id: string;
  tag: string;
  desc: string;
}
interface IArticleProps {
  title: string;
  subtitle: string;
  items: ITags[] | string[] | IListCount[];
  variant: 'paragraphs' | 'paragraphs-3' | 'list-count';
}

const ArticleSection: React.FC<IArticleProps> = ({
  title,
  subtitle,
  items,
  variant,
}) => {
  const renderItems = () => {
    switch (variant) {
      case 'paragraphs':
        return renderParagraphs(items as string[]);
      case 'paragraphs-3':
        return renderParagraphs3(items as string[]);
      case 'list-count':
        return renderListCount(items as IListCount[]);
      default:
        return null;
    }
  };

  const renderParagraphs = (paragraphs: string[]) => (
    <div className={s.list}>
      {paragraphs
        .filter((item) => item.trim() !== '')
        .map((paragraph) => (
          <p className='text' key={uuidv4()}>
            {paragraph}
          </p>
        ))}
    </div>
  );

  const renderParagraphs3 = (paragraphs: string[]) => {
    const flattenedParagraphs = paragraphs
      .map((item) => item.split(/(?<=\.\s{2})/))
      .flat()
      .filter((item) => item.trim() !== '');

    return (
      <div className={s.list}>
        {flattenedParagraphs.map((paragraph) => (
          <p className='text' key={uuidv4()}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  };

  const renderListCount = (listItems: IListCount[]) => (
    <ul className={s.list_count}>
      {listItems.map((list, index) => (
        <li key={list._id}>
          <h3 data-count={index + 1 + '.'}>
            {list.listTitle.includes(':') ? (
              <>
                <span>{list.listTitle.split(':')[0]}:</span>
                {list.listTitle.split(':').slice(1).join(':')}
              </>
            ) : (
              <>{list.listTitle}</>
            )}
          </h3>
          <ul>
            {(list?.subItems || []).map((subItem) => (
              <li key={uuidv4()}>
                {subItem.includes(':') ? (
                  <>
                    <span>{subItem.split(':')[0]}:</span>
                    {subItem.split(':')[1]}
                  </>
                ) : (
                  <>{subItem}</>
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );

  return (
    <article className={s.content}>
      <div className={s.header}>
        <h2 className={`${s.title} heading2`}>{title}</h2>
        <h3 className={s.subtitle}>{subtitle}</h3>
      </div>
      {renderItems()}
    </article>
  );
};

export default ArticleSection;
