import styled from 'styled-components';
import { colorSystem, fontSystem } from '../../global/designSystem';

const Styles = styled.footer`
	text-align: center;
	background-color: ${colorSystem.baseSecondary};
	.footer-line {
		width: 100px;
		height: 4px;
		background-color: ${colorSystem.accent};
		margin: 0 auto 40px auto;
	}
	.footer {
		padding: 0 30px;
		padding-bottom: 48px;
		&__logo {
			margin-bottom: 48px;
		}
		&__links {
			display: flex;
			flex-direction: column;
			margin-bottom: 30px;
			&__item {
				text-decoration: none;
				color: ${colorSystem.basePrimarySaturated};
				font-weight: ${fontSystem.fontWeightBold};
				text-transform: uppercase;
				cursor: pointer;
				margin-bottom: 16px;
				font-size: 1.3rem;
				&:hover {
					color: ${colorSystem.accent};
				}
			}
		}
		&__description {
			margin-bottom: 48px;
		}
		&__copyright {
			margin-bottom: 48px;
		}
		&__social {
			margin: 0 auto;
			display: flex;
			width: 104px;
			justify-content: space-between;
		}
	}
	@media screen and (min-width: 768px) {
		text-align: start;
		.footer-line {
			margin: 0;
			margin-bottom: 40px;
			margin-left: 30px;
		}
		.footer {
			display: grid;
			grid-template-columns: 50% 50%;
			grid-template-areas:
				'logo logo'
				'links links'
				'description description'
				'copyright social';
			&__logo {
				grid-area: logo;
			}
			&__links {
				grid-area: links;
				flex-direction: row;
				&__item {
					margin-right: 34px;
				}
			}
			&__description {
				grid-area: description;
			}
			&__copyright {
				grid-area: copyright;
			}
			&__social {
				grid-area: social;
				margin: 0;
				margin-left: auto;
			}
		}
		@media screen and (min-width: 1100px) {
			.footer {
				grid-template-areas: 'logo links' 'description social' 'copyright copyright';
				max-width: 1300px;
				margin: 0 auto;
				&-line {
					margin-left: calc(50% - 620px);
				}
				&__links {
					margin: 0;
					margin-left: auto;
					&__item {
						margin: 0;
						margin-left: 34px;
					}
				}
			}
		}
	}
`;

export default Styles;
