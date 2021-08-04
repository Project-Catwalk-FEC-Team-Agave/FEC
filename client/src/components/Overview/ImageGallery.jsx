import React from 'react';
import { usePoroductStore, useStylesStore } from './store';

const ImageGallery = () => {
  const photo = useStylesStore((state) => state.photos[0].url);
  return (
    <div>
      <h3>Image gallery</h3>
      <img src={photo}></img>
    </div>
  );
};
export default ImageGallery;
