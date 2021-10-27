import React from 'react';
import { Text, Input, Radio, Button } from '../../components/atoms';
import Styles from './Checkout.styles';

import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Checkout: React.FC = () => {
	const cart = useSelector((state: RootState) => state.cart);
	const history = useHistory();
	if (cart.length === 0) history.push('/');
	return (
		<Styles>
			<div className="body-container">
				<button className="go-back">Go Back</button>
				<div className="checkout">
					<article className="checkout__form">
						<Text className="chcout__form__title" size="h3">
							CHECKOUT
						</Text>
						<section className="checkout__form__billing">
							<Text
								className="checkout__form__billing__title"
								size="overline"
								color="accent"
							>
								BILLING DETAILS
							</Text>
							<Input title="Name" placeholder="Alexei Ward" />
							<Input
								title="Email Address"
								placeholder="alexei@mail.com"
								type="email"
							/>
							<Input title="Phone Number" placeholder="+1 202-55-0136" />
						</section>
						<section className="checkout__form__shipping">
							<Text
								className="checkout__form__shipping__title"
								size="overline"
								color="accent"
							>
								SHIPPING INFO
							</Text>
							<Input title="Address" placeholder="1137 Williams Avenue" />
							<Input title="ZIP Code" placeholder="10001" />
							<Input title="City" placeholder="New York" />
							<Input title="Country" placeholder="United States" />
						</section>
						<section className="checkout__form__payment">
							<Text
								className="checkout__form__payment__title"
								size="overline"
								color="accent"
							>
								PAYMENT DETAILS
							</Text>
							<Text className="checkout__form__payment__method">
								Payment method
							</Text>
							<Radio label="e-money" active />
							<Radio label="Cash on Delivery" active={false} />
							<Input title="e-Money Number" placeholder="238521993" />
							<Input title="e-Money PIN" placeholder="6891" />
						</section>
					</article>
					<article className="checkout__summary">
						<Text size="h6">SUMMARY</Text>
						<section className="checkhout__summary__products">
							{cart!.map(element => (
								<div
									className="checkout__summary__products__item"
									key={element.id}
								>
									<div className="checkout__summary__products__item__description">
										<img
											src={element.image}
											alt={element.name}
											className="checkout__summary__products__item__description__image"
										/>
										<div className="checkout__summary__products__item__description__text">
											<Text>
												{element.name.replace(
													/headphones|earphones|speaker/gi,
													'',
												)}
											</Text>
											<Text color="baseSecondaryDesaturated">
												${element.price * element.quantity}
											</Text>
										</div>
									</div>
									<Text
										className="checkout__summary__products__tem__quantity"
										color="baseSecondaryDesaturated"
									>
										x{element.quantity}
									</Text>
								</div>
							))}
						</section>
						<section className="checkout__summary__cart-data">
							<div className="checkout__summary__cart-data__item">
								<Text color="baseSecondaryDesaturated">TOTAL</Text>
								<Text>
									$
									{cart.reduce(
										(acc, element) => acc + element.price * element.quantity,
										0,
									)}
								</Text>
							</div>
							<div className="checkout__summary__cart-data__item">
								<Text color="baseSecondaryDesaturated">SHIPPING</Text>
								<Text>$50</Text>
							</div>
							<div className="checkout__summary__cart-data__item">
								<Text color="baseSecondaryDesaturated">VAT (INCLUDED)</Text>
								<Text>
									$
									{Math.floor(
										cart.reduce(
											(acc, element) => acc + element.price * element.quantity,
											0,
										) * 0.2,
									)}
								</Text>
							</div>
							<div className="checkout__summary__cart-data__item">
								<Text color="baseSecondaryDesaturated">TOTAL</Text>
								<Text color="accent">
									$
									{Math.floor(
										cart.reduce(
											(acc, element) => acc + element.price * element.quantity,
											0,
										) *
											1.2 +
											50,
									)}
								</Text>
							</div>
						</section>
						<Button fullWidth>CONTINUE & PAY</Button>
					</article>
				</div>
			</div>
		</Styles>
	);
};

export default Checkout;
