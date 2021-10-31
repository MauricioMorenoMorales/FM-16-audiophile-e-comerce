import styled from 'styled-components';
import {
	borderSystem,
	colorSystem,
	fontSystem,
} from '../../global/designSystem';

const Styles = styled.div`
	position: relative;
	.go-back {
		margin-top: 20px;
		font-size: 1.5rem;
		background-color: transparent;
		font-weight: ${fontSystem.fontWeightBold};
		color: ${colorSystem.baseSecondaryDesaturated};
	}
	.checkout {
		&__form {
			margin-top: 40px;
			&__billing {
				margin-top: 30px;
				& > * {
					margin-top: 20px;
				}
			}
			&__shipping {
				margin-top: 40px;
				& > * {
					margin-top: 20px;
				}
			}
			&__payment {
				margin-top: 40px;
				& > * {
					margin-top: 20px;
				}
			}
		}
		&__summary {
			margin-top: 40px;
			& > p {
				margin-bottom: 20px;
			}
			&__products {
				margin-top: 20px;
				&__item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 10px;
					&__description {
						display: flex;
						align-items: center;
						&__image {
							height: 64px;
							width: 64px;
							border-radius: ${borderSystem.small};
							margin-right: 8px;
						}
						&__text > p {
							font-weight: ${fontSystem.fontWeightBold};
						}
					}
				}
			}
			&__cart-data {
				margin-top: 30px;
				&__item {
					display: flex;
					justify-content: space-between;
					& > p {
						font-weight: ${fontSystem.fontWeightBold};
						margin-bottom: 10px;
					}
				}
			}
		}
	}
	.purchase-modal {
		position: absolute;
		z-index: 1001;
		top: 100px;
		background-color: ${colorSystem.basePrimarySaturated};
		max-width: 330px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		border-radius: ${borderSystem.small};
		padding: 20px;
		&__title {
			max-width: 260px;
		}
		& > * {
			margin-top: 20px;
		}
		&--background {
			position: absolute;
			z-index: 100;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: ${colorSystem.modalBackground};
		}
		&__products {
			background-color: ${colorSystem.basePrimaryDesaturated};
			border-radius: ${borderSystem.small};
			overflow: hidden;
			&__cart {
				padding: 10px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				&__item {
					display: flex;
					align-items: center;
					justify-content: space-between;
					&__quantity {
						font-weight: ${fontSystem.fontWeightBold};
					}
					&__description {
						display: flex;
						align-items: center;
						&__text {
							&__title {
								font-weight: ${fontSystem.fontWeightBold};
							}
						}
						& > img {
							height: 60px;
							width: 60px;
							margin-right: 10px;
						}
					}
				}
				&__total-items {
					padding-top: 8px;
					text-align: center;
					border-top: 1px solid ${colorSystem.baseSecondaryDesaturated};
					margin-top: 20px;
				}
			}
			&__total {
				background-color: ${colorSystem.baseSecondary};
				padding: 20px;
				& > * {
					margin-bottom: 10px;
				}
			}
		}
	}
	@media screen and (min-width: 768px) {
		.checkout {
			&__form {
				&__billing {
					display: grid;
					grid-template-rows: 50% 50%;
					grid-template-rows: 30px auto;
					gap: 20px;
					grid-template-areas:
						'title title'
						'first second'
						'third .';
					& > * {
						margin: 0;
					}
					&__title {
						grid-area: title;
					}
				}
				&__shipping {
					display: grid;
					grid-template-rows: 50% 50%;
					grid-template-rows: 30px auto;
					gap: 20px;
					grid-template-areas:
						'title title'
						'first second'
						'third .';
					& > * {
						margin: 0;
					}
					&__title {
						grid-area: title;
					}
				}
				&__payment {
					display: grid;
					grid-template-rows: 50% 50%;
					grid-template-rows: 30px auto;
					gap: 20px;
					grid-template-areas:
						'title title'
						'method first'
						'method second'
						'third third';
					& > * {
						margin: 0;
					}
					&__title {
						grid-area: title;
					}
					&__method {
						grid-area: method;
						font-weight: ${fontSystem.fontWeightBold};
						&__description {
							grid-area: third;
						}
					}
				}
			}
		}
		.purchase-modal {
			max-width: 540px;
			&__products {
				display: grid;
				grid-template-columns: 60% 40%;
				overflow: hidden;
				&__total {
					border: 0;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
			}
		}
	}
	@media screen and (min-width: 1100px) {
		background-color: ${colorSystem.basePrimaryDesaturated};
		.checkout {
			display: grid;
			grid-template-columns: 1fr 350px;
			gap: 30px;
			margin-bottom: 100px;
			&__form {
				background-color: ${colorSystem.basePrimarySaturated};
				padding: 20px;
				border-radius: ${borderSystem.small};
			}
			&__summary {
				background-color: ${colorSystem.basePrimarySaturated};
				padding: 20px;
				border-radius: ${borderSystem.small};
				height: fit-content;
			}
		}
	}
`;

export default Styles;
