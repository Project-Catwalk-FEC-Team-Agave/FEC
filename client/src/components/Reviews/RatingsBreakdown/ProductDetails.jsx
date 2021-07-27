import React, { useState } from 'react';

function ProductDetails(props) {
  [characteristics, setCharacteristics] = useState([]);

  return characteristics.map((characteristic, i) => {
    return <Element name={characteristic} rating={characteristic.value}/>
  })
}

export default ProductDetails;

// HOW TO CREATE THE SCALE ELEMENT????