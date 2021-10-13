import React, { useState } from 'react';
import Styles from './Counter.styles';

const Counter: React.FC = () => {
	const [count, setCount] = useState<number>(1);
	return (
		<Styles>
			<button onClick={() => count >= 2 && setCount(count - 1)} data-testid="reduce">-</button>
			<p data-testid="counter">{count}</p>
			<button onClick={() => setCount(count + 1)} data-testid="add">+</button>
		</Styles>
	);
};

export default Counter;
