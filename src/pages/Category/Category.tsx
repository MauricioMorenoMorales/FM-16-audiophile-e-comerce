import React from 'react';
import Styles from './Category.styles';
import { FooterCompanyDescription, SectionLinks } from '../../components';
import data from '../../data.json';
import { useHistory, useParams } from 'react-router';
import { Button, Text } from '../../components/atoms';
import IProduct from '../../interfaces/product.interface';

const Category: React.FC = () => {
	const { categoryName } = useParams<{ categoryName: string }>();
	const history = useHistory();
	//Renders only the data of the item on the url and puts first the products that are new
	const filteredData = data
		.filter(element => element.category === categoryName)
		.reduce(
			(acc: IProduct[], element: any) =>
				element.new ? [element, ...acc] : [...acc, element],
			[],
		);
	return (
		<Styles>
			<div className="category__header">
				<Text size="h1" color="basePrimarySaturated">
					{categoryName.toUpperCase()}
				</Text>
			</div>
			<div className="body-container">
				<section className="category__products">
					{filteredData.map((element, index) => (
						<article
							className={`category__products__product ${index % 2 && 'even'}`}
							key={element.id}
						>
							<picture className="category__products__product__image">
								<source
									media="screen and (min-width: 1100px)"
									srcSet={
										window.location.origin + element.categoryImage.desktop
									}
								/>
								<source
									media="screen and (min-width: 768px)"
									srcSet={window.location.origin + element.categoryImage.tablet}
								/>
								<img
									src={window.location.origin + element.categoryImage.mobile}
									alt={element.name}
								/>
							</picture>
							<section
								className={`category__products__product__text ${
									index % 2 && 'even'
								}`}
							>
								{element.new && (
									<Text
										size="overline"
										color="accent"
										className="category__products__product__text__new"
									>
										NEW PRODUCT
									</Text>
								)}
								<Text
									size="h2"
									className="category__products__product__text__title"
								>
									{element.name.toUpperCase()}
								</Text>
								<Text className="category__products__product__text__paragraph">
									{element.description}
								</Text>
								<Button onClick={() => history.push(`/products/${element.id}`)}>
									SEE PRODUCT
								</Button>
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
