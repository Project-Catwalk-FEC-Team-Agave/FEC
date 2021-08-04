import React from 'react';
import { usePoroductStore, useStylesStore } from './store';

const ProductInfo = () => {
  const name = usePoroductStore((state) => state.name);
  const category = usePoroductStore((state) => state.category);
  const slogan = usePoroductStore((state) => state.slogan);
  const description = usePoroductStore((state) => state.description);
  const price = usePoroductStore((state) => state.price);
  return (
    <div>
      <h3 className="category">{category}</h3>
      <p className="name">{name}</p>
      <h3 className="price">${price}</h3>
    </div>
  );
};
export default ProductInfo;
