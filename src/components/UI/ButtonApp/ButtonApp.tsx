import React from 'react';
import s from './ButtonApp.module.scss';
import { Link } from 'react-router-dom';

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	type?: 'link' | '';
	to?: string;
	color?: 'orange' | 'white';
   size?: 'small' | 'medium' | 'standard' | 'large';
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonApp = ({
	children,
	className,
	type = '',
	to = '/',
	color = 'orange',
   size = 'standard',
	onClick,
	...props
}: ButtonProps) => {
	if (type === 'link') {
		return (
			<Link
				to={to}
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
			className={[s.btn, s[type], s[color], s[size], className].join(' ')}
		>
			{children}
		</button>
	);
};

export default ButtonApp;
