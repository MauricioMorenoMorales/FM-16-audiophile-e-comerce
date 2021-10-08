import styled from 'styled-components';

const fontSize = {
	h1: '5.6rem',
	h2: '4rem',
	h3: '3.2rem',
	h4: '2.8rem',
	h5: '2.4rem',
	h6: '1.8rem',
	overline: '1.4rem',
	subTitle: '1.3rem',
};

interface fontProps {
	size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'overline' | 'subTitle';
}

const Typography = styled.p<fontProps>`
	font-size: ${({ size }) => fontSize[size]};
`;

export default Typography;
