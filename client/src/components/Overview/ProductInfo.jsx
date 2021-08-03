import React from 'react';
import { usePoroductStore, useStylesStore } from './store';

const ProductInfo = () => {
  const name = usePoroductStore((state) => state.name);
  const categogy = usePoroductStore((state) => state.category);
  const slogan = usePoroductStore((state) => state.slogan);
  const description = usePoroductStore((state) => state.description);

  return (
    <div>
      <h3>{name}</h3>

      <p>{description}</p>
    </div>
  );
};
export default ProductInfo;
