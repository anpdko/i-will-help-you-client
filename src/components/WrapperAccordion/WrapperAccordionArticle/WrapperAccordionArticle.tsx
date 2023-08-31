import React from 'react';
import { IProjectsTags } from '../../../store/projects/projectsType';

import s from './WrapperAccordionArticle.module.scss';

interface IWrapperAccordionArticleProps {
  title: string;
  subtitle: string;
  items: IProjectsTags[] | string[];
  variant: 'list' | 'paragraphs';
}

const WrapperAccordionArticle: React.FC<IWrapperAccordionArticleProps> = ({
  title,
  subtitle,
  items,
  variant,
}) => {
  const renderItems = () => {
    if (variant === 'list') {
      return (
        <ul className={s.list}>
          {(items as IProjectsTags[]).map((item) => (
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

export default WrapperAccordionArticle;
