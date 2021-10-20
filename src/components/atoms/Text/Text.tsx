import styled from 'styled-components';
import { colorSystem, fontSystem } from '../../../global/designSystem';

export interface textProps {
	size?:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'overline'
		| 'subtitle'
		| 'p';
	color?: keyof typeof colorSystem;
}

const fontSize = {
	h1: '5.6rem',
	h2: '4rem',
	h3: '3.2rem',
	h4: '2.8rem',
	h5: '2.4rem',
	h6: '1.8rem',
	overline: '1.4rem',
	subtitle: '1.3rem',
	p: '1.5rem',
};

// 700 = bold, 400 = regular
const fontWeight = {
	h1: '700',
	h2: '700',
	h3: '700',
	h4: '700',
	h5: '700',
	h6: '700',
	overline: '400',
	subtitle: '700',
	p: '500',
};
const lineHeight = {
	h1: '58px',
	h2: '44px',
	h3: '36px',
	h4: '38px',
	h5: '33px',
	h6: '24px',
	overline: '19px',
	subtitle: '25px',
	p: '25px',
};
const letterSpacing = {
	h1: '2px',
	h2: '1.5px',
	h3: '1.15px',
	h4: '2px',
	h5: '1.7px',
	h6: '1.3px',
	overline: '10px',
	subtitle: '1px',
	p: '1px',
};

const Text = styled.p<textProps>`
	font-size: ${props => fontSize[props.size || 'p']};
	font-weight: ${props => fontWeight[props.size || 'p']};
	line-height: ${props => lineHeight[props.size || 'p']};
	letter-spacing: ${props => letterSpacing[props.size || 'p']};
	color: ${props => colorSystem[props.color || 'baseSecondarySaturated']};
	font-family: ${fontSystem.fontFamily};
	@media screen and (max-width: 768px) {
		font-size: ${props =>
			props.size === 'h1' ? '3.6rem' : fontSize[props.size || 'p']};
	}
`;

export default Text;
