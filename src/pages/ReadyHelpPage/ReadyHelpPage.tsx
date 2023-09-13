import { FormHeader, FormReadyHelp, FAQ } from '../../components';
import faqVolunteerData from '../../data/faqData';

const ReadyHelpPage = () => {
  return (
    <>
      <FormHeader id='volunteer' />
      <FormReadyHelp />
      <FAQ data={faqVolunteerData} />
    </>
  );
};
export default ReadyHelpPage;
