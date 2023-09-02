import basic from './FormReadyHelp.module.scss';

interface FormItemContainer {
  children: React.ReactNode;
  section: string;
  className?: string;
}

const FormItemContainer = ({
  children,
  section,
  className,
}: FormItemContainer) => {
  return (
    <div
      className={`
        ${basic.form__wrap}
        ${basic[`form__${section}`]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default FormItemContainer;
