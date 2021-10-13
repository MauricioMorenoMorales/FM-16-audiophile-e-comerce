import { render } from '@testing-library/react';
import Radio from './Radio';

test('Active state shows correctly', () => {
	const component = render(<Radio active={true} label="Label" />);
	expect(component.queryByTestId('inner-radio')).toBeTruthy();
});

test('Disabled state shows correctly', () => {
	const component = render(<Radio active={false} label="Label" />);
	expect(component.queryByTestId('inner-radio')).toBeFalsy();
});

test('Label renders correctly', () => {
	const component = render(<Radio active={false} label="Label test" />);
	expect(component.queryByTestId('label')?.innerHTML).toBe('Label test');
});
