import { useFormContext } from 'react-hook-form';
import FormItemContainer from '../FormItemContainer';
import s from './Checkboxes.module.scss';

const Checkboxes = () => {
  const { register } = useFormContext();

  return (
    <FormItemContainer section='checkboxes'>
      <div className={s.checkboxes__wrap}>
        <input
          type='checkbox'
          id='mailing'
          {...register('mailing', {
            required: false,
          })}
          className={s.checkboxes__input}
        />
        <p className={s.checkboxes__text}>Consent to mailing</p>
      </div>

      <div className={s.checkboxes__wrap}>
        <input
          type='checkbox'
          id='dataProcessing'
          {...register('dataProcessing', {
            required: true,
          })}
          className={s.checkboxes__input}
        />
        <p className={s.checkboxes__text}>Consent to data processing *</p>
      </div>
    </FormItemContainer>
  );
};

export default Checkboxes;
