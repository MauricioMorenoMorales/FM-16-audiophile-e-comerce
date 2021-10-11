import styled from 'styled-components';
import { colorSystem, fontSystem } from '../../../global/designSystem';

interface ButtonProps {
	kind?: 'primary' | 'secondary';
	fullWidth?: boolean;
}

const background = {
	primary: colorSystem.accent,
	secondary: colorSystem.basePrimarySaturated,
};
const backgroundHover = {
	primary: colorSystem.accentDesaturated,
	secondary: colorSystem.baseSecondarySaturated,
};
const textColor = {
	primary: colorSystem.basePrimarySaturated,
	secondary: colorSystem.baseSecondarySaturated,
};
const textColorHover = {
	primary: colorSystem.basePrimarySaturated,
	secondary: colorSystem.basePrimarySaturated,
};
const border = {
	primary: colorSystem.accentDesaturated,
	secondary: colorSystem.baseSecondarySaturated,
};

const Button = styled.button<ButtonProps>`
	width: ${({ fullWidth }) => fullWidth && '100%'};
	display: ${({ fullWidth }) => (fullWidth ? 'block' : 'inline')};
	background-color: ${props => background[props.kind || 'primary']};
	color: ${({ kind }) => textColor[kind || 'primary']};
	border: 1px solid ${({ kind }) => border[kind || 'primary']};
	height: 48px;
	padding: 15px 30px;
	font-size: 1.3rem;
	font-weight: ${fontSystem.fontWeightBold};
	text-transform: uppercase;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: ${({ kind }) => backgroundHover[kind || 'primary']};
		color: ${({ kind }) => textColorHover[kind || 'primary']};
	}
`;
export default Button;
