import React from 'react';
import s from './ButtonApp.module.scss';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'link' | '' | 'submit';
  to?: string;
  color?: 'orange' | 'white';
  size?: 'smaller' | 'small' | 'medium' | 'standard' | 'large' | 'Xlarge';
  onClick?: any;
  disabled?: boolean;
}

const ButtonApp = ({
  children,
  className,
  type = '',
  to = '/',
  color = 'orange',
  size = 'standard',
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  if (type === 'link') {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={[s.btn, s[type], s[color], s[size], className].join(' ')}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...props}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      className={[s.btn, s[type], s[color], s[size], className].join(' ')}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonApp;
