import { faqVolunteerData } from '@/data/faqData';
import { FAQ, FormHeader, FormNeedHelp } from '../../components';

const NeedHelpPage = () => {
  return (
    <>
      <FormHeader id='needhelp' />
      <FormNeedHelp />
      <FAQ data={faqVolunteerData} />
    </>
  );
};
export default NeedHelpPage;
