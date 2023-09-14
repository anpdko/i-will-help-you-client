import { StylesConfig } from 'react-select';

const customStyles: StylesConfig<any> = {
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  // indicatorsContainer: (styles) => ({ ...styles, padding: ' 8px 8px 8px 0' }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    color: 'var(--black)',
    fontFamily: 'Open Sans',
    fontSize: '1rem',
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

  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#fff',
    border: '1px solid #0e0e0e',
    borderRadius: '10px',
    padding: '0.7rem 1.5rem',
  }),

  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: '0',
    gap: '1rem',
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    // color: '#000',
  }),

  multiValue: (baseStyles) => ({
    ...baseStyles,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'var(--orange)',
    padding: '0.63rem 1.13rem',
    margin: '0',
    borderRadius: '0.5rem',
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    padding: '2rem',
    margin: '0',
  }),

  multiValueRemove: (baseStyles) => ({
    ...baseStyles,
    padding: '0',
    svg: {
      width: '1rem',
      height: '1rem',
    },

    '&:hover': {
      backgroundColor: 'transparent',
      color: 'var(--black)',
      svg: {
        scale: '1.2',
      },
    },
  }),

  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: '0',
    // display: 'grid',
    // gridTemplateColumns: '1fr 1fr',
  }),

  multiValueLabel: (baseStyles) => ({
    ...baseStyles,
    padding: '0',
    paddingLeft: '0',
    fontSize: '100%',
    overflow: 'inherit',
    color: 'var(--black)',
    // backgroundColor: 'red',
  }),
};

export default customStyles;
