import React, { useEffect, useState } from 'react';
import Styles from './Product.styles';
import data from '../../data.json';
import { useHistory, useParams, useLocation } from 'react-router';

import { useDispatch } from 'react-redux';
import { add } from '../../features/cart/cartSlice';

import { Text, Counter, Button } from '../../components/atoms';
import { FooterCompanyDescription, SectionLinks } from '../../components';

const NewLine: React.FC<{ text: string | undefined }> = ({ text }) => (
	<>
		{text!.split('\n').map((text, index) => (
			<Text key={index} color="baseSecondaryDesaturated">
				{text}
			</Text>
		))}
	</>
);

const Product = () => {
	const [quantity, setQuantity] = useState<number>(1);
	const { productSlug } = useParams<{ productSlug: string }>();
	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();
	const product = data.find(
		element => String(element.slug) === String(productSlug),
	);
	const changeQuantity = (count: number) => {
		setQuantity(count);
	};
	// Resets the counter when another product is rendered
	useEffect(() => {
		setQuantity(1);
	}, [location]);
	if (!product) history.push('/');
	return (
		<Styles>
			<div className="body-container">
				<div className="product">
					<button
						className="product__go-back"
						onClick={() => history.push(`/category/${product?.category}`)}
					>
						Go Back
					</button>
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
							<Text size="h6">$ {product!.price * quantity}</Text>
							<div className="product__hero__text__buttons">
								<Counter
									stateFunction={changeQuantity}
								/>
								<Button
									onClick={() =>
										dispatch(
											add({
												id: product!.id,
												image: product!.categoryImage.mobile,
												name: product!.name,
												price: product!.price,
												quantity: quantity,
											}),
										)
									}
								>
									ADD TO CART
								</Button>
							</div>
						</section>
					</article>
					<article className="product__description">
						<section className="product__description__features">
							<Text className="product__description__features__title" size="h3">
								FEATURES
							</Text>
							<NewLine text={product?.features} />
						</section>
						<section className="product__description__box">
							<Text className="product__description__box__title" size="h3">
								IN THE BOX
							</Text>
							<div className="product__description__box__items">
								{product?.includes.map((element, index) => (
									<div
										className="product__description__box__items__item"
										key={index}
									>
										<Text
											className="product__description__box__items__item__quantity"
											color="accent"
										>
											{element.quantity}x
										</Text>
										<Text color="baseSecondaryDesaturated">{element.item}</Text>
									</div>
								))}
							</div>
						</section>
					</article>
					<article className="product__gallery">
						<picture className="product__gallery__first">
							<source
								media="screen and (min-width: 1100px)"
								srcSet={product?.gallery.first.desktop}
							/>
							<source
								media="screen and (min-width: 768px)"
								srcSet={product?.gallery.first.tablet}
							/>
							<img src={product?.gallery.first.mobile} alt={product?.name} />
						</picture>
						<picture className="product__gallery__second">
							<source
								media="screen and (min-width: 1100px)"
								srcSet={product?.gallery.second.desktop}
							/>
							<source
								media="screen and (min-width: 768px)"
								srcSet={product?.gallery.second.tablet}
							/>
							<img src={product?.gallery.second.mobile} alt={product?.name} />
						</picture>
						<picture className="product__gallery__third">
							<source
								media="screen and (min-width: 1100px)"
								srcSet={product?.gallery.third.desktop}
							/>
							<source
								media="screen and (min-width: 768px)"
								srcSet={product?.gallery.third.tablet}
							/>
							<img src={product?.gallery.third.mobile} alt={product?.name} />
						</picture>
					</article>
					<article className="product__others">
						<Text className="product__others__title" size="h5">
							YOU MAY ALSO LIKE
						</Text>
						{product?.others.map((element, index) => (
							<div className="product__others__product" key={index}>
								<picture className="product__others__product__image">
									<source
										media="screen and (min-width: 1100px)"
										srcSet={element.image.desktop}
									/>
									<source
										media="screen and (min-width: 768px)"
										srcSet={element.image.tablet}
									/>
									<img src={element.image.mobile} alt={element.name} />
								</picture>
								<Text size="h5">{element.name}</Text>
								<Button
									onClick={() => history.push(`/products/${element.slug}`)}
								>
									SEE PRODUCT
								</Button>
							</div>
						))}
					</article>
				</div>
				<SectionLinks />
				<FooterCompanyDescription />
			</div>
		</Styles>
	);
};

export default Product;
