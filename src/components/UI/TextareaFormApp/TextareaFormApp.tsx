import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import s from './TextareaFormApp.module.scss';

interface TextareaFormAppProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  maxLength?: number;
}

const TextareaFormApp = ({
  name,
  id,
  placeholder,
  cols,
  rows,
  maxLength,
  className,
}: TextareaFormAppProps) => {
  const { register } = useFormContext();
  const { t } = useTranslation();
  const [charCount, setCharCount] = useState(0);

  const textareaProps = {
    name,
    id,
    placeholder: placeholder || `${t('Type here...')}`,
    cols: cols || 40,
    rows: rows || 5,
    maxLength: 2500,
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }

    setCharCount(event.target.value.length);
  };

  return (
    <div className={s.wrap}>
      <textarea
        {...textareaProps}
        {...register(name as string, {})}
        maxLength={maxLength}
        onInput={handleInput}
        className={`${s.textarea} ${className}`}
      />
      {maxLength && (
        <p className={s.charCount}>
          {charCount}/{maxLength}
        </p>
      )}
    </div>
  );
};

export default TextareaFormApp;
