import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { countryList, countryListUa } from '../../../../utils/listOfCountry';
import s from './SelectCountry.module.scss';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { SelectInput } from '@components/UI';

const SelectCountry = () => {
  const value = localStorage.getItem('language');
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (value) {
      setLang(JSON.parse(value));
    } else {
      return;
    }
  }, [value]);

  const { t } = useTranslation();

  const countries = countryList.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  const countriesUa = countryListUa.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  return (
    <FormItemWrapper className={s.country} title={t('Country of Residence *')}>
      <SelectInput
        name='country'
        options={lang === 'ua' ? countriesUa : countries}
        placeholder={t('Select Country')}
        required={true}
        className={s.country__input}
      />
    </FormItemWrapper>
  );
};

export default SelectCountry;
