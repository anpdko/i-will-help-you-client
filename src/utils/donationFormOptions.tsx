import DonateStuff from '../components/form/FormDonation/DonateStuff/DonateStuff';
import PaymentForm from '../components/form/FormDonation/PaymentForm/PaymentForm';

export const buttonData = [
  { label: 'Donate Fund', content: 'donateFund' },
  { label: 'Donate Project', content: 'donateProject' },
  { label: 'Send Stuff', content: 'donateStuff' },
];

export const donationTypes = [
  {
    id: 'donateFund',
    title: 'Find out about our fund:',
    text: 'At I Will Help You Foundation, we are driven by a profound commitment to make a difference in the lives of war-affected individuals. Our foundation is a sanctuary of hope, compassion, and empowerment. Through innovative initiatives and dedicated efforts, we aim to create a brighter future for those who have faced the darkness of the war.',
    content: <PaymentForm />,
  },
  {
    id: 'donateProject',
    title: 'Find out about the project:',
    text: 'OpportunityConnect Ukraine emerges as a beacon of hope, actively identifying and forging partnerships with companies willing to welcome Ukrainian talent.',
    content: <PaymentForm content='donateProject' />,
  },
  {
    id: 'donateStuff',
    title: 'Find out about the stuff needed:',
    text: 'By joining our journey, you become part of a collective force working tirelessly to rebuild shattered lives and restore hope. Through your support, we can offer essential sustenance, education, mental health care, and meaningful opportunities to those who need it most.',
    content: <DonateStuff />,
  },
];
