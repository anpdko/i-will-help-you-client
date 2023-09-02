import { Controller, useFormContext } from 'react-hook-form';
import FormItemContainer from '../FormItemContainer';
import basic from '../FormReadyHelp.module.scss';
import { InputFormApp } from '../../UI';
import FormLabel from '../FormLabel';
import Select from 'react-select';
import customStyles from '../selectStyle';
import { TelegramIcon } from '../../icons/TelegramIcon';
import { ViberIcon } from '../../icons/ViberIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { FacebookIcon } from '../../icons/FacebookIcon';
import s from './SocialNetwork.module.scss';

const SocialNetwork = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const options = [
    { value: 'telegram', label: 'telegram', icon: <TelegramIcon /> },
    { value: 'viber', label: 'viber', icon: <ViberIcon /> },
    { value: 'instagram', label: 'instagram', icon: <InstagramIcon /> },
    { value: 'facebook', label: 'facebook', icon: <FacebookIcon /> },
  ];

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
              padding='11px 0'
              isSearchable={false}
              defaultValue={options[0]}
              onChange={(selectedOption) =>
                field.onChange(selectedOption?.value)
              }
              formatOptionLabel={({ icon }) => (
                <>
                  {icon}
                </>
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
