import React, { useEffect, useState } from 'react';
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';
import Styles from './Header.styles';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { reset } from '../../features/cart/cartSlice';

import Headphone from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import Earhphone from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import Speaker from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import { Button, Counter, GhostButton, Text } from '../atoms';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);
	const [cartOpened, setCartOpened] = useState<boolean>(false);
	const history = useHistory();
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart);

	const closeMenuWhenScrolls = (): void => {
		if (window.scrollY > 500) {
			setMenuOpened(false);
			setCartOpened(false);
		}
	};
	const redirect = (url: string): void => {
		history.push(url);
		setMenuOpened(false);
		setCartOpened(false);
	};

	useEffect(() => {
		document.addEventListener('scroll', closeMenuWhenScrolls);
		return () => {
			document.addEventListener('scroll', closeMenuWhenScrolls);
		};
	}, []);

	return (
		<Styles>
			<section className="header">
				<img
					className="header__burger"
					onClick={() => {
						setMenuOpened(!menuOpened);
						setCartOpened(false);
					}}
					src={Hamburger}
					alt=""
				/>
				<img
					className="header__logo"
					src={Logo}
					alt="audiophile"
					onClick={() => history.push('/')}
				/>
				<section className="header__links">
					<Link to="/">Home</Link>
					<Link to="/category/headphones">HeadPhones</Link>
					<Link to="/category/speakers">Speakers</Link>
					<Link to="/category/earphones">EarPhones</Link>
				</section>
				<div
					className="header__cart"
					style={{ cursor: cart.length > 0 ? 'pointer' : 'default' }}
					onClick={() => {
						setCartOpened(!cartOpened);
						setMenuOpened(false);
					}}
				>
					<img className="header__cart__image" src={Cart} alt="cart" />
					{/* TODO add a dynamic value to the counter */}
					{cart.length && (
						<div className="header__cart__counter">{cart.length}</div>
					)}
				</div>
				{cartOpened && cart.length > 0 && (
					<article className="header-cart">
						<section className="header-cart__header">
							<Text size="h6">CART ({cart.length})</Text>
							<button
								className="header-cart__header__remove-button"
								onClick={() => {
									dispatch(reset());
									setCartOpened(false);
								}}
							>
								Remove all
							</button>
						</section>
						<section className="header-cart__products">
							{cart.map(element => (
								<div className="header-cart__products__item" key={element.id}>
									<div className="header-cart__products__item__description">
										<img
											className="header-cart__products__item__description__image"
											src={element.image}
											alt={element.name}
										/>
										<div className="header-cart__products__item__description__text">
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
									<Counter />
								</div>
							))}
						</section>
						<section className="header-cart__info">
							<Text color="baseSecondaryDesaturated">TOTAL</Text>
							<Text>
								$
								{Math.floor(
									cart.reduce(
										(acc, element) => element.price * element.quantity + acc,
										0,
									) *
										1.2 +
										50,
								)}
							</Text>
						</section>
						<Button
							fullWidth
							className="header-cart__button"
							onClick={() => redirect('/checkout')}
						>
							CHECKOUT
						</Button>
					</article>
				)}
			</section>
			{menuOpened && (
				<section className="header-menu">
					<div
						className="header-menu__item"
						onClick={() => redirect('/category/headphones')}
					>
						<img
							className="header-menu__item__image"
							src={Headphone}
							alt="Headphones"
						/>
						<Text>HEADPHONES</Text>
						<GhostButton>SHOP</GhostButton>
					</div>
					<div
						className="header-menu__item"
						onClick={() => redirect('/category/speakers')}
					>
						<img
							className="header-menu__item__image"
							src={Speaker}
							alt="Speakers"
						/>
						<Text>HEADPHONES</Text>
						<GhostButton>SHOP</GhostButton>
					</div>
					<div
						className="header-menu__item"
						onClick={() => redirect('/category/earphones')}
					>
						<img
							className="header-menu__item__image"
							src={Earhphone}
							alt="Earphones"
						/>
						<Text>HEADPHONES</Text>
						<GhostButton>SHOP</GhostButton>
					</div>
				</section>
			)}
			{(menuOpened || (cartOpened && cart.length > 0)) && (
				<div
					className="modal-background"
					onClick={() => {
						setMenuOpened(false);
						setCartOpened(false);
					}}
				></div>
			)}
		</Styles>
	);
};

export default Header;
