import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormWrapper from '../../wrapper/FormWrapper/FormWrapper';
import DonationContent from './DonationContent/DonationContent';
import { buttonData, donationTypes } from '../../../utils/donationFormOptions';
import s from './FormDonation.module.scss';

const FormDonation = () => {
  const { t } = useTranslation();
  const [content, setContent] = useState<string>('donateFund');

  const handleButtonClick = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <FormWrapper
      subtitle={t('Donations')}
      title={t('Donation application form')}
    >
      <div className={s.wrapper}>
        <div className={`border-style ${s.buttons}`}>
          {buttonData.map((button) => (
            <button
              key={button.content}
              onClick={() => handleButtonClick(button.content)}
              className={`${s.button} ${
                content === button.content ? s.active : ''
              }`}
            >
              {t(button.label)}
            </button>
          ))}
        </div>
        {donationTypes.map(
          (item) =>
            content === item.id && (
              <DonationContent
                key={item.id}
                title={t(item.title)}
                text={t(item.text)}
              >
                {item.content}
              </DonationContent>
            ),
        )}
      </div>
    </FormWrapper>
  );
};

export default FormDonation;
