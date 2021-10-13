import React from 'react';

import { Text } from '../';
import Styles from './Radio.styles';

export interface RadioProps {
	active: boolean;
	label: string;
}

// TODO
const Radio: React.FC<RadioProps> = ({ active, label }) => {
	return (
		<Styles className={`${active && 'active'}`}>
			<div className="radio">
				{active && <div className="inner-radio" data-testid="inner-radio"></div>}
			</div>
			<Text size="subtitle" data-testid="label">{label}</Text>
		</Styles>
	);
};

export default Radio;
