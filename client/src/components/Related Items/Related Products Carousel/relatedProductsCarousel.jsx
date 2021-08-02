import React, { useState } from 'react';
import RelatedProductsCard from './Related Products Card/RelatedProductsCard.jsx';
import './styles.css';
import Grid from '@material-ui/core/Grid';
// import { ArrowBackIosIcon, ArrowForwardIosIcon } from '@material-ui/icons';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';
import useStyles from './styles.js';

const RelatedProductsCarousel = ({ stars, sampleAllProducts }) => {

	const classes = useStyles();

	const [currImage, setCurrImage] = useState(0);

  return (
	<Grid className={classes.mainContainer} container alignItems='stretch' spacing={4}>
    <div className="carousel">
			<div className="innerCarousel">
			  {/* <RelatedProductsCard stars={stars} product={sampleAllProducts[currImage]}/> */}

				{/* <ul style={{ listStyleType: "none" }}> */}
			    {sampleAllProducts.map((product, i) => (
				  <Grid key={i} xs={12} sm={6} item>
					<RelatedProductsCard stars={stars} product={product}/>
				  </Grid>
			    ))}
		    {/* </ul> */}
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


{/* <ul style={{ listStyleType: "none" }}>
			{sampleAllProducts.map((product, i) => (
				<li key={i}>
					<RelatedProductsCard stars={stars} product={product}/>
				</li>
			))}
		</ul> */}