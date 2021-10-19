import styled from 'styled-components';
import { borderSystem } from '../../global/designSystem';

const Styles = styled.div`
	.footer-company {
		text-align: center;
		margin-bottom: 40px;
		&__image > img {
			width: 100%;
			margin-bottom: 40px;
			border-radius: ${borderSystem.small};
		}
		&__text {
			max-width: 600px;
			margin: 0 auto;
			&__title {
				margin-bottom: 30px;
			}
			&__paragraph {
				margin-bottom: 30px;
			}
		}
	}
	@media screen and (min-width: 1100px) {
		.footer-company {
			display: grid;
			grid-template-columns: 1fr 540px;
			grid-template-areas: 'text image';
			&__image {
				grid-area: image;
			}
			&__text {
				text-align: start;
				margin: auto 0;
				max-width: 100%;
				margin-right: 40px;
				&__title {
					max-width: 450px;
				}
			}
		}
	}
`;

export default Styles;
