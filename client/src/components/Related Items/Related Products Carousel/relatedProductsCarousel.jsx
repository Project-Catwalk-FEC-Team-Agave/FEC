import React, { Fragment, useState } from 'react';
import RelatedProductsCard from './Related Products Card/relatedProductsCard.jsx';
import './styles.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton, Grid } from '@material-ui/core';
import useStyles from './styles.js';
//import { usePoroductStore } from '../../../components/Overview/store.js';
import Carousel from 'react-elastic-carousel';

const RelatedProductsCarousel = ({ overviewProductInfo, changeProduct, productInfo, photoObjs, relatedProductsIDs, reviewsData }) => {

	const classes = useStyles();


// in your functional components
// const id = usePoroductStore((state) => state.id);
// const updateId = usePoroductStore((state) => state.updateId);

  const [products, setProducts] = useState([productInfo]);

  return (
	  <div className="carouselErin">
			<Carousel itemsToShow={4} style={{height: '800px', paddingBottom: '100px'}}>
				{productInfo.map((product, i) => (
					<Fragment>
						<RelatedProductsCard
							changeProduct={changeProduct}
							photo={photoObjs[i]}
							product={product}
							reviewsData={reviewsData[i]}
							overviewProductInfo={overviewProductInfo}/>
					</Fragment>
				))}
			</Carousel>
		</div>
  );
}

export default RelatedProductsCarousel;
