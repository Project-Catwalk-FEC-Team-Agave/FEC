import React from 'react';
import YourOutfitCard from './Your Outfit Card/yourOutfitCard.jsx';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { IconButton } from '@material-ui/core';
import useStyles from './styles.js';


const YourOutfitCarousel = ({ productInfo, photoObjs, relatedProductsIDs, reviewsData }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     yourOutfits: []
  //   }
  // }

	// componentDidMount() {
  //   this.setState({

  //   })
  // }
    const classes = useStyles();

    let choosePhoto = (prod) => {
      return photoObjs.map(obj => {
        if (obj.productID === prod.id) {
          return obj.photo;
        }
        return 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';
      })
    }

  return (


      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={4}>
    <div className="carousel">
			<div className="innerCarousel">

			    {productInfo.map((product, i) => (
				  <Grid key={i} xs={12} sm={6} item>
					<YourOutfitCard

						photo={choosePhoto(product)}
						product={product}
						reviewsData={reviewsData}/>
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
  )

}

export default YourOutfitCarousel;
