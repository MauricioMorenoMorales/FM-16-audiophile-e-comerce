import React, { useState } from 'react';
import Styles from './Counter.styles';

//If the component doesnt change the cart then it need to be passed an state function
//If the component changes the cart then it requires the product to be passed
const Counter: React.FC<{
	changeCart?: boolean;
	stateFunction?: (count: number) => void;
}> = ({ changeCart = false, stateFunction }) => {
	const [count, setCount] = useState<number>(1);
	if (!changeCart && !stateFunction)
		console.log('The counter component needs an state function to work');
	if (changeCart) {
		return (
			<Styles>
				<button
					onClick={() => count >= 2 && setCount(count - 1)}
					data-testid="reduce"
				>
					-
				</button>
				<p data-testid="counter">{count}</p>
				<button onClick={() => setCount(count + 1)} data-testid="add">
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
							console.log(count);
							stateFunction!(count - 1);
						}
					}}
					data-testid="reduce"
				>
					-
				</button>
				<p data-testid="counter">{count}</p>
				<button
					onClick={() => {
						console.log(count);
						setCount(count + 1);
						console.log(count);
						stateFunction!(count + 1);
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
