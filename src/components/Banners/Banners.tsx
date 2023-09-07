import s from './Banners.module.scss';
import Bunner from './Bunner/Banner';
import bannersData from '../../data/bannersData';

const Banners = () => {
  return (
    <section className={s.banners}>
      <div className='container'>
        {bannersData.map((item) => (
          <Bunner key={item.id} tab={item} />
        ))}
      </div>
    </section>
  );
};
export default Banners;
