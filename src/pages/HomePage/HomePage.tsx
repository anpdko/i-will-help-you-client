import s from './HomePage.module.scss'
import { Banners, Projects, About, Reviews } from '../../components';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
   const {t} = useTranslation()
   return (
      <div className={s.home}>
         <Banners/>
         <h1>{t("Empowering Change through Projects")}</h1>
         <Projects/>
         <h1>Our Commitment and Vision</h1>
         <About/>
         <h1>Stories of Hope and Gratitude</h1>
         <Reviews/>
         {/* VOLUNTEER NEEDED */}
      </div>
   );
};
export default HomePage