interface FixedLengthArray<T extends any, L extends number> extends Array<T> {
	0: T;
	length: L;
}

interface IProduct {
	id: number;
	slug: string;
	name: string;
	image: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
	category: 'headphones' | 'earphones' | 'speakers';
	categoryImage: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
	new: boolean;
	price: number;
	description: string;
	features: string;
	includes: [{ quantity: number; item: string }];
	gallery: {
		first: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
		second: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
		third: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
	};
	others: FixedLengthArray<
		{
			slug: string;
			name: string;
			image: {
				mobile: string;
				tablet: string;
				desktop: string;
			};
		},
		3
	>;
}

export default IProduct;
