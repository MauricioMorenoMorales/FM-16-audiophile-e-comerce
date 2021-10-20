import React from 'react';
import Styles from './Category.styles';
import { FooterCompanyDescription, SectionLinks } from '../../components';
import data from '../../data.json';
import { useParams } from 'react-router';

const Category: React.FC = () => {
	const { categoryName } = useParams<{ categoryName: string }>();
	const filteredData = data.filter(
		element => element.category === categoryName,
	);
	return (
		<Styles>
			<div className="body-container">
				{filteredData.map(element => {
					return (
						<img
							src={window.location.origin + element.image.desktop}
							alt={element.name}
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
