import React from 'react';
import Styles from './Footer.styles';
import { Text, Icons as Icon } from '../atoms';
import Logo from '../../assets/shared/desktop/logo.svg';

const Footer: React.FC = () => {
	return (
		<Styles>
			<div className="footer">
				<figure className="footer__logo">
					<img src={Logo} alt="audiophile" />
				</figure>
				<section className="footer__links">
					<a href="/" className="footer__links__item">
						Home
					</a>
					<a href="/" className="footer__links__item">
						Headphones
					</a>
					<a href="/" className="footer__links__item">
						Speakers
					</a>
					<a href="/" className="footer__links__item">
						Earphones
					</a>
				</section>
				<section className="footer__description">
					<Text color="basePrimaryDesaturated">
						Audiophile is an all in one stop to fulfill your audio needs. We're
						a small team of music lovers and sound specialists who are devoted
						to helping you get the most out of personal audio. Come and visit
						our demo facility - we’re open 7 days a week.
					</Text>
				</section>
				<section className="footer__copyright">
					<Text color="basePrimaryDesaturated">
						Copyright 2021. All Rights Reserved
					</Text>
				</section>
				<section className="footer__links">
					<Icon iconName="facebook" color="baseSecondarySaturated" />
					<Icon iconName="twitter" color="baseSecondarySaturated" />
					<Icon iconName="instagram" color="baseSecondarySaturated" />
				</section>
			</div>
		</Styles>
	);
};

export default Footer;
