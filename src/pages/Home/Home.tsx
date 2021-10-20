import React from 'react';
import Styles from './Home.styles';

//Images
import firstProductMobile from '../../assets/home/mobile/image-speaker-zx9.png';
import firstProductTablet from '../../assets/home/tablet/image-speaker-zx9.png';
import firstProductDesktop from '../../assets/home/desktop/image-speaker-zx9.png';
// import secondProductMobile from '../../assets/home/mobile/image-speaker-zx7.jpg';
// import secondProductTablet from '../../assets/home/tablet/image-speaker-zx7.jpg';
// import secondProductDesktop from '../../assets/home/desktop/image-speaker-zx7.jpg';
import thirdProductMobile from '../../assets/home/mobile/image-earphones-yx1.jpg';
import thirdProductTablet from '../../assets/home/tablet/image-earphones-yx1.jpg';
import thirdProductDesktop from '../../assets/home/desktop/image-earphones-yx1.jpg';

import { Hero, SectionLinks, FooterCompanyDescription } from '../../components';
import { Text, Button } from '../../components/atoms';

const Home = () => {
	return (
		<Styles>
			<Hero />
			<div className="body-container">
				<SectionLinks />
				<section className="home__products">
					<article className="home__products__first-item">
						<picture className="home__products__first-item__image">
							<source
								media="screen and (min-width: 1100px)"
								srcSet={firstProductDesktop}
							/>
							<source
								media="screen and (min-width: 768px)"
								srcSet={firstProductTablet}
							/>
							<img src={firstProductMobile} alt="zx9 Speaker" />
						</picture>
						<div className="home__products__first-item__text">
							<Text
								className="home__products__first-item__text__title"
								size="h1"
								color="basePrimarySaturated"
							>
								ZX9 SPEAKER
							</Text>
							<Text
								className="home__products__first-item__text__paragraph"
								color="basePrimaryDesaturated"
							>
								Upgrade to premium speakers that are phenomenally built to
								deliver truly remarkable sound.
							</Text>
							<Button kind="tertiary">SEE PRODUCT</Button>
						</div>
					</article>
					<article className="home__products__second-item">
						{/* <picture className="home__products__second-item__image">
							<source
								media="screen and (min-width: 1100px)"
								srcSet={secondProductDesktop}
							/>
							<source
								media="screen and (min-width: 768px)"
								srcSet={secondProductTablet}
							/>
							<img src={secondProductMobile} alt="zx9 Speaker" />
						</picture> */}
						<div className="home__products__second-item__text">
							<Text size="h4">ZX7 SPEAKER</Text>
							<Button kind="secondary">SEE PRODUCT</Button>
						</div>
					</article>
					<article className="home__products__third-item--image">
						<picture className="home__products__third-item--image__image">
							<source
								media="screen and (min-width: 1100px)"
								srcSet={thirdProductDesktop}
							/>
							<source
								media="screen and (min-width: 768px)"
								srcSet={thirdProductTablet}
							/>
							<img src={thirdProductMobile} alt="zx9 Speaker" />
						</picture>
					</article>
					<article className="home__products__third-item--description">
						<Text size="h4">YX1 EARPHONES</Text>
						<Button kind="secondary">SEE PRODUCT</Button>
					</article>
				</section>
				<FooterCompanyDescription />
			</div>
			<p></p>
		</Styles>
	);
};

export default Home;
