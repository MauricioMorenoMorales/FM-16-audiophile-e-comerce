import React from 'react';
import Arrow from './button-arrow.svg';
import Styles from './GhostButton.styles';

const GhostButton: React.FC = ({ children }) => {
	return (
		<Styles>
			<p data-testid="text">{children}</p>
			<img src={Arrow} alt="" />
		</Styles>
	);
};

export default GhostButton;
