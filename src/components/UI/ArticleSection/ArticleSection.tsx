import React from 'react';

import s from './ArticleSection.module.scss';

interface ITags {
  _id: string;
  tag: string;
  desc: string;
}

interface IArticleProps {
  title: string;
  subtitle: string;
  items: ITags[] | string[];
  variant: 'list' | 'paragraphs' | 'list-ul';
}

const ProjectHeaderArticle: React.FC<IArticleProps> = ({
  title,
  subtitle,
  items,
  variant,
}) => {
  const renderItems = () => {
    if (variant === 'list') {
      return (
        <ul className={s.list}>
          {(items as ITags[]).map((item) => (
            <li key={item._id} className={s.item}>
              <h4 className={s.tag}>{item.tag}</h4>
              <p className='text'>{item.desc}</p>
            </li>
          ))}
        </ul>
      );
    } else if (variant === 'paragraphs') {
      return (
        <div className={s.list}>
          {(items as string[]).map(
            (item, index) =>
              item.trim() !== '' && (
                <p className='text' key={index}>
                  {item}
                </p>
              ),
          )}
        </div>
      );
    } else if (variant === 'list-ul') {
      return (
        <ul className={s.list}>
          {(items as string[]).map((item, index) => (
            <li key={index} className={s.item_count}>
              {item}
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
        <h2 className={`${s.title} heading2`}>{title}</h2>
        <h3 className={s.subtitle}>{subtitle}</h3>
      </div>
      {renderItems()}
    </article>
  );
};

export default ProjectHeaderArticle;
