import React, { useEffect, useState } from 'react';
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';
import Styles from './Header.styles';

import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

import Headphone from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import Earhphone from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import Speaker from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import { Button, Counter, GhostButton, Text } from '../atoms';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	const [menuOpened, setMenuOpened] = useState(false);
	const [cartOpened, setCartOpened] = useState(false);
	const history = useHistory();
	const cart = useSelector((state: RootState) => state.cart);

	const closeMenuWhenScrolls = () => {
		if (window.scrollY > 500) {
			setMenuOpened(false);
			setCartOpened(false);
		}
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
					onClick={() => setMenuOpened(!menuOpened)}
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
					onClick={() => setCartOpened(!cartOpened)}
				>
					<img className="header__cart__image" src={Cart} alt="cart" />
					{/* TODO add a dynamic value to the counter */}
					{cart.length && (
						<div className="header__cart__counter">{cart.length}</div>
					)}
				</div>
			</section>
			{menuOpened && (
				<section className="header-menu">
					<div className="header-menu__item">
						<img
							className="header-menu__item__image"
							src={Headphone}
							alt="Headphones"
						/>
						<Text>HEADPHONES</Text>
						<GhostButton>SHOP</GhostButton>
					</div>
					<div className="header-menu__item">
						<img
							className="header-menu__item__image"
							src={Speaker}
							alt="Speakers"
						/>
						<Text>HEADPHONES</Text>
						<GhostButton>SHOP</GhostButton>
					</div>
					<div className="header-menu__item">
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
			{cartOpened && cart.length > 0 && (
				<article className="header-cart">
					<section className="header-cart__header">
						<Text size="h6">CART ({cart.length})</Text>
						<button className="header-cart__header__remove-button">
							Remove all
						</button>
					</section>
					<section className="header-cart__products">
						{cart.map(element => (
							<div className="header-cart__products__item">
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
											${element.price}
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
							${cart.reduce((acc, element) => element.price + acc, 0)}
						</Text>
					</section>
					<Button fullWidth className="header-cart__button">
						CHECKOUT
					</Button>
				</article>
			)}
			{(menuOpened || cartOpened) && (
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
