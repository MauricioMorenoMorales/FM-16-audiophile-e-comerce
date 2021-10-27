import React, { useState } from 'react';
import Styles from './Counter.styles';
import Product from '../../../interfaces/productInCart.interface';

import { useDispatch } from 'react-redux';
import { add } from '../../../features/cart/cartSlice';

//! Read if there is an error on this component
//If the component doesnt change the cart then it need to be passed an state function
//If the component changes the cart then it requires the product to be passed
const Counter: React.FC<{
	stateFunction?: (count: number) => void;
	product?: Product;
}> = ({ stateFunction, product }) => {
	const [count, setCount] = useState<number>(1);
	const dispatch = useDispatch();
	if (product) {
		return (
			<Styles>
				<button
					onClick={() => {
						if (product.quantity >= 2) {
							const rest = product.quantity - 1;
							dispatch(add({ ...product, quantity: rest }));
						}
					}}
					data-testid="reduce"
				>
					-
				</button>
				<p data-testid="counter">{product.quantity}</p>
				<button
					onClick={() => {
						const sum = product.quantity + 1;
						dispatch(add({ ...product, quantity: sum }));
					}}
					data-testid="add"
				>
					+
				</button>
			</Styles>
		);
	} else {
		return (
			<Styles>
				<button
					onClick={() => {
						if (count >= 2) {
							setCount(count - 1);
							stateFunction && stateFunction(count - 1);
						}
					}}
					data-testid="reduce"
				>
					-
				</button>
				<p data-testid="counter">{count}</p>
				<button
					onClick={() => {
						setCount(count + 1);
						stateFunction && stateFunction(count + 1);
					}}
					data-testid="add"
				>
					+
				</button>
			</Styles>
		);
	}
};

export default Counter;
