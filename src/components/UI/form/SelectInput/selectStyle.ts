import { StylesConfig } from 'react-select';

const customStyles: StylesConfig<any> = {
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s',
  }),

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

  control: (baseStyles, { isFocused }) => ({
    ...baseStyles,
    backgroundColor: '#fff',
    border: isFocused ? '2px solid #0e0e0e' : '1px solid #0e0e0e',
    borderRadius: '10px',
    padding: '0.45rem 1.5rem',
  }),

  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: '0',
    gap: '1rem',
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    // color: '#000',
    lineHeight: '150%',
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
    marginTop: '.5rem',
    borderRadius: '0.6rem',
    border: '1px solid var(--black)',
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
    '::-webkit-scrollbar': {
      width: '4px',
      height: '0rem',
    },
    '::-webkit-scrollbar-track': {
      background: 'var(--light-grey)',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'var(--dark-grey)',
      borderRadius: '10px',
    },
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
