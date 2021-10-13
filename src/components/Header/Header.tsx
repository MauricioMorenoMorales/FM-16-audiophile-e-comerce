import React from 'react';
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';
import Styles from './Header.styles';

const Header = () => {
	return (
		<Styles>
			<div className="header">
				<img className="header__burger" src={Hamburger} alt="" />
				<img className="header__logo" src={Logo} alt="" />
				<section className="header__links">
					<a href="/">Home</a>
					<a href="/">HeadPhones</a>
					<a href="/">Speakers</a>
					<a href="/">EarPhones</a>
				</section>
				<div className="header__cart">
					<img className="header__cart__image" src={Cart} alt="" />
					<div className="header__cart__counter">2</div>
				</div>
			</div>
		</Styles>
	);
};

export default Header;
