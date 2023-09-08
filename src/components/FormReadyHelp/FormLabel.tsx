import s from './FormReadyHelp.module.scss';

interface FormLabelProps {
  labelFor: string;
  title: string;
}

const FormLabel = ({ labelFor, title }: FormLabelProps) => {
  return (
    <label htmlFor={labelFor} className={s.form__label}>
      {title}
    </label>
  );
};

export default FormLabel;
