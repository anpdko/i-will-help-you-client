import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import FormItemContainer from '../FormItemContainer';
import FormLabel from '../FormLabel';
import { InputFormApp } from '../../UI';
import { TelegramIcon } from '../../icons/TelegramIcon';
import { ViberIcon } from '../../icons/ViberIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { FacebookIcon } from '../../icons/FacebookIcon';
import customStyles from '../../UI/Form/SelectInput/selectStyle';
import basic from '../FormReadyHelp.module.scss';
import s from './SocialNetwork.module.scss';

const SocialNetwork = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const options = [
    { value: 'telegram', label: 'telegram', icon: <TelegramIcon /> },
    { value: 'viber', label: 'viber', icon: <ViberIcon /> },
    { value: 'instagram', label: 'instagram', icon: <InstagramIcon /> },
    { value: 'facebook', label: 'facebook', icon: <FacebookIcon /> },
  ];

  useEffect(() => {
    setValue('networkLogo', options[0].value);
  }, [setValue, options]);

  const nicknameValidation = errors.network && (
    <p className={basic.form__error}>{errors?.network?.message as string}</p>
  );

  return (
    <FormItemContainer section='networks'>
      <FormLabel labelFor='network' title='Social Network' />
      <div className={s.networks__wrap}>
        <Controller
          name='networkLogo'
          control={control}
          render={({ field }) => (
            <Select
              options={options}
              styles={customStyles}
              // customPadding='11px 0'
              isSearchable={false}
              defaultValue={options[0]}
              onChange={(selectedOption) =>
                field.onChange(
                  (
                    selectedOption as {
                      value: string;
                      label: string;
                      icon: React.ReactNode;
                    }
                  )?.value,
                )
              }
              formatOptionLabel={({ icon }: { icon: any }) => (
                <>{icon}</>
              )}
              className={s.networks__input_logo}
            />
          )}
          rules={{ required: false }}
        />
        <InputFormApp
          id='network'
          placeholder='@YourNickname'
          required={false}
          regexp={/^[^0-9]\w+$/}
          message='Please write your nickname'
          className={s.networks__input_network}
        />
      </div>
      {nicknameValidation}
    </FormItemContainer>
  );
};

export default SocialNetwork;
