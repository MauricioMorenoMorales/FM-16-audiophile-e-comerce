import styled from 'styled-components';
import { colorSystem, fontSystem } from '../../global/designSystem';

const Styles = styled.footer`
	text-align: center;
	background-color: ${colorSystem.baseSecondary};
	.footer-line {
		width: 100px;
		height: 4px;
		background-color: ${colorSystem.accent};
		margin: 0 auto 40px auto;
	}
	.footer {
		padding: 0 30px;
		padding-bottom: 48px;
		&__logo {
			margin-bottom: 48px;
		}
		&__links {
			display: flex;
			flex-direction: column;
			margin-bottom: 30px;
			&__item {
				text-decoration: none;
				color: ${colorSystem.basePrimarySaturated};
				font-weight: ${fontSystem.fontWeightBold};
				text-transform: uppercase;
				cursor: pointer;
				margin-bottom: 16px;
				font-size: 1.3rem;
				&:hover {
					color: ${colorSystem.accent};
				}
			}
		}
		&__description {
			margin-bottom: 48px;
		}
		&__copyright {
			margin-bottom: 48px;
		}
		&__social {
			margin: 0 auto;
			display: flex;
			width: 104px;
			justify-content: space-between;
		}
	}
	@media screen and (min-width: 768px) {
		text-align: start;
		.footer-line {
			margin: 0;
			margin-bottom: 40px;
			margin-left: 30px;
		}
	}
`;

export default Styles;
