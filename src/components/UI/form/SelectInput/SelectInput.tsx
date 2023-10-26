import { ConfigProvider, Select, RefSelectProps } from 'antd';
import { OptionProps } from 'antd/es/select';
import { ArrowDownSelect } from '@/components/icons/ArrowDownSelect';
import './SelectStyles.scss';

interface SelectInputPropsField {
  onChange: (value: string) => void;
  onBlur: () => void;
  value: string;
  ref: React.Ref<RefSelectProps>;
}
interface SelectInputProps {
  field: SelectInputPropsField;
  options: OptionProps['options'];
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
        suffixIcon={<ArrowDownSelect size='large' />}
      />
    </ConfigProvider>
  );
};

export default SelectInput;
