import React from 'react';
import Styles from './Category.styles';
import { FooterCompanyDescription, SectionLinks } from '../../components';
import data from '../../data.json';
import { useParams } from 'react-router';
import { Button, Text } from '../../components/atoms';

const Category: React.FC = () => {
	const { categoryName } = useParams<{ categoryName: string }>();
	const filteredData = data.filter(
		element => element.category === categoryName,
	);
	return (
		<Styles>
			<div className="category__header">
				<Text size="h1">{categoryName.toUpperCase()}</Text>
			</div>
			<div className="body-container">
				<section className="category__products">
					{filteredData.map(element => (
						<article className="category__products__product">
							<picture className="category__products__product__image">
								<source
									media="screen and (min-width: 1100px)"
									srcSet={window.location.origin + element.image.desktop}
								/>
								<source
									media="screen and (min-width: 768px)"
									srcSet={window.location.origin + element.image.mobile}
								/>
								<img
									src={window.location.origin + element.image.mobile}
									alt={element.name}
								/>
							</picture>
							<section className="category__products__product__text">
								{element.new && (
									<Text size="overline" color="accent">
										NEW PRODUCT
									</Text>
								)}
								<Text size="h2">{element.name.toUpperCase()}</Text>
								<Text>{element.description}</Text>
								<Button>SEE PRODUCT</Button>
							</section>
						</article>
					))}
				</section>
				<SectionLinks />
				<FooterCompanyDescription />
			</div>
		</Styles>
	);
};

export default Category;
