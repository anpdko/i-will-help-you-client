import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import { countryList } from '../../../utils/listOfCountry';
import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
// import customStyles from '../selectStyle';
import s from './SelectCountry.module.scss';

const SelectCountry = () => {
  const { control } = useFormContext();

  const countries = countryList.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  return (
    <FormItemContainer section='country'>
      <FormLabel labelFor='country' title='Country of Residence *' />
      <Controller
        name='country'
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            options={countries}
            value={countries.find((country) => country.value === value)}
            onChange={(country) => onChange(country?.value)}
            // styles={customStyles}
            placeholder='Select Country'
            className={s.country__input}
          />
        )}
        rules={{ required: true }}
      />
    </FormItemContainer>
  );
};

export default SelectCountry;
