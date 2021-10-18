import styled from 'styled-components';
import {
	borderSystem,
	colorSystem,
	fontSystem,
	heightSystem,
} from '../../global/designSystem';

const Styles = styled.header`
	position: relative;
	.header {
		height: ${heightSystem.jumbo}px;
		background-color: ${colorSystem.baseSecondary};
		display: grid;
		grid-template-columns: 70px 1fr 70px;
		justify-items: center;
		align-items: center;
		&__burger {
			cursor: pointer;
		}
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
	.header-menu {
		padding: 24px;
		position: absolute;
		z-index: 100;
		background-color: ${colorSystem.basePrimarySaturated};
		border-radius: 0 0 ${borderSystem.small}px ${borderSystem.small}px;
		width: 100%;
		&__item {
			background-color: ${colorSystem.basePrimaryDesaturated};
			margin-top: 45px;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: ${borderSystem.small}px;
			&__image {
				width: 120px;
				height: auto;
				margin-top: -35px;
			}
		}
	}
	.modal-background {
		position: absolute;
		width: 100%;
		height: 2000px;
		background-color: ${colorSystem.modalBackground};
	}
	@media (min-width: 768px) {
		.header__logo {
			justify-self: start;
		}
		.header-menu {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 1%;
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
		.header-menu {
			display: none;
		}
		.modal-background {
			display: none;
		}
	}
`;

export default Styles;
