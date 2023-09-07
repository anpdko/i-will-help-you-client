import s from './FormWrapper.module.scss';

interface FormWrapperProps {
  subtitle: string;
  title: string;
  children: React.ReactNode;
}

const FormWrapper = ({ subtitle, title, children }: FormWrapperProps) => {
  return (
    <section className={s.section}>
      <h3 className={s.section__subtitle}>{subtitle}</h3>
      <div className={s.section__wrap}>
        <h2 className={`heading2 ${s.section__title}`}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default FormWrapper;
