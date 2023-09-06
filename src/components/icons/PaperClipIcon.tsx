import { SVGProps } from 'react';

export const PaperClipIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <path
        d='M17 7V17.5C17 18.9587 16.4205 20.3576 15.3891 21.3891C14.3576 22.4205 12.9587 23 11.5 23C10.0413 23 8.64236 22.4205 7.61091 21.3891C6.57946 20.3576 6 18.9587 6 17.5V6C6 4.93913 6.42143 3.92172 7.17157 3.17157C7.92172 2.42143 8.93913 2 10 2C11.0609 2 12.0783 2.42143 12.8284 3.17157C13.5786 3.92172 14 4.93913 14 6V16.5C14 17.163 13.7366 17.7989 13.2678 18.2678C12.7989 18.7366 12.163 19 11.5 19C10.837 19 10.2011 18.7366 9.73223 18.2678C9.26339 17.7989 9 17.163 9 16.5V7H10V16.5C10 16.8978 10.158 17.2794 10.4393 17.5607C10.7206 17.842 11.1022 18 11.5 18C11.8978 18 12.2794 17.842 12.5607 17.5607C12.842 17.2794 13 16.8978 13 16.5V6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6V17.5C7 20 9 22 11.5 22C14 22 16 20 16 17.5V7H17Z'
        fill='currentColor'
      />
    </svg>
  );
};
