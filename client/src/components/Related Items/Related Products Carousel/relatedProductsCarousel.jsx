import React from 'react';
import RelatedProductsCard from './Related Products Card/relatedProductsCard.jsx';

const RelatedProductsCarousel = ({ Stars, sampleAllProducts }) => {

  return (
		<ul>
			{sampleAllProducts.map((product, i) => (
				<li key={i}>
					<RelatedProductsCard stars={Stars} product={product}/>
				</li>
			))}
		</ul>
  );
}

export default RelatedProductsCarousel;