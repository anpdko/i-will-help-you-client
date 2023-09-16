import { useTranslation } from 'react-i18next';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { TextareaFormApp } from '@components/UI';
import s from './Comment.module.scss';

interface CommentProps {
  title: string;
  placeholder: string;
  maxLength: number;
}

const Comment = ({ title, placeholder, maxLength }: CommentProps) => {
  const { t } = useTranslation();

  return (
    <FormItemWrapper className={s.comment} title={t(title)}>
      <TextareaFormApp
        name='comment'
        id='comment'
        rows={10}
        placeholder={t(placeholder)}
        maxLength={maxLength}
      />
    </FormItemWrapper>
  );
};

export default Comment;
