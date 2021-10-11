import styled from 'styled-components';
import React from 'react';
import Arrow from './button-arrow.svg';
import {
	colorSystem,
	fontSystem,
	heightSystem,
} from '../../../global/designSystem';

import { Text } from '../index';

const GhostButton: React.FC = ({ children }) => {
	const Container = styled.div`
		display: inline-flex;
		width: auto;
		justify-content: center;
		cursor: pointer;
		align-items: center;
		color: ${colorSystem.baseSecondaryDesaturated};
		font-size: 1.3rem;
		text-transform: uppercase;
		font-weight: ${fontSystem.fontWeightBold};
		padding: 15px 30px;
		transition: 0.3s;
		font-family: ${fontSystem.fontFamily};
		&:hover {
			color: ${colorSystem.accent};
		}
		& > p {
			margin-right: 7px;
		}
		& > img {
			height: 1.3rem;
		}
	`;
	return (
		<Container>
			<p>{children}</p>
			<img src={Arrow} alt="" />
		</Container>
	);
};

export default GhostButton;
