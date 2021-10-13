import styled from 'styled-components';
import {
	colorSystem,
	fontSystem,
	heightSystem,
} from '../../global/designSystem';

const Styles = styled.header`
	.header {
		height: ${heightSystem.jumbo}px;
		background-color: ${colorSystem.baseSecondary};
		display: grid;
		grid-template-columns: 70px 1fr 70px;
		justify-items: center;
		align-items: center;
		&__links {
			display: none;
		}
		&__cart {
			position: relative;
			cursor: pointer;
			&__counter {
				position: absolute;
				top: -5px;
				right: -9px;
				background-color: ${colorSystem.accent};
				height: 16px;
				width: 16px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				color: ${colorSystem.baseSecondarySaturated};
			}
		}
	}
	@media (min-width: 768px) {
		.header__logo {
			justify-self: start;
		}
	}
	@media (min-width: 1100px) {
		display: flex;
		justify-content: center;
		background-color: ${colorSystem.baseSecondary};
		.header {
			width: 100%;
			max-width: 1050px;
			border-bottom: 1px solid ${colorSystem.baseSecondaryDesaturated};
			display: flex;
			justify-content: space-between;
			&__burger {
				display: none;
			}
			&__links {
				display: flex;
				font-size: 1.3rem;
				font-weight: ${fontSystem.fontWeightBold};
				text-transform: uppercase;
				& > a {
					color: ${colorSystem.basePrimarySaturated};
					text-decoration: none;
					margin: 0 20px;
					cursor: pointer;
					transition: 0.3s;
					&:hover {
						color: ${colorSystem.accent};
					}
				}
			}
		}
	}
`;

export default Styles;
