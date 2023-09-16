import { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { HiOutlineX } from 'react-icons/hi';
import basic from '../Form.module.scss';
import s from './FileInput.module.scss';

interface FileInputProps {
  name: string;
  title?: string;
  placeholderIcon?: React.ReactNode | any;
  placeholderText?: string;
  accept: string;
  multiple: boolean;
  classNameContainer?: string;
  classNameTitle?: string;
  classNameLabelContainer?: string;
  classNameList?: string;
}

const FileInput = ({
  name,
  title,
  placeholderIcon,
  placeholderText,
  accept,
  multiple,
  classNameContainer,
  classNameTitle,
  classNameLabelContainer,
  classNameList,
}: FileInputProps) => {
  const { control, setValue } = useFormContext();
  const {
    field: { ref, value = [] },
  } = useController({
    control,
    name,
    defaultValue: [],
    rules: {
      validate: (name) => {
        for (let i = 0; i < name.length; i++) {
          if (name[i].size > 10 * 1024 * 1024) {
            return 'File size should not exceed 10 MB';
          }
        }
        return true;
      },
    },
  });

  const [fileErrors, setFileErrors] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(event.target.files || []);
    const filesToAdd = fileList.map((file) => ({
      name: file.name,
      file,
    }));

    const validationErrors = filesToAdd.map((file) => {
      if (file.file.size > 10 * 1024 * 1024) {
        return 'File size should not exceed 10 MB';
      }
      return null;
    });

    const hasErrors = validationErrors.some((error) => error !== null);

    if (hasErrors) {
      const errorMessages = validationErrors.filter(
        (error) => error !== null,
      ) as string[];
      setFileErrors(errorMessages);
    } else {
      setFileErrors([]);
      const newFiles = [...value, ...filesToAdd];
      setValue(name, newFiles);
    }
  };

  const handleFileRemove = (index: number) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    setValue(name, newFiles);
  };

  return (
    <div className={`${s.file} ${classNameContainer}`}>
      <h3 className={`${s.file__title} ${classNameTitle}`}>{title}</h3>
      <label className={`${s.file__container} ${classNameLabelContainer}`}>
        {placeholderIcon}
        {placeholderText}
        <input
          id={name}
          type='file'
          multiple={multiple}
          accept={accept}
          onChange={handleFileChange}
          ref={ref}
          className={s.file__input}
        />
      </label>
      {value.length > 0 && (
        <ul className={`${s.file__list} ${classNameList}`}>
          {value.map((file: { name: string; file: File }, index: number) => (
            <li key={index} className={s.file__item}>
              {file.name}
              <button
                type='button'
                onClick={() => handleFileRemove(index)}
                className={s.file__button_delete}
              >
                <HiOutlineX />
              </button>
            </li>
          ))}
        </ul>
      )}
      {fileErrors.map((error, index) => (
        <p key={index} className={`${basic.form__error}`}>
          {error}
        </p>
      ))}
    </div>
  );
};

export default FileInput;
