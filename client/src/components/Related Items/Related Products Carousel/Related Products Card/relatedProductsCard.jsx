import React from 'react';
import axios from 'axios';
import useStyles from './styles.js';
import { TOKEN } from '../../../../../../config.js';

//import { withStyles } from '@material-ui/core/styles';

import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

// import DoneAllIcon from '@material-ui/icons/DoneAll';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import stars from '../../../Shared/stars.jsx';

//product photos are located in the styles endpoint

const RelatedProductsCard = ({ product }) => {
  const classes = useStyles();
  let starCount = stars();

  let photo = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";

  return (
  <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={photo}
      >
        <IconButton style={{ color: '#f4b400' }} aria-label="settings" className={classes.overlay}>
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