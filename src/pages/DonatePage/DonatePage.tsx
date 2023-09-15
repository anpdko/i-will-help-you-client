import { FormHeader, ProjectsFund, FormDonation, FAQ } from '../../components';
import { faqDonateData } from '../../data/faqData';

const DonatePage = () => {
  return (
    <>
      <FormHeader id='donate' />
      <FormDonation />
      <ProjectsFund />
      <FAQ data={faqDonateData} />
    </>
  );
};
export default DonatePage;
