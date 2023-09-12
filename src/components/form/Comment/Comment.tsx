import { useTranslation } from 'react-i18next';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { TextareaFormApp } from '../../UI';
import s from './Comment.module.scss';

interface CommentProps {
  title: string;
  placeholder: string;
}

const Comment = ({ title, placeholder }: CommentProps) => {
  const { t } = useTranslation();

  return (
    <FormItemWrapper className={s.comment} title={t(title)}>
      <TextareaFormApp
        name='comment'
        id='comment'
        rows={10}
        placeholder={t(placeholder)}
      />
    </FormItemWrapper>
  );
};

export default Comment;
