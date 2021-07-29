import React from 'react';
import axios from 'axios';
//https://material-ui.com/components/cards/
import { Card, CardContent, CardActions, CardMedia, Button, Typography} from '@material-ui/core';
import { TOKEN } from '../../../../../../config.js';
//product photos are located in the styles endpoint

const RelatedProductsCard = ({ stars, product }) => {
  let starCount = stars();

  let photo = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";

  return (
    <>
      <div>
        <img src={photo} width='10%' height='10%'/>
      </div>
      <div>
        {starCount}
      </div>

    </>
  );
}

export default RelatedProductsCard;