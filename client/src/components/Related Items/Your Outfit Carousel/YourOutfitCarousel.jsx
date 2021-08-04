import React from 'react';
import YourOutfitCard from './Your Outfit Card/yourOutfitCard.jsx';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { IconButton } from '@material-ui/core';
import useStyles from './styles.js';
import { Card, CardMedia} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const YourOutfitCarousel = ({ productInfo, photoObjs, relatedProductsIDs, reviewsData }) => {

    const classes = useStyles();

    // let choosePhoto = (prod) => {
    //   return photoObjs.map(obj => {
    //     if (obj.productID === prod.id) {
    //       return obj.photo;
    //     }
    //     return 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';
    //   })
    // }
    let renderCards = (product, i) => {
      if (i === 0) {
        return (
          <Card
            className={classes.root}>
            <CardMedia
              className={classes.media}
              image={'https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
            >
              <IconButton style={{ color: 'black' }} aria-label="settings" className={classes.overlay}>
                <AddCircleIcon style={{ color: 'black' }} aria-label="add item to Your Outfits" className={classes.icon}/>
              </IconButton>
            </CardMedia>
          </Card>
        );
      } else if (i > 0) {
        photoObjs.forEach(obj => {

          if (product.id === obj.productID) {

            return (
              <YourOutfitCard
                  photo={obj.photo}
                  product={product}
                  reviewsData={reviewsData}>

              </YourOutfitCard>
            )

          }
        })

      }

    }

  return (
    <Grid className={classes.mainContainer} container alignItems='stretch' spacing={4}>
      <div className="carousel">
        <div className="innerCarousel">
        <Card
            className={classes.root}>
            <CardMedia
              className={classes.media}
              image={'https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
            >
              <IconButton style={{ color: 'black' }} aria-label="settings" className={classes.overlay}>
                <AddCircleIcon style={{ color: 'black' }} aria-label="add item to Your Outfits" className={classes.icon}/>
              </IconButton>
            </CardMedia>
          </Card>
            {productInfo.map((product, i) => (
            <Grid key={i} xs={12} sm={6} item>
              {/* {renderCards(product, i)} */}
              <YourOutfitCard
                photo={'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'}
                product={product}
                reviewsData={reviewsData}>

              </YourOutfitCard>
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
