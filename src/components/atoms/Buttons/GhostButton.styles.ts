import styled from 'styled-components';
import { colorSystem, fontSystem } from '../../../global/designSystem';

const Styles = styled.div`
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

export default Styles;
