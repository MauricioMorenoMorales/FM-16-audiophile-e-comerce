import styled from 'styled-components';
import {
	borderSystem,
	colorSystem,
	heightSystem,
	spacingSystem,
} from '../../../global/designSystem';

const Styles = styled.div`
	display: flex;
	border: 1px solid ${colorSystem.baseSecondaryDesaturated};
	border-radius: ${borderSystem.small};
	height: ${heightSystem.extraBig}px;
	display: flex;
	align-items: center;
	padding-left: ${spacingSystem.medium}px;
	cursor: pointer;
	&:hover {
		border: 1px solid ${colorSystem.accent};
	}
	&.active {
		border: 1px solid ${colorSystem.accent};
	}
	& > .radio {
		height: 20px;
		width: 20px;
		border: 1px solid ${colorSystem.baseSecondaryDesaturated};
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 10px;
		& > .inner-radio {
			height: 10px;
			width: 10px;
			background-color: ${colorSystem.accent};
			border-radius: 50%;
		}
	}
`;

export default Styles;
