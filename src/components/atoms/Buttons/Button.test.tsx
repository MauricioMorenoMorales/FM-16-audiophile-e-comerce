import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('Primary button should show the correct text', () => {
	const component = render(<Button kind="primary">Test</Button>);
	expect(component.queryByRole('button', { name: 'Test' })).toBeTruthy();
});

test('Secondary button should show the correct text', () => {
	const component = render(<Button kind="secondary">Test</Button>);
	expect(component.queryByRole('button', { name: 'Test' })).toBeTruthy();
});
