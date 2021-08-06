import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton } from '@material-ui/core';
import stars from '../../../Shared/stars.jsx';
import Rating from '@material-ui/lab/Rating';

const YourOutfitCard = ({ addYourOutfit, outfits, photo, product, relatedProductStyleInfo, relatedProductsIDs, reviewsData }) => {
  const classes = useStyles();

  let reviewAverage = () => {
    reviewsData = reviewsData || {results: [{rating: 2}, {rating: 5}, {rating: 4},
    {rating: 4}, {rating: 2}]};
    let sum = 0;
    reviewsData.results.forEach(result => {
      sum += result.rating;
    })
    return sum/(reviewsData.results.length);
  }

  return (
    <Card
      className={classes.root}>
        <CardMedia
          className={classes.media}
          image={photo.photo}
        >
          <IconButton
            onClick={() => {
              addYourOutfit(outfits.filter(item => item.name !== product.name))
            }}
            style={{ color: 'black' }}
            aria-label="settings"
            className={classes.overlay}>
            <HighlightOffIcon style={{ color: 'black' }} aria-label="delete item from Your Outfits"/>
          </IconButton>
        </CardMedia>
        <CardContent>
          <Typography variant="caption" color="textSecondary" component="p">
            {product.category.toUpperCase()}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            {product.name}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
          &nbsp;{'$' + product.default_price.split('.')[0]}
          </Typography>
          <>
            <Rating name="read-only" value={reviewAverage()} readOnly precision={0.25}/>
          </>
        </CardContent>
    </Card>
  );
}

export default YourOutfitCard;