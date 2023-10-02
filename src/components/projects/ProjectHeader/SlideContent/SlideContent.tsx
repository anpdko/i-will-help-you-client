import { ButtonApp } from '../../../UI';
import { useTranslation } from 'react-i18next';

import s from './SlideContent.module.scss';

interface ISlideContentProps {
  title: string;
  slogan: string;
}
const SlideContent: React.FC<ISlideContentProps> = ({ title, slogan }) => {
  const { t } = useTranslation();

  return (
    <div className={s.content}>
      <h2 className='heading2'>{title}</h2>
      <p>{slogan}</p>
      <div className={s.actions}>
        <ButtonApp type='link' to='/donate'>
          {t('Donate')}
        </ButtonApp>
        <ButtonApp type='link' to='/needhelp' color='white'>
          {t('Need Help')}
        </ButtonApp>
      </div>
    </div>
  );
};

export default SlideContent;
