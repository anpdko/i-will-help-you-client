import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, useFormContext } from 'react-hook-form';
import { countryList, countryListUa } from '@/utils/listOfCountry';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { SelectInput } from '@components/UI';
import s from './SelectCountry.module.scss';

const SelectCountry = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
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
      <Controller
        name='country'
        control={control}
        defaultValue={null}
        rules={{ required: t('Please select your country') }}
        render={({ field }) => (
          <div className={s.wrap}>
            <SelectInput
              field={field}
              options={lang === 'ua' ? countriesUa : countries}
              placeholder={t('Select Country')}
              isSearchable={true}
              className={s.country__input}
            />
            {errors.country && (
              <p className={s.error}>{errors.country.message as string}</p>
            )}
          </div>
        )}
      />
    </FormItemWrapper>
  );
};

export default SelectCountry;
