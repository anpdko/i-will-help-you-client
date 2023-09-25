import { useTranslation } from 'react-i18next';
import { useFormContext, Controller } from 'react-hook-form';
import FormItemWrapper from '../../FormItemWrapper/FormItemWrapper';
import { skillsList } from '@utils/skillsList';
import s from './Skills.module.scss';
import './Skills.scss';

import { Select, ConfigProvider } from 'antd';


const Skills = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { t } = useTranslation();

  const skills = skillsList.map((item) => ({
    value: `${t(item.skill)}`,
    label: `${t(item.skill)}`,
  }));

  return (
    <FormItemWrapper
      className={s.skills}
      title={t('Choose your skills (you can select several options) *')}
    >
      <Controller
        name='skills'
        control={control}
        rules={{
          required: {
            value: true,
            message: `${t('Please select at least one skill')}`,
          },
        }}
        defaultValue={null}
        render={({ field }) => (
          <>
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    multipleItemBg: '#FFA787',
                    multipleItemHeight: 34,
                    optionFontSize: 14,
                    optionSelectedBg: '#EEE',
                    optionPadding: '12px 24px',
                  },
                },
                token: {
                  colorBorder: '#000',
                  colorPrimaryHover: '#000',
                  borderRadius: 10,
                  boxShadowSecondary: 'none',
                  fontFamily: 'Open Sans',
                  fontSize: 16,
                  colorTextPlaceholder: '#505050',
                  controlPaddingHorizontal: 24,
                },
              }}
            >
              <Select
                {...field}
                options={skills}
                placeholder={t('Search your skills')}
                mode='multiple'
                maxTagCount='responsive'
                className={s.skills__input}
                value={field.value || []}
              />
            </ConfigProvider>
            {errors?.skills && (
              <p className={s.error}>{errors?.skills.message as string}</p>
            )}
          </>
        )}
      />
    </FormItemWrapper>
  );
};

export default Skills;
