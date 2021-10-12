import React, { useState } from 'react';
import { Text } from '..';
import Styles from './Input.styles';

const Input: React.FC<{
	title?: string;
	placeholder?: string;
	type?: 'text' | 'password' | 'email';
}> = ({ title, placeholder = '', type = 'email' }) => {
	const [formatError, setFormatError] = useState<boolean>(true);
	return (
		<Styles>
			<div className="input__header">
				{title && (
					<Text className="title" size="subtitle">
						Name
					</Text>
				)}
				{formatError && (
					<Text size="subtitle" color="error" className="input__header__format-error">
						Wrong Format
					</Text>
				)}
			</div>
			<input type={type} placeholder={placeholder} />
		</Styles>
	);
};

export default Input;
