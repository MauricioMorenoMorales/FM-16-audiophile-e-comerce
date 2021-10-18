import React from 'react';
import { Text, GhostButton } from '../atoms';
import Headphone from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import Earhphone from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import Speaker from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import Styles from './SectionLinks.styles';

const SectionLinks: React.FC = () => {
	return (
		<Styles>
			<section className="section-links">
				<div className="section-links__item">
					<img
						className="section-links__item__image"
						src={Headphone}
						alt="Headphones"
					/>
					<Text>HEADPHONES</Text>
					<GhostButton>SHOP</GhostButton>
				</div>
				<div className="section-links__item">
					<img
						className="section-links__item__image"
						src={Speaker}
						alt="Speakers"
					/>
					<Text>HEADPHONES</Text>
					<GhostButton>SHOP</GhostButton>
				</div>
				<div className="section-links__item">
					<img
						className="section-links__item__image"
						src={Earhphone}
						alt="Earphones"
					/>
					<Text>HEADPHONES</Text>
					<GhostButton>SHOP</GhostButton>
				</div>
			</section>
		</Styles>
	);
};

export default SectionLinks;
