import React from 'react';
import { render } from '@testing-library/react';
import GhostButton from './GhostButton';

test('BUtton should render prop text', () => {
	const component = render(<GhostButton>Test text</GhostButton>);
	expect(component.queryByTestId('text')?.innerHTML).toBe('Test text');
});
