import React from 'react';
import axios from 'axios';
import useStyles from './styles.js';
//https://material-ui.com/components/cards/

import { TOKEN } from '../../../../../../config.js';
import DeleteIcon from '@material-ui/icons/Delete';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
            <MoreVertIcon />
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
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
        </IconButton>
      </CardActions>

    </Card>


    // <>
    //   <div>
    //     <img src={photo} width='10%' height='10%'/>
    //   </div>
    //   <div>
    //     {starCount}
    //   </div>

    // </>
  );
}

export default RelatedProductsCard;