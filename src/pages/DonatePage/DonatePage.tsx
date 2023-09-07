import s from './DonatePage.module.scss'
import { FormHeader } from '../../components';

const DonatePage = () => {
   return (
      <section className={s.donate_page}>
         <div className='container'>
            <FormHeader/>
            <h1>Donate Page</h1>
         </div>
      </section>
   );
};
export default DonatePage