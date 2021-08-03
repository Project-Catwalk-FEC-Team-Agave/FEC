import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton } from '@material-ui/core';
import stars from '../../../Shared/stars.jsx';

const YourOutfitCard = ({ photo, product, relatedProductStyleInfo, relatedProductsIDs, reviewsData }) => {
  const classes = useStyles();
  let starCount = stars(3.5);

  return (
  <Card
  className={classes.root}>
      <CardMedia
        className={classes.media}
        image={photo[2]}
      >
        <IconButton style={{ color: 'black' }} aria-label="settings" className={classes.overlay}>
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
          {'$' + product.default_price.split('.')[0]}
        </Typography>
        <>
          {starCount}
        </>
      </CardContent>
  </Card>
  );
}

export default YourOutfitCard;