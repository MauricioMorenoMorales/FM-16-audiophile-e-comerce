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
		position: relative;
		height: ${heightSystem.jumbo}px;
		background-color: ${colorSystem.baseSecondary};
		display: grid;
		max-width: 100vw;
		grid-template-columns: 70px 1fr 70px;
		justify-items: center;
		align-items: center;
		&__logo {
			cursor: pointer;
		}
		&__burger {
			cursor: pointer;
		}
		&__links {
			display: none;
		}
		&__cart {
			position: relative;
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
		border-radius: 0 0 ${borderSystem.small} ${borderSystem.small};
		width: 100%;
		&__item {
			background-color: ${colorSystem.basePrimaryDesaturated};
			margin-top: 45px;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: ${borderSystem.small};
			&__image {
				width: 120px;
				height: auto;
				margin-top: -35px;
			}
		}
	}
	.header-cart {
		position: absolute;
		z-index: 100;
		background-color: ${colorSystem.basePrimarySaturated};
		right: 0;
		top: 110px;
		border-radius: ${borderSystem.small};
		width: 100%;
		max-width: 310px;
		padding: 10px;
		&__header {
			display: flex;
			justify-content: space-between;
			margin-bottom: 30px;
			&__remove-button {
				background-color: transparent;
				font-size: 1.5rem;
				color: ${colorSystem.baseSecondaryDesaturated};
				cursor: pointer;
				&:hover {
					text-decoration: underline;
				}
			}
		}
		&__products {
			margin-bottom: 30px;
			&__item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10px;
				&__description {
					display: flex;
					&__image {
						width: 50px;
						height: 50px;
						border-radius: ${borderSystem.small};
						margin-right: 5px;
					}
				}
			}
		}
		&__info {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;
		}
		&__button {
			margin-bottom: 10px;
		}
	}
	.modal-background {
		position: absolute;
		width: 100%;
		height: 2000px;
		z-index: 15;
		background-color: ${colorSystem.modalBackground};
	}
	@media (min-width: 768px) {
		.header {
			&__logo {
				justify-self: start;
			}
			&__cart {
				margin-right: 30px;
			}
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
			max-width: 1300px;
			border-bottom: 1px solid ${colorSystem.baseSecondaryDesaturated};
			display: flex;
			justify-content: space-between;
			&__logo {
				margin-left: 30px;
			}
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
	}
`;

export default Styles;
