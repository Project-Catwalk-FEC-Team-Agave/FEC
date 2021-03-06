import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import { usePoroductStore, useStylesStore, useReviewData } from './store';
import Grid from '@material-ui/core/Grid';
import TestGallery from './TestGallery.jsx';
import Rating from '@material-ui/lab/Rating';

const Overview = (props) => {
  const name = usePoroductStore((state) => state.name);
  const categogy = usePoroductStore((state) => state.category);
  const slogan = usePoroductStore((state) => state.slogan);
  const description = usePoroductStore((state) => state.description);
  const getData = useStylesStore((state) => state.getData);
  const fetchStyle = useStylesStore((state) => state.fetchCurrentStyle);
  const getProductData = usePoroductStore((state) => state.getProductData);
  const averageReview = useReviewData((state) => state.avergae);
  const getReviewData = useReviewData((state) => state.getReviewData);
  console.log('review', averageReview);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getProductData();
  }, []);
  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <div className="overview-container">
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <ImageGallery />
        </Grid>
        <Grid item xs={5}>
          <div className="product-container">
            <Rating name="read-only" value={4.5} readOnly precision={0.25} />
            <ProductInfo />
            <StyleSelector />
            <AddToCart />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
