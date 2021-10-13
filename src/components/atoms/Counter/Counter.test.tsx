import React from 'react';
import Counter from './Counter';

import { render, fireEvent } from '@testing-library/react';

test('The value should start with 1', () => {
	const component = render(<Counter />);
	const counterValue = component.getByTestId('counter')?.innerHTML;
	expect(counterValue).toBe('1');
});

test('The add button should add', () => {
	const component = render(<Counter />);
	const addButton = component.getByTestId('add');
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	const counterValue = component.getByTestId('counter')?.innerHTML;
	expect(counterValue).toBe('5');
});

test('The reduce button should reduce the value', () => {
	const component = render(<Counter />);
	const addButton = component.getByTestId('add');
	const reduceButton = component.getByTestId('reduce');
	// adds 7
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	// reduces 5
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	const counterValue = component.getByTestId('counter')?.innerHTML;
	expect(counterValue).toBe('3');
});

test('The reduce button should not reduce bellow 1', () => {
	const component = render(<Counter />);
	const addButton = component.getByTestId('add');
	const reduceButton = component.getByTestId('reduce');
	// adds 7
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	// reduces 10
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	fireEvent.click(reduceButton);
	const counterValue = component.getByTestId('counter')?.innerHTML;
	expect(counterValue).toBe('1');
});
