import { useFormHeaderData } from '@/hooks/useFormHeaderData';

import s from './FormHeader.module.scss';
import { LazyImage } from '..';

const FormHeader = ({ id }: { id: string }) => {
  const headerData = useFormHeaderData(id);
  if (!headerData) {
    return null;
  }
  return (
    <section className={s.form_header}>
      <div className='container'>
        <div className={s.body}>
          <div className={s.body__content}>
            <h1 className='heading1'>{headerData.title}</h1>
            <p className='text'>{headerData.description}</p>
          </div>
          <div className={s.body__image}>
            <LazyImage src={headerData.imagePath} alt='header image' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormHeader;
