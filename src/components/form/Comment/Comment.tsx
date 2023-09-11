import { useTranslation } from 'react-i18next';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { TextareaFormApp } from '../../UI';
import s from './Comment.module.scss';

const Comment = () => {
  const { t } = useTranslation();

  return (
    <FormItemWrapper
      className={s.comment}
      title={t('Comment (what do you to do?; in what areas?)')}
    >
      <TextareaFormApp name='comment' id='comment' rows={10} />
    </FormItemWrapper>
  );
};

export default Comment;
