import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import s from './CheckboxInput.module.scss';

interface CheckboxInputProps {
  id: string;
  required: boolean;
  text: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput = ({
  id,
  required = false,
  text,
  className,
  onChange,
}: CheckboxInputProps) => {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(id, e.target.checked);

    if (onChange) {
      onChange(e);
    }

    if (e.target.checked) {
      clearErrors(id);
    }
  };

  return (
    <div className={`${s.checkboxes__wrap} ${className}`}>
      <input
        type='checkbox'
        id={id}
        {...register(id, {
          required: required,
        })}
        className={s.checkboxes__input}
        onChange={handleCheckboxChange}
      />
      <p className={s.checkboxes__text}>{text}</p>
      {required && errors[id] && (
        <p className={s.checkboxes__error}>{t('Please check the checkbox')}</p>
      )}
    </div>
  );
};

export default CheckboxInput;
