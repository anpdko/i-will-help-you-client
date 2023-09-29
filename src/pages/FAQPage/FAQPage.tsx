import { FAQ } from '../../components';
import { faqData } from '../../data/faqData';

const FAQPage = () => {
  return <FAQ data={faqData} showMoreButton={false} />;
};
export default FAQPage;
