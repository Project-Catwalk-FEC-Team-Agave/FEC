import React, { useState } from 'react';

function ProductDetails({characteristics}) {

  return characteristics.map((characteristic, i) => {
    return <div key={i}>{characteristic[0]}: {characteristic[1]}</div>
  })
}

export default ProductDetails;

// Currently just displaying as a text value --> HOW TO CREATE THE SCALE ELEMENT????