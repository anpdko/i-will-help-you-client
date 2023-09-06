import { countryList } from '../../../../utils/listOfCountry';
import { SelectInput } from '../../../UI';
import s from './SelectCountry.module.scss';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';

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
