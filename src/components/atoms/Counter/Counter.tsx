import React, { useState } from 'react';
import Styles from './Styles';

const Counter: React.FC = () => {
	const [count, setCount] = useState<number>(1);
	return (
		<Styles>
			<button onClick={() => count >= 2 && setCount(count - 1)}>-</button>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>+</button>
		</Styles>
	);
};

export default Counter;
