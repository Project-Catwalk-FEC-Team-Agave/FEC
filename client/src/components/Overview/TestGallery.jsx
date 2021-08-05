import React from 'react';
import { usePoroductStore, useStylesStore } from './store';

const TestGallery = () => {
  const photos = useStylesStore((state) => state.photos);

  return (
    <div>
      <button>Up</button>
      <button>Down</button>
    </div>
  );
};
export default TestGallery;
