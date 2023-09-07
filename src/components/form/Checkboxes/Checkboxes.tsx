import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { CheckboxInput } from '../../UI';
import s from './Checkboxes.module.scss';

const Checkboxes = () => {
  return (
    <FormItemWrapper className={s.checkboxes}>
      <CheckboxInput
        id='mailing'
        required={false}
        text='Consent to mailing'
        className={s.checkboxes__item}
      />
      <CheckboxInput
        id='dataProcessing'
        required={true}
        text='Consent to data processing *'
        className={s.checkboxes__item}
      />
    </FormItemWrapper>
  );
};

export default Checkboxes;
