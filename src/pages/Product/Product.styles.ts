import styled from 'styled-components';
import { colorSystem, fontSystem } from '../../global/designSystem';

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
		}
	}
`;

export default Styles;
