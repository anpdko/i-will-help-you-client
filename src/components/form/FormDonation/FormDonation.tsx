import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormWrapper from '../../wrapper/FormWrapper/FormWrapper';
import DonationContent from './DonationContent/DonationContent';
import DonateStuff from '@/components/form/FormDonation/DonateStuff/DonateStuff';
import PaymentForm from '@/components/form/FormDonation/PaymentForm/PaymentForm';
import s from './FormDonation.module.scss';

const formDonationData = [
  {
    id: 'donateFund',
    label: 'Donate Fund',
    title: 'Find out about our fund:',
    text: 'At I Will Help You Foundation, we are driven by a profound commitment to make a difference in the lives of war-affected individuals. Our foundation is a sanctuary of hope, compassion, and empowerment. Through innovative initiatives and dedicated efforts, we aim to create a brighter future for those who have faced the darkness of the war.',
    content: <PaymentForm />,
  },
  {
    id: 'donateProject',
    label: 'Donate Project',
    title: 'Find out about the project:',
    text: 'OpportunityConnect Ukraine emerges as a beacon of hope, actively identifying and forging partnerships with companies willing to welcome Ukrainian talent.',
    content: <PaymentForm content='donateProject' />,
  },
  {
    id: 'donateStuff',
    label: 'Send Stuff',
    title: 'Find out about the stuff needed:',
    text: 'By joining our journey, you become part of a collective force working tirelessly to rebuild shattered lives and restore hope. Through your support, we can offer essential sustenance, education, mental health care, and meaningful opportunities to those who need it most.',
    content: <DonateStuff />,
  },
];

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
          {formDonationData.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
              className={`${s.button} ${content === button.id ? s.active : ''}`}
            >
              {t(button.label)}
            </button>
          ))}
        </div>
        {formDonationData.map(
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
