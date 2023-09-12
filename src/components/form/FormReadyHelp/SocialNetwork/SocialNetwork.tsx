import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { TelegramIcon } from '@components/icons/TelegramIcon';
import { ViberIcon } from '@components/icons/ViberIcon';
import { InstagramIcon } from '@components/icons/InstagramIcon';
import { FacebookIcon } from '@components/icons/FacebookIcon';
import customStyles from '@components/UI/form/SelectInput/selectStyle';
import s from './SocialNetwork.module.scss';

const SocialNetwork = () => {
  const {
    control,
    register,
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
    <p className={s.networks__error}>{errors?.network?.message as string}</p>
  );

  return (
    <FormItemWrapper className={s.networks} title='Social Network'>
      <div className={s.networks__wrap}>
        <Controller
          name='networkLogo'
          control={control}
          render={({ field }) => (
            <Select
              options={options}
              styles={customStyles}
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
              formatOptionLabel={({ icon }: { icon: any }) => <>{icon}</>}
              className={s.networks__input_logo}
            />
          )}
          rules={{ required: false }}
        />
        <input
          type='text'
          id='network'
          placeholder='@YourNickname'
          {...register('network', {
            required: false,
            pattern: {
              value: /^[^0-9]\w+$/,
              message: 'Please write your nickname',
            },
          })}
          className={`${s.networks__input_network}`}
        />
      </div>
      {nicknameValidation}
    </FormItemWrapper>
  );
};

export default SocialNetwork;
