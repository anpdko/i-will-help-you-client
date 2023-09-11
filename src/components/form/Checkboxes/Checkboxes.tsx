import { useTranslation } from 'react-i18next';
import FormItemWrapper from '../FormItemWrapper/FormItemWrapper';
import { CheckboxInput } from '../../UI';
import s from './Checkboxes.module.scss';

const Checkboxes = () => {
  const { t } = useTranslation();

  return (
    <FormItemWrapper className={s.checkboxes}>
      <CheckboxInput
        id='mailing'
        required={false}
        text={t('Consent to mailing')}
        className={s.checkboxes__item}
      />
      <CheckboxInput
        id='dataProcessing'
        required={true}
        text={t('Consent to data processing *')}
        className={s.checkboxes__item}
      />
    </FormItemWrapper>
  );
};

export default Checkboxes;
