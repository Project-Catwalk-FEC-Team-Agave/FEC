import React from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

// import DoneAllIcon from '@material-ui/icons/DoneAll';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import stars from '../../../Shared/stars.jsx';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

//product photos are located in the styles endpoint

const RelatedProductsCard = ({ photo, product, relatedProductStyleInfo, relatedProductsIDs, reviewsData }) => {
  const classes = useStyles();
  let starCount = stars();

  console.log('PHOTO @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', photo[2])

  return (
  <Card
  //onClick here updates top-level product overview ID
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
      {/* <CardActions disableSpacing>

      </CardActions> */}
    </Card>
  );
}

export default RelatedProductsCard;




  // let photo = function() {

  //   relatedProductStyleInfo.forEach(style => {
  //     if (product.id === style.product_id) {
  //       return style.results[0].photos[0].url;
  //     }
  //   })
  // }

  // let photo = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";

  // const filtered = () => {
  //   console.log('*************', product.id)

  //   return relatedProductStyleInfo.filter(style => {
  //     console.log('%%%%%%%', typeof style.product_id, style.product_id);

  //     if (product.id === style.product_id) {
  //       return style.results;
  //     }
  //   })
  // }

  // console.log(filtered());
