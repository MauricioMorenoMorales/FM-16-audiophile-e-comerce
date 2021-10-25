import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProductInCart from '../../interfaces/productInCart.interface';

const initialState: Array<IProductInCart> = [];

export const counterSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state: any, action: PayloadAction<IProductInCart>) => {
			const { id, name, image, price, quantity } = action.payload;
			const itemIndex = state.findIndex(
				(element: IProductInCart) => element.id === action.payload.id,
			);
			if (itemIndex === -1) {
				state = state.push({
					id,
					name,
					image,
					price,
					quantity,
				});
			} else {
			}
		},
	},
});

export const { add } = counterSlice.actions;
export default counterSlice.reducer;
