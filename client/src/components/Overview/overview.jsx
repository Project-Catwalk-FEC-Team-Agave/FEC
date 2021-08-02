import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddToCart from './AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import { data } from './sampleStyleData';
import { usePoroductStore, useStylesStore } from './store';

const Overview = (props) => {
  const name = usePoroductStore((state) => state.name);
  const categogy = usePoroductStore((state) => state.category);
  const slogan = usePoroductStore((state) => state.slogan);
  const description = usePoroductStore((state) => state.description);

  return (
    <div>
      <h3>Product Overview</h3>
      <div className="side-bar-container">
        <AddToCart />
      </div>

      {/* <ImageGallery image={this.state.images[0]} /> */}
      {/* <ProductInfo /> */}
    </div>
  );
};

export default Overview;
