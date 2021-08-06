import React from 'react';
import { usePoroductStore, useStylesStore } from './store';

const ProductInfo = () => {
  const name = usePoroductStore((state) => state.name);
  const category = usePoroductStore((state) => state.category);
  const slogan = usePoroductStore((state) => state.slogan);
  const description = usePoroductStore((state) => state.description);
  const price = useStylesStore((state) => state.original);
  const sale = useStylesStore((state) => state.sale);
  return (
    <div>
      <h3 className="category">{category}</h3>
      <p className="name">{name}</p>
      <div className="price-container">
        {sale !== null ? (
          <div className="price-container">
            <div className="sales-price">${sale}</div>
            <div className="on-sale">${price}</div>
          </div>
        ) : (
          <div className="price">${price}</div>
        )}
      </div>
    </div>
  );
};
export default ProductInfo;

// import { usePoroductStore } from './store';
// in your functional components
// const id = usePoroductStore((state) => state.id);
// const updateId = usePoroductStore((state) => state.updateId);
