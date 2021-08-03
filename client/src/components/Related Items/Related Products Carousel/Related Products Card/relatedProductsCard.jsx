import React from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton } from '@material-ui/core';

// import DoneAllIcon from '@material-ui/icons/DoneAll';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import stars from '../../../Shared/stars.jsx';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

//product photos are located in the styles endpoint

const RelatedProductsCard = ({ changeProduct, photo, product, relatedProductStyleInfo, relatedProductsIDs, reviewsData }) => {
  const classes = useStyles();
  let starCount = stars();

  return (
  <Card
  data-myattr={product.id}
  //onClick here updates top-level product overview ID
  onClick={(e) => {
    changeProduct(e.target.dataset.myattr);
  }}
  className={classes.root}>
      <CardMedia
        className={classes.media}
        image={photo[2]}
      >
        <IconButton style={{ color: 'black' }} aria-label="settings" className={classes.overlay}>
          <StarBorderIcon style={{ color: '#f4b400' }} aria-label="compare to current product"/>
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

export default RelatedProductsCard;
