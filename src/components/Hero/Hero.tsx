import React from 'react';
import Styles from './Hero.styles';
import MobileBackground from '../../assets/home/mobile/image-header.jpg';
import TabletBackground from '../../assets/home/tablet/image-header.jpg';
import DesktopBackground from '../../assets/home/tablet/image-header.jpg';

import { Text, Button } from '../atoms';

const Hero = () => {
	return (
		<Styles>
			<div className="hero">
				<picture className="hero__image">
					<source
						media="screen and (min-width: 1100px)"
						srcSet={DesktopBackground}
					/>
					<source
						media="screen and (min-width: 768px)"
						srcSet={TabletBackground}
					/>
					<img src={MobileBackground} alt="X99 MARK II" />
				</picture>
				<section className="hero__text">
					<Text
						size="overline"
						color="baseSecondaryDesaturated"
						className="hero__text__label"
					>
						NEW PRODUCT
					</Text>
					<Text
						size="h1"
						color="basePrimarySaturated"
						className="hero__text__title"
					>
						XX99 MARK II HEADPHONES
					</Text>
					<Text
						color="baseSecondaryDesaturated"
						className="hero__text__paragraph"
					>
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</Text>
					<Button kind="primary">SEE PRODUCT</Button>
				</section>
			</div>
		</Styles>
	);
};

export default Hero;
