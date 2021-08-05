import React, { useState } from 'react';
import RelatedProductsCard from './Related Products Card/relatedProductsCard.jsx';
import './styles.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton, Grid } from '@material-ui/core';
import useStyles from './styles.js';

const RelatedProductsCarousel = ({ overviewProductInfo, changeProduct, productInfo, photoObjs, relatedProductsIDs, reviewsData }) => {

	const classes = useStyles();

  return (
	<Grid className={classes.mainContainer} container alignItems='stretch' spacing={4}>
    <div className="carousel">
			<div className="innerCarousel">
			    {productInfo.slice(0, 4).map((product, i) => (
						<Grid key={i} xs={12} sm={6} item>
						<RelatedProductsCard
							changeProduct={changeProduct}
							photo={photoObjs[i]}
							product={product}
							reviewsData={reviewsData}
							overviewProductInfo={overviewProductInfo}/>
						</Grid>
			    ))}
				<div className="carouselRight">
				<IconButton style={{ color: 'black' }} aria-label="settings" className={classes.overlay}>
          <ArrowForwardIosIcon style={{ color: 'black' }} aria-label="show next item in related products list"/>
        </IconButton>
				</div>
			</div>
    </div>
		</Grid>
  );
}

export default RelatedProductsCarousel;
