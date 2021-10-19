import styled from 'styled-components';
import { borderSystem, colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	.section-links {
		padding: 24px 0;
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
	@media (min-width: 768px) {
		.section-links {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-gap: 1%;
		}
	}
`;

export default Styles;
