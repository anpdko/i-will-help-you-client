import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
import { TextareaFormApp } from '../../UI';
// import s from './Comment.module.scss';

const Comment = () => {
  return (
    <FormItemContainer section='comment'>
      <FormLabel
        labelFor='comment'
        title='Comment (what do you to do?; in what areas?)'
      />
      <TextareaFormApp name='comment' id='comment' rows={10} />
    </FormItemContainer>
  );
};

export default Comment;
