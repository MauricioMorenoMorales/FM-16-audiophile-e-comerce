import React, { useEffect, useState } from 'react';
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';
import Styles from './Header.styles';

import Headphone from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import Earhphone from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import Speaker from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import { GhostButton, Text } from '../atoms';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	const [menuOpened, setMenuOpened] = useState(false);
	const history = useHistory();

	const closeMenuWhenScrolls = () =>
		window.scrollY > 500 && setMenuOpened(false);

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
				<div className="header__cart">
					<img className="header__cart__image" src={Cart} alt="cart" />
					{/* TODO add a dynamic value to the counter */}
					<div className="header__cart__counter">2</div>
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
			{menuOpened && <div className="modal-background"></div>}
		</Styles>
	);
};

export default Header;
