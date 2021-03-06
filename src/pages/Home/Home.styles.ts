import styled from 'styled-components';
import { borderSystem, colorSystem } from '../../global/designSystem';
import circlesBackground from '../../assets/home/desktop/pattern-circles.svg';
import SpeakerBackgroundMobile from '../../assets/home/mobile/image-speaker-zx7.jpg';
import SpeakerBackgroundTablet from '../../assets/home/tablet/image-speaker-zx7.jpg';
import SpeakerBackgroundDesktop from '../../assets/home/desktop/image-speaker-zx7.jpg';

const Styles = styled.div`
	.home__section-links {
		margin-top: 120px;
	}
	.home__products {
		margin: 120px 0;
		&__first-item {
			background-color: ${colorSystem.accent};
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 24px;
			justify-content: center;
			background-image: url(${circlesBackground});
			background-repeat: no-repeat;
			background-size: 100% auto;
			border-radius: ${borderSystem.small};
			height: 600px;
			&__image {
				width: 100%;
				display: flex;
				justify-content: center;
				margin-top: 55px;
				& > img {
					width: 50%;
					max-width: 190px;
				}
			}
			&__text {
				&__title {
					margin-top: 32px;
				}
				&__paragraph {
					margin-top: 32px;
				}
				& > button {
					margin-top: 32px;
					margin-bottom: 55px;
				}
			}
		}
		&__second-item {
			background-image: url(${SpeakerBackgroundMobile});
			margin-top: 24px;
			border-radius: ${borderSystem.small};
			background-size: 100% 100%;
			background-position: right;
			background-repeat: no-repeat;
			height: 320px;
			display: flex;
			align-items: center;
			background-color: #ddd;
			&__text {
				margin-left: 24px;
				& > button {
					margin-top: 24px;
				}
			}
		}
		&__third-item {
			&--image {
				border-radius: ${borderSystem.small};
				overflow: hidden;
				margin-top: 24px;
			}
			&--description {
				margin-top: 24px;
				height: 200px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				padding-left: 24px;
				background-color: #f1f1f1;
				border-radius: ${borderSystem.small};
				margin-bottom: 24px;
				& > button {
					margin-top: 24px;
				}
			}
		}
	}
	@media screen and (min-width: 768px) {
		.home__products {
			display: grid;
			grid-template-columns: 50% 50%;
			grid-template-areas:
				'first first'
				'second second'
				'third-image third';
			&__first-item {
				grid-area: first;
				background-position-y: -230px;
			}
			&__second-item {
				grid-area: second;
				background-image: url(${SpeakerBackgroundTablet});
				background-size: 100% auto;
				&__text {
					margin-left: 60px;
				}
			}
			&__third-item {
				&--image {
					grid-area: third-image;
					height: 320px;
					margin-right: 12px;
				}
				&--description {
					height: 320px;
					margin-left: 12px;
					padding-left: 60px;
				}
			}
		}
	}
	@media screen and (min-width: 1100px) {
		.home__products {
			&__first-item {
				display: grid;
				grid-template-columns: 1fr 450px;
				overflow: hidden;
				text-align: start;
				background-position-x: -220px;
				&__image > img {
					width: 400px;
					max-width: 400px;
					margin-top: 100px;
				}
				&__text {
					&__title {
						max-width: 300px;
					}
					&__paragraph {
						max-width: 350px;
					}
				}
			}
			&__second-item {
				background-image: url(${SpeakerBackgroundDesktop});
			}
			&__third-item {
				&--image__image > img {
					width: 100%;
					height: 320px;
				}
			}
		}
	}
`;

export default Styles;
