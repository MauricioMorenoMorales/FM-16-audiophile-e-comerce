import styled from 'styled-components';
import {
	borderSystem,
	colorSystem,
	fontSystem,
} from '../../../global/designSystem';

const InputStyles = styled.div`
	width: 100%;
	& > .input__header {
		display: flex;
		width: 100%;
		& > .title {
			display: inline;
			margin-left: 5px;
		}
		& > .input__header__format-error {
			position: relative;
			margin-left: auto;
			padding-right: 5px;
		}
	}
	& > input {
		height: 58px;
		width: 100%;
		padding-left: 24px;
		font-family: ${fontSystem.fontFamily};
		border-radius: ${borderSystem.small};
		border: 1px solid ${colorSystem.baseSecondaryDesaturated};
		&:focus {
			border: ${colorSystem.accent};
			outline: 1px solid ${colorSystem.accent};
		}
	}
	& > .input--error {
		border: 1px solid ${colorSystem.error};
		color: ${colorSystem.error};
		outline: 1px solid ${colorSystem.error};
	}
`;

export default InputStyles;
