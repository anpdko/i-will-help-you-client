import { countryList } from '@utils/listOfCountry';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { SelectInput } from '@components/UI';
import s from './SelectCountry.module.scss';

const SelectCountry = () => {
  const countries = countryList.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  return (
    <FormItemWrapper className={s.country} title='Country of Residence *'>
      <SelectInput
        name='country'
        options={countries}
        placeholder='Select Country'
        required={true}
        className={s.country__input}
      />
    </FormItemWrapper>
  );
};

export default SelectCountry;
