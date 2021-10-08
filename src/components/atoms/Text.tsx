import styled from 'styled-components';

interface fontProps {
	size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'overline' | 'subtitle' | 'p';
	color?: 'light' | 'dark' | 'accent';
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

const Text = styled.p<fontProps>`
	font-size: ${props => fontSize[props.size]};
	font-weight: ${props => fontWeight[props.size]};
	line-height: ${props => lineHeight[props.size]};
	letter-spacing: ${props => letterSpacing[props.size]};
`;

export default Text;
