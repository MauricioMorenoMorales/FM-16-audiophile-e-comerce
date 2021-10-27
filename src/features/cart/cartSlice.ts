import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProductInCart from '../../interfaces/productInCart.interface';

const initialState: Array<IProductInCart> = [];

export const counterSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (
			state: Array<IProductInCart>,
			action: PayloadAction<IProductInCart>,
		) => {
			const { id, name, image, price, quantity } = action.payload;
			const itemIndex = state.findIndex(
				element => element.id === action.payload.id,
			);
			if (itemIndex === -1) {
				state.push({
					id,
					name,
					image,
					price,
					quantity,
				});
			} else {
				state[itemIndex] = {
					id,
					name,
					image,
					price,
					quantity,
				};
			}
		},
		remove: (state: Array<IProductInCart>, action: PayloadAction<number>) =>
			state.filter(element => element.id !== action.payload),
		reset: state => initialState,
	},
});

export const { add, remove, reset } = counterSlice.actions;
export default counterSlice.reducer;
