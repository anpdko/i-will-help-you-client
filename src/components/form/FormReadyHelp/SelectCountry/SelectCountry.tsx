import { useTranslation } from 'react-i18next';
import { countryList } from '../../../../utils/listOfCountry';
import { SelectInput } from '../../../UI';
import s from './SelectCountry.module.scss';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';

const SelectCountry = () => {
  const { t } = useTranslation();

  const countries = countryList.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  return (
    <FormItemWrapper className={s.country} title={t('Country of Residence *')}>
      <SelectInput
        name='country'
        options={countries}
        placeholder={t('Select Country')}
        required={true}
        className={s.country__input}
      />
    </FormItemWrapper>
  );
};

export default SelectCountry;
