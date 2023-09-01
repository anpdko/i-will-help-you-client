import { ReadyNeedHeader, FAQ } from '../../components';
import { SelectApp } from '../../components/UI';

const ReadyHelpPage = () => {
  return (
    <section>
      <div className='container'>
        <ReadyNeedHeader />
        <SelectApp />
        <FAQ />
      </div>
    </section>
  );
};
export default ReadyHelpPage;
