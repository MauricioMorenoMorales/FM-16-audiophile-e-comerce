import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

test('Title renders with correct text', () => {
	const component = render(<Input title="testTitle" />);
	const title = component.getByTestId('title');
	expect(title.textContent).toBe('testTitle');
});

test('Placeholder renders with correct text', () => {
	const component = render(<Input placeholder="Test placeholder" />);
	const input = component.getByPlaceholderText('Test placeholder');
	expect(input).toBeTruthy();
});

test('Component should be the correct type', () => {
	const component = render(<Input type="password" />);
	const textArea = component.getByTestId('input');
	expect(textArea.getAttribute('type')).toBe('password');
});

test('Title doesnt render when there is no props', () => {
	const component = render(<Input type="password" />);
	const title = component.queryByTestId('title');
	expect(title).toBeNull();
});

test('false email should emit error', () => {
	const component = render(<Input type="email" />);
	const textArea = component.getByTestId('input');
	fireEvent.change(textArea, { target: { value: 'this is not an email' } });
	const errorMessage = component.queryByTestId('error-message');
	expect(errorMessage).toBeTruthy();
});

test('Correct Email should prevent error', () => {
	const component = render(<Input type="email" />);
	const textArea = component.getByTestId('input');
	fireEvent.change(textArea, { target: { value: 'example@gmail.com' } });
	const errorMessage = component.queryByTestId('error-message');
	expect(errorMessage).toBeFalsy();
});

test('Input type text should emit error when special characters are used', () => {
	const component = render(<Input type="text" />);
	const textArea = component.getByTestId('input');
	fireEvent.change(textArea, { target: { value: 'should avoid using *?!@' } });
	const errorMessage = component.queryByTestId('error-message');
	expect(errorMessage).toBeTruthy();
});

test('Correct text should have no error message', () => {
	const component = render(<Input type="text" />);
	const textArea = component.getByTestId('input');
	fireEvent.change(textArea, { target: { value: 'This is a normal message' } });
	const errorMessage = component.queryByTestId('error-message');
	expect(errorMessage).toBeFalsy();
});

test('Password sould never have format error message', () => {
	const component = render(<Input type="password" />);
	const textArea = component.getByTestId('input');
	fireEvent.change(textArea, {
		target: { value: 'Test@|@~½đŋøßðđ  æßð 这是中文 || ' },
	});
	const errorMessage = component.queryByTestId('error-message');
	expect(errorMessage).toBeFalsy();
});

test('Change email format should add and remove error message', () => {
	const component = render(<Input type="email" />);
	const textArea = component.getByTestId('input');
	fireEvent.change(textArea, {
		target: { value: 'incorrect@mail' },
	});
	let errorMessage = component.queryByTestId('error-message');
	expect(errorMessage).toBeTruthy();
	fireEvent.change(textArea, {
		target: { value: 'example@gmail.com' },
	});
	errorMessage = component.queryByTestId('error-message');
	expect(errorMessage).toBeFalsy();
});
