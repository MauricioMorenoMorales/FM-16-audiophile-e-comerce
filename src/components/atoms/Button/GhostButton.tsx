import React from 'react';

const GhostButton: React.FC = ({ children }) => {
	return (
		<button>
			{children} <img src="./button-arrow.svg" />
		</button>
	);
};

export default GhostButton;
