import { SVGProps } from 'react';

export const DeleteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      {...props}
    >
      <path
        d='M4 11.9977L12 4M4 4L12 11.9977'
        stroke='currentColor'
        strokeLinecap='round'
      />
    </svg>
  );
};
