import { ReadyNeedHeader, FAQ } from '../../components';
import { InputApp, SelectApp, TextareaApp } from '../../components/UI';

const ReadyHelpPage = () => {
  return (
    <section>
      <div className='container'>
        <ReadyNeedHeader />
        <InputApp />
        <SelectApp />
        <TextareaApp />
        <FAQ />
      </div>
    </section>
  );
};
export default ReadyHelpPage;
