import styled from 'styled-components';
import {
	borderSystem,
	colorSystem,
	fontSystem,
} from '../../global/designSystem';

const Styles = styled.div`
	.product {
		&__go-back {
			margin-top: 20px;
			font-size: 1.5rem;
			background-color: transparent;
			color: ${colorSystem.baseSecondaryDesaturated};
			cursor: pointer;
			font-weight: ${fontSystem.fontWeightBold};
			&:hover {
				text-decoration: underline;
			}
		}
		&__hero {
			margin-top: 20px;
			&__text {
				& > * {
					margin-top: 20px;
				}
				&__title {
					max-width: 400px;
				}
				&__buttons {
					display: flex;
					& > button {
						margin-left: 20px;
					}
				}
			}
		}
		&__description {
			margin-top: 100px;
			&__features > * {
				margin-top: 20px;
			}
			&__box {
				margin-top: 80px;
				&__title {
					margin-top: 20px;
				}
				&__items {
					margin-top: 20px;
					&__item {
						margin-top: 10px;
						display: flex;
						&__quantity {
							margin-right: 10px;
						}
					}
				}
			}
		}
		&__gallery {
			margin-top: 80px;
			& > * > img {
				margin-top: 20px;
				border-radius: ${borderSystem.small};
				overflow: hidden;
			}
		}
		&__others {
			margin-top: 100px;
			text-align: center;
			&__product {
				margin-top: 40px;
				text-align: center;
				& > * {
					margin-top: 20px;
				}
				&__image > img {
					border-radius: ${borderSystem.small};
				}
			}
		}
	}
	@media screen and (min-width: 768px) {
		.product {
			&__hero {
				display: grid;
				grid-template-columns: 280px 1fr;
				&__text {
					margin-left: 60px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					&__overline {
						margin-top: 0;
					}
				}
			}
			&__description {
				&__box {
					display: flex;
					&__title {
						margin-right: 250px;
					}
					&__items {
						margin-top: 10px;
					}
				}
			}
			&__gallery {
				display: grid;
				grid-template-columns: 40% 60%;
				gap: 15px;
				grid-template-areas:
					'first third'
					'second third';
				& > * > img {
					margin: 0;
					width: 100%;
					height: 100%;
				}
				&__first {
					grid-area: first;
				}
				&__second {
					grid-area: second;
				}
				&__third {
					grid-area: third;
				}
			}
			&__others {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				grid-template-rows: 30px 1fr;
				gap: 12px;
				grid-template-areas:
					'title title title'
					'first second third';
				&__title {
					grid-area: title;
				}
			}
		}
	}
	@media screen and (min-width: 1100px) {
		.product {
			&__hero {
				grid-template-columns: 560px 1fr;
				&__text {
					margin-left: 100px;
				}
			}
			&__description {
				display: grid;
				grid-template-columns: 1fr 1fr;
				&__box {
					flex-direction: column;
					margin-left: 100px;
					margin-top: 20px;
				}
			}
			&__others {
				gap: 30px;
			}
		}
	}
`;

export default Styles;
