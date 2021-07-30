import React from 'react';
import axios from 'axios';
import useStyles from './styles.js';
import { TOKEN } from '../../../../../../config.js';

import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

// import DoneAllIcon from '@material-ui/icons/DoneAll';
import StarBorderIcon from '@material-ui/icons/StarBorder';

//product photos are located in the styles endpoint

const RelatedProductsCard = ({ stars, product }) => {
  const classes = useStyles();
  let starCount = stars();

  let photo = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";



  return (
  <Card className={classes.root}>

    <CardHeader
        action={
          <IconButton aria-label="settings">
            <StarBorderIcon aria-label="compare to current product"/>
          </IconButton>
        }
        title={product.name}
      />
      <CardMedia
        className={classes.media}
        image={photo}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {'$123'}
        </Typography>
        <>
          {starCount}
        </>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          // className={clsx(classes.expand, {
          //   [classes.expandOpen]: expanded,
          // })}
          // onClick={handleExpandClick}
          // aria-expanded={expanded}
          // aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}

export default RelatedProductsCard;