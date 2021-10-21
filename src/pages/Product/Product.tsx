import React from 'react';
import Styles from './Product.styles';
import data from '../../data.json';
import { useParams } from 'react-router';

import { Text, Counter, Button } from '../../components/atoms';

const Product = () => {
	const { productId } = useParams<{ productId: string }>();
	const product = data.find(
		element => String(element.id) === String(productId),
	);
	return (
		<Styles>
			<div className="body-container">
				<div className="product">
					<button className="product__go-back">Go Back</button>
					<article className="product__hero">
						<picture className="product__hero__image">
							<source
								media="screen and (min-width: 1100px)"
								srcSet={product?.image.desktop}
							/>
							<source
								media="screen and (min-width: 768px)"
								srcSet={product?.image.tablet}
							/>
							<img src={product?.image.mobile} alt={product?.name} />
						</picture>
						<section className="product__hero__text">
							{product?.new && (
								<Text
									size="overline"
									color="accent"
									className="product__hero__text__overline"
								>
									NEW PRODUCT
								</Text>
							)}
							<Text size="h4" className="product__hero__text__title">
								{product?.name.toUpperCase()}
							</Text>
							<Text color="baseSecondaryDesaturated">
								{product?.description}
							</Text>
							<Text size="h6">$ {product?.price}</Text>
							<div className="product__hero__text__buttons">
								<Counter />
								<Button>ADD TO CART</Button>
							</div>
						</section>
					</article>
					<article className="product__description">
						<section className="product__description__features">
							<Text size="h3">FEATURES</Text>
							<Text color="baseSecondaryDesaturated">
								{product?.description}
							</Text>
						</section>
						<section className="product__description__box">
							<Text size="h3">IN THE BOX</Text>
							<div className="product__description__box__items"></div>
							{product?.includes.map(element => (
								<div className="product__description__box__items__item">
									<Text color="accent">{element.quantity}x</Text>
									<Text color="baseSecondaryDesaturated">{element.item}</Text>
								</div>
							))}
						</section>
					</article>
				</div>
			</div>
		</Styles>
	);
};

export default Product;
