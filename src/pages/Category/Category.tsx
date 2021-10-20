import React from 'react';
import Styles from './Category.styles';
import { FooterCompanyDescription, SectionLinks } from '../../components';
import data from '../../data.json';
import { useParams } from 'react-router';
import image from '../../assets/product-zx7-speaker/desktop/image-product.jpg';

const Category: React.FC = () => {
	const { categoryName } = useParams<{ categoryName: string }>();
	const filteredData = data.filter(
		element => element.category === categoryName,
	);
	return (
		<Styles>
			<img src={image} alt="" />
			<div className="body-container">
				{filteredData.map(element => {
					return (
						<img
							src={
								require('../../assets/product-zx7-speaker/desktop/image-product.jpg')
									.default
							}
							alt=""
						/>
					);
				})}
				<SectionLinks />
				<FooterCompanyDescription />
			</div>
		</Styles>
	);
};

export default Category;
