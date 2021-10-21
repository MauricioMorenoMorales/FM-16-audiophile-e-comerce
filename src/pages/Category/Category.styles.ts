import styled from 'styled-components';
import { borderSystem, colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	.category {
		&__header {
			height: 240px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: ${colorSystem.baseSecondary};
		}
		&__products {
			margin-top: 70px;
			&__product {
				margin-bottom: 100px;
				&__image {
					border-radius: ${borderSystem.small};
					overflow: hidden;
				}
				&__text {
					text-align: center;
					&__new {
						margin-top: 30px;
					}
					&__title {
						margin: 0 auto;
						margin-top: 30px;
						max-width: 350px;
					}
					&__paragraph {
						margin: 0 auto;
						margin-top: 30px;
						max-width: 600px;
					}
					& > button {
						margin-top: 30px;
					}
				}
			}
		}
	}
	@media screen and (min-width: 1100px) {
		.category {
			&__products {
				&__product {
					display: grid;
					grid-template-columns: 50% 50%;
					grid-template-areas: 'image text';
					&.even {
						grid-template-areas: 'text image';
					}
					&__image {
						grid-area: image;
					}
					&__text {
						text-align: start;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: flex-start;
						margin: 0;
						margin-left: 100px;
						&.even {
							margin: 0;
							margin-right: 100px;
						}
						&__title {
							margin: 0;
							margin-top: 30px;
						}
					}
				}
			}
		}
	}
`;
export default Styles;
