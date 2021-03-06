import React, { useEffect, useState } from 'react';
import { Text, Input, Radio, Button, Icons } from '../../components/atoms';
import Styles from './Checkout.styles';

import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Checkout: React.FC = () => {
	const cart = useSelector((state: RootState) => state.cart);
	const [paymentMethod, setPaymentMethod] = useState<'e-money' | 'cash'>(
		'e-money',
	);
	const [modalOpened, setModalOpened] = useState<boolean>(false);
	const history = useHistory();
	if (cart.length === 0) history.push('/');
	useEffect(() => {}, []);
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
							<div onClick={() => setPaymentMethod('e-money')}>
								<Radio label="e-money" active={paymentMethod === 'e-money'} />
							</div>
							<div onClick={() => setPaymentMethod('cash')}>
								<Radio
									label="Cash on Delivery"
									active={paymentMethod === 'cash'}
								/>
							</div>
							{paymentMethod === 'e-money' ? (
								<>
									<Input title="e-Money Number" placeholder="238521993" />
									<Input title="e-Money PIN" placeholder="6891" />
								</>
							) : (
								<div className="checkout__form__payment__method__description">
									<Icons iconName="payment" color="accent" />
									<Text color="baseSecondaryDesaturated">
										The ???Cash on Delivery??? option enables you to pay in cash
										when our delivery courier arrives at your residence. Just
										make sure your address is correct so that your order will
										not be cancelled.
									</Text>
								</div>
							)}
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
						<Button
							fullWidth
							onClick={() => {
								setModalOpened(true);
								window.scrollTo(0, 0);
							}}
						>
							CONTINUE & PAY
						</Button>
					</article>
				</div>
			</div>
			{modalOpened && (
				<div
					className="purchase-modal--background"
					onClick={() => setModalOpened(false)}
				></div>
			)}
			{modalOpened && (
				<div className="purchase-modal">
					<Icons color="accent" iconName="checked" />
					<Text className="purchase-modal__title" size="h3">
						THANK YOU FOR YOUR ORDER
					</Text>
					<Text color="baseSecondaryDesaturated">
						You will receive an email confirmation shortly
					</Text>
					<section className="purchase-modal__products">
						<div className="purchase-modal__products__cart">
							<div className="purchase-modal__products__cart__item">
								<div className="purchase-modal__products__cart__item__description">
									<img src={cart[0]!.image} alt={cart[0]!.name} />
									<div className="purchase-modal__products__cart__item__description__text">
										<Text className="purchase-modal__products__cart__item__description__text__title">
											{cart[0]!.name.replace(
												/headphones|earphones|speaker/gi,
												'',
											)}
										</Text>
										<Text color="baseSecondaryDesaturated">
											${cart[0]!.price}
										</Text>
									</div>
								</div>
								<Text
									className="purchase-modal__products__cart__item__quantity"
									color="baseSecondaryDesaturated"
								>
									x{cart[0]!.quantity}
								</Text>
							</div>
							{cart.length >= 2 && (
								<Text
									className="purchase-modal__products__cart__total-items"
									size="subtitle"
									color="baseSecondaryDesaturated"
								>
									and other {cart.length - 1} item(s)
								</Text>
							)}
						</div>
						<div className="purchase-modal__products__total">
							<Text color="baseSecondaryDesaturated">GRAND TOTAL</Text>
							<Text color="basePrimarySaturated" size="h6">
								$
								{Math.floor(
									cart.reduce((acc, curr) => acc + curr.price, 0) * 1.2 + 50,
								)}
							</Text>
						</div>
					</section>
					<Button onClick={() => history.push('/')} fullWidth>
						BACK TO HOME
					</Button>
				</div>
			)}
		</Styles>
	);
};

export default Checkout;
