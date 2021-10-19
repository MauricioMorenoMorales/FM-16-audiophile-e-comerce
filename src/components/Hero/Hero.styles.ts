import styled from 'styled-components';
import { colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	.hero {
		position: relative;
		&__image > img {
			position: absolute;
			width: 100%;
			height: 500px;
			object-fit: cover;
		}
		&__text {
			height: 500px;
			position: relative;
			text-align: center;
			z-index: 10;
			display: flex;
			flex-direction: column;
			align-items: center;
			&__label {
				margin-top: 100px;
			}
			&__title {
				margin: 0 auto;
				margin-top: 16px;
				font-size: 3.6rem;
				max-width: 400px;
			}
			&__paragraph {
				margin: 0 auto;
				margin-top: 24px;
				max-width: 400px;
			}
			& > button {
				margin-top: 28px;
			}
		}
	}
	@media screen and (min-width: 768px) {
		.hero {
			&__image > img {
				height: 750px;
			}
			&__text {
				height: 750px;
				&__label {
					margin-top: 200px;
				}
				&__title {
					font-size: 5.6rem;
				}
			}
		}
	}
	@media screen and (min-width: 1100px) {
		background-color: #191919;
		.hero {
			position: static;
			max-width: 1300px;
			margin: 0 auto;
			height: 633px;
			background-color: #191919;
			display: grid;
			grid-template-columns: 450px 1fr;
			grid-template-areas: 'text image';
			&__image > img {
				height: 633px;
				object-fit: contain;
				object-position: 200px -50px;
				position: relative;
				grid-area: image;
				margin-right: -100px;
			}
			&__text {
				position: static;
				grid-area: text;
				text-align: start;
				align-items: flex-start;
				&__label {
					margin-top: 120px;
					margin-left: 25px;
				}
				& > button {
					margin-left: 25px;
				}
			}
		}
	}
`;

export default Styles;
