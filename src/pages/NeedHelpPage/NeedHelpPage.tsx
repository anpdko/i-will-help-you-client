import { FAQ, FormHeader, FormNeedHelp } from '../../components';

const NeedHelpPage = () => {
  return (
    <>
      <section>
        <div className='container'>
          <FormHeader/>
          <FormNeedHelp />
          <FAQ/>
        </div>
      </section>
    </>
  );
};
export default NeedHelpPage;
