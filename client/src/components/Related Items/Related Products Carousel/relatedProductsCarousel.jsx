import React from 'react';
import RelatedProductsCard from './Related Products Card/RelatedProductsCard.jsx';

const RelatedProductsCarousel = ({ stars, sampleAllProducts }) => {

  return (
    <>
		<ul>
			{sampleAllProducts.map((product, i) => (
				<li list-style-type='none' key={i}>
					<RelatedProductsCard stars={stars} product={product}/>
				</li>
			))}
		</ul>
    </>
  );
}

export default RelatedProductsCarousel;