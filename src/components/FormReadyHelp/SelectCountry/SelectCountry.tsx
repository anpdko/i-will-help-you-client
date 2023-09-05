import { countryList } from '../../../utils/listOfCountry';
import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
import { SelectInput } from '../../UI';
import s from './SelectCountry.module.scss';

const SelectCountry = () => {
  const countries = countryList.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  return (
    <FormItemContainer section='country'>
      <FormLabel labelFor='country' title='Country of Residence *' />
      <SelectInput
        name='country'
        options={countries}
        placeholder='Select Country'
        required={true}
        className={s.country__input}
      />
    </FormItemContainer>
  );
};

export default SelectCountry;
