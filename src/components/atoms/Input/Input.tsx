import React, { useState } from 'react';
import { Text } from '..';
import Styles from './Input.styles';

const Input: React.FC<{
	title?: string;
	placeholder?: string;
	type?: 'text' | 'password' | 'email';
}> = ({ title, placeholder = '', type = 'text' }) => {
	const [formatError, setFormatError] = useState<boolean>(false);

	const validatingFormats = {
		text: /^[a-zA-Z0-9_.-\s]*$/gi,
		email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
		password: /./gi,
	};

	const formatValidator: React.ChangeEventHandler = event => {
		const eventValue = (event.currentTarget as HTMLInputElement).value;
		if (validatingFormats[type].test(eventValue)) {
			setFormatError(false);
		} else if (!validatingFormats[type].test(eventValue)) {
			setFormatError(true);
		}
	};

	return (
		<Styles>
			<div className="input__header">
				{title && (
					<Text className="title" size="subtitle">
						{title}
					</Text>
				)}
				{formatError && (
					<Text
						size="subtitle"
						color="error"
						className="input__header__format-error"
					>
						Wrong Format
					</Text>
				)}
			</div>
			<input
				type={type}
				placeholder={placeholder}
				className={formatError ? 'input--error' : ''}
				onChange={formatValidator}
			/>
		</Styles>
	);
};

export default Input;
