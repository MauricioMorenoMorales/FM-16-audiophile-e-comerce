import React from 'react';
import Styles from './Footer.styles';
import { Text, Icons as Icon } from '../atoms';
import Logo from '../../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
	return (
		<Styles>
			<div className="footer-line"></div>
			<div className="footer">
				<figure className="footer__logo">
					<img src={Logo} alt="audiophile" />
				</figure>
				<section className="footer__links">
					<Link to="/" className="footer__links__item">
						Home
					</Link>
					<Link to="/category/headphones" className="footer__links__item">
						Headphones
					</Link>
					<Link to="/category/speakers" className="footer__links__item">
						Speakers
					</Link>
					<Link to="/category/earphones" className="footer__links__item">
						Earphones
					</Link>
				</section>
				<section className="footer__description">
					<Text color="baseSecondaryDesaturated">
						Audiophile is an all in one stop to fulfill your audio needs. We're
						a small team of music lovers and sound specialists who are devoted
						to helping you get the most out of personal audio. Come and visit
						our demo facility - we’re open 7 days a week.
					</Text>
				</section>
				<section className="footer__copyright">
					<Text color="baseSecondaryDesaturated">
						Copyright 2021. All Rights Reserved
					</Text>
				</section>
				<section className="footer__social">
					<Icon iconName="facebook" />
					<Icon iconName="twitter" />
					<Icon iconName="instagram" />
				</section>
			</div>
		</Styles>
	);
};

export default Footer;
