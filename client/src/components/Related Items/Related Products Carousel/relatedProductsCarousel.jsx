import React from 'react';
import RelatedProductsCard from './Related Products Card/RelatedProductsCard.jsx';

const RelatedProductsCarousel = ({ stars, sampleAllProducts }) => {

  return (
    <>
		<ul>
			{sampleAllProducts.map((product, i) => (
				<li>
					<RelatedProductsCard key={i} stars={stars} product={product}/>
				</li>
			))}
		</ul>
    </>
  );
}

export default RelatedProductsCarousel;