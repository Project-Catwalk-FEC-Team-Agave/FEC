import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import { usePoroductStore, useStylesStore } from './store';
import Grid from '@material-ui/core/Grid';

const Overview = (props) => {
  const name = usePoroductStore((state) => state.name);
  const categogy = usePoroductStore((state) => state.category);
  const slogan = usePoroductStore((state) => state.slogan);
  const description = usePoroductStore((state) => state.description);

  return (
    <Grid container spacing={3}>
      <Grid item xs={7}>
        <ImageGallery />
      </Grid>
      <Grid item xs={5}>
        <div className="product-container">
          <ProductInfo />
          <StyleSelector />
          <AddToCart />
        </div>
      </Grid>
    </Grid>
    // <div>
    //   <h3>Product Overview</h3>

    // </div>
  );
};

export default Overview;
