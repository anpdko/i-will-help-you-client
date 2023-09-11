import s from './FormItemWrapper.module.scss';

interface FormItemWrapperProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const FormItemWrapper = ({
  children,
  title,
  className,
}: FormItemWrapperProps) => {
  return (
    <div
      className={`
        ${s.wrapper}
        ${className}
      `}
    >
      <label className={s.wrapper__label}>{title}</label>
      <div className={s.wrapper__child}>{children}</div>
    </div>
  );
};

export default FormItemWrapper;
