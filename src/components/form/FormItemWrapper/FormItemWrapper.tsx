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
      <label className={s.wrapper__label}>
        {title}
        {children}
      </label>
    </div>
  );
};

export default FormItemWrapper;
