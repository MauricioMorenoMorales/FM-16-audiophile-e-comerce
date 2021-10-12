import { render } from '@testing-library/react';
import Text from './Text';

test('The text component should render its text', () => {
	const component = render(<Text>This is a text ßðđŋŧ</Text>);
	expect(component.queryByText('This is a text ßðđŋŧ')).toBeTruthy();
});

test('The text component should render its text in its variants', () => {
	const component = render(<Text size="h4">This is a text ßðđŋŧ</Text>);
	expect(component.queryByText('This is a text ßðđŋŧ')).toBeTruthy();
});
