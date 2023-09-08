import FormItemContainer from '../FormItemContainer';
import { CheckboxInput } from '../../UI';

const Checkboxes = () => {
  return (
    <FormItemContainer section='checkboxes'>
      <CheckboxInput id='mailing' required={false} text='Consent to mailing' />
      <CheckboxInput
        id='dataProcessing'
        required={true}
        text='Consent to data processing *'
      />
    </FormItemContainer>
  );
};

export default Checkboxes;
