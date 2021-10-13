import styled from 'styled-components';
import {
	colorSystem,
	fontSystem,
	heightSystem,
} from '../../../global/designSystem';

const Styles = styled.div`
	width: 120px;
	height: ${heightSystem.big}px;
	display: grid;
	grid-template-columns: 33% 34% 33%;
	background-color: ${colorSystem.basePrimaryDesaturated};
	& > p {
		font-family: ${fontSystem.fontFamily};
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${colorSystem.baseSecondarySaturated};
		font-weight: ${fontSystem.fontWeightBold};
	}
	& > button {
		background-color: ${colorSystem.basePrimaryDesaturated};
		font-weight: ${fontSystem.fontWeightBold};
		font-size: 1.3rem;
		color: ${colorSystem.baseSecondaryDesaturated};
		cursor: pointer;
		&:hover {
			color: ${colorSystem.accent};
		}
	}
`;
export default Styles;
