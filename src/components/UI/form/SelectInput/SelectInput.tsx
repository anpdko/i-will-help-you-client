/* eslint-disable prettier/prettier */
import { ConfigProvider, Select, SelectProps } from 'antd';
import './SelectStyles.scss';

interface SelectInputProps {
  field: {
    onChange: (value: string) => void;
    onBlur: () => void;
    value: string;
    ref: React.Ref<any>;
  };
  options: SelectProps<any>['options'];
  placeholder: string;
  isSearchable?: boolean;
  className?: string;
}

const SelectInput = ({
  field,
  options,
  placeholder,
  isSearchable = false,
  className,
}: SelectInputProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            multipleItemHeight: 34,
            optionFontSize: 14,
            optionSelectedBg: '#EEE',
            optionPadding: '15px 24px',
          },
        },
        token: {
          controlHeight: 52,
          colorBorder: '#000',
          colorPrimaryHover: '#000',
          borderRadius: 10,
          fontFamily: 'Open Sans',
          fontSize: 16,
          colorTextPlaceholder: '#505050',
        },
      }}
    >
      <Select
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        ref={field.ref}
        options={options}
        placeholder={placeholder}
        showSearch={isSearchable}
        className={className}
      />
    </ConfigProvider>
  );
};

export default SelectInput;
