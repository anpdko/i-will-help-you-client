import s from './WrapperAccordion.module.scss';

interface WrapperAccordionProps {
  variant: 'accordion' | 'paragraph';
  content: WrapperContent[];
}

interface WrapperContent {
  id: number;
  title?: string;
  text: string;
}

const WrapperAccordion = ({ variant, content }: WrapperAccordionProps) => {
  return (
    <div className={s.wrapper}>
      {variant === 'paragraph' && (
        <ul className={s.wrapper__paragraph}>
          {content &&
            content.map((item) => (
              <li key={item.id} className={s.paragraph}>
                <p className={s.paragraph__text}>{item.text}</p>
              </li>
            ))}
        </ul>
      )}
      {variant === 'accordion' && (
        <ul className={s.wrapper__accordion}>
          {content &&
            content.map((item) => (
              <li key={item.id} className={s.accordion}>
                <p className={s.accordion__title}>{item.title}</p>
                <p className={s.accordion__text}>{item.text}</p>
                <span className={s.accordion__line}></span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default WrapperAccordion;
