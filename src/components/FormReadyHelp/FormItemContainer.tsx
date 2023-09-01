import basic from './FormReadyHelp.module.scss';

interface FormItemContainer {
  children: React.ReactNode;
  section: string;
}

const FormItemContainer = ({ children, section }: FormItemContainer) => {
  return (
    <div className={`${basic.form__wrap} ${basic[`form__${section}`]}`}>
      {children}
    </div>
  );
};

export default FormItemContainer;
