import React from 'react';
import Styles from './FooterCompanyDescription.styles';
import mobileImage from '../../assets/shared/mobile/image-best-gear.jpg';
import tabletImage from '../../assets/shared/tablet/image-best-gear.jpg';
import desktopImage from '../../assets/shared/desktop/image-best-gear.jpg';
import { Text } from '../atoms';
import { colorSystem } from '../../global/designSystem';

const FooterCompanyDescription: React.FC = () => {
	return (
		<Styles>
			<div className="footer-company">
				<picture className="footer-company__image">
					<source
						media="screen and (min-width: 1100px)"
						srcSet={desktopImage}
					/>
					<source media="screen and (min-width: 600px)" srcSet={tabletImage} />
					<img src={mobileImage} alt="best gear" />
				</picture>
				<section className="footer-company__text">
					<Text size="h2" className="footer-company__text__title">
						BRINGING YOU THE{' '}
						<span style={{ color: colorSystem.accent }}>BEST</span> AUDIO GEAR
					</Text>
					<Text
						color="baseSecondaryDesaturated"
						className="footer-company__text__paragraph"
					>
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</Text>
				</section>
			</div>
		</Styles>
	);
};

export default FooterCompanyDescription;
