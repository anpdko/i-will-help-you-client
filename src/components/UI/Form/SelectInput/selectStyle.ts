import { StylesConfig } from 'react-select';

const customStyles: StylesConfig<any> = {
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  // indicatorsContainer: (styles) => ({ ...styles, padding: ' 8px 8px 8px 0' }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: '#0e0e0e',
    fontFamily: 'Open Sans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: state.isSelected ? '600' : '400',
    lineHeight: '150%',
    backgroundColor: state.isSelected ? '#eee;' : '#fff',
  }),

  placeholder: (styles) => ({
    ...styles,
    color: '#505050',
    background: '#fff',
    lineHeight: '100%',
  }),
<<<<<<< HEAD:src/components/UI/Form/SelectInput/selectStyle.ts

  control: (baseStyles) => ({
=======
  
  control: (baseStyles) => ({
  // control: (baseStyles) => ({
>>>>>>> main:src/components/FormReadyHelp/selectStyle.ts
    ...baseStyles,
    backgroundColor: '#fff',
    border: '1px solid #0e0e0e',
    borderRadius: '10px',
    padding: '11px 14px',
<<<<<<< HEAD:src/components/UI/Form/SelectInput/selectStyle.ts
=======
    // padding: state.selectProps.customPadding || '11px 14px',
>>>>>>> main:src/components/FormReadyHelp/selectStyle.ts
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    // color: '#000',
  }),
};

export default customStyles;
