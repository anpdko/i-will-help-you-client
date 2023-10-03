import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ConfigProvider, Select } from 'antd';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { TelegramIcon } from '@components/icons/TelegramIcon';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { InstagramIcon } from '@components/icons/InstagramIcon';
import { FacebookIcon } from '@components/icons/FacebookIcon';
import { ArrowDownSelect } from '@/components/icons/ArrowDownSelect';
import s from './SocialNetwork.module.scss';
import './SocialNetwork.scss';

const SocialNetwork = () => {
  const {
    control,
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { t } = useTranslation();
  const [selectedSocialNetwork, setSelectedSocialNetwork] =
    useState<string>('telegram');

  const options = [
    { value: 'telegram', label: <TelegramIcon /> },
    { value: 'whatsapp', label: <WhatsAppIcon /> },
    { value: 'instagram', label: <InstagramIcon /> },
    { value: 'facebook', label: <FacebookIcon /> },
  ];

  const handleSelectedSocialNetworkChange = (value: string) => {
    setValue('network', '');
    setSelectedSocialNetwork(value);
  };

  const getPlaceholder = () => {
    if (
      selectedSocialNetwork === 'telegram' ||
      selectedSocialNetwork === 'instagram'
    ) {
      return t('@YourNickname');
    } else if (selectedSocialNetwork === 'facebook') {
      return t('Link');
    } else if (selectedSocialNetwork === 'whatsapp') {
      return t('Phone number');
    } else {
      return '';
    }
  };

  const getPattern = () => {
    if (selectedSocialNetwork === 'telegram') {
      return /^@[a-zA-Z0-9_]{5,32}$/;
    } else if (selectedSocialNetwork === 'instagram') {
      return /^(?!.*\.\.)@[a-zA-Z0-9.,_]{2,30}$/;
    } else if (selectedSocialNetwork === 'facebook') {
      return /^https:\/\/www\.facebook\.com\/.+$/;
    } else if (selectedSocialNetwork === 'whatsapp') {
      return /^\+\d{1,15}$/;
    } else {
      return /(?:)/;
    }
  };

  const getPatternMessage = () => {
    if (
      selectedSocialNetwork === 'telegram' ||
      selectedSocialNetwork === 'instagram'
    ) {
      return `${t('Please write your nickname')}`;
    } else if (selectedSocialNetwork === 'facebook') {
      return `${t('Please provide a valid Facebook link')}`;
    } else if (selectedSocialNetwork === 'whatsapp') {
      return `${t('The number must start with + and contain only digits')}`;
    } else {
      return '';
    }
  };

  const nicknameValidation = errors.network && (
    <p className={s.networks__error}>{errors?.network?.message as string}</p>
  );

  return (
    <FormItemWrapper className={s.networks} title={t('Social Network')}>
      <div className={s.networks__wrap}>
        <Controller
          name='networkLogo'
          control={control}
          render={({ field }) => (
            <div className='social-network-logo'>
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      optionPadding: '15px 20px',
                    },
                  },
                  token: {
                    colorBorder: '#000',
                    colorPrimaryHover: '#000',
                    borderRadius: 10,
                  },
                }}
              >
                <Select
                  onChange={(value: string) =>
                    handleSelectedSocialNetworkChange(value)
                  }
                  onBlur={field.onBlur}
                  value={selectedSocialNetwork}
                  ref={field.ref}
                  options={options}
                  suffixIcon={<ArrowDownSelect size='small' />}
                />
              </ConfigProvider>
            </div>
          )}
          rules={{ required: false }}
        />
        <input
          type='text'
          id='network'
          placeholder={getPlaceholder()}
          {...register('network', {
            required: false,
            pattern: {
              value: getPattern(),
              message: getPatternMessage(),
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
