import React, { useState } from 'react';
import Slider from '@material-ui/core/Slider';

function ProductDetails({characteristics}) {

  return characteristics.map((characteristic, i) => {
    return (
    <>
      <div key={i}>{characteristic[0]}</div>
      <Slider
        value={Number(characteristic[1])}
        getAriaLabel={() => { return characteristic[1]}}
        valueLabelDisplay="on"
        getAriaValueText={() => { return characteristic[1] } }
        step={1}
        marks
        min={1}
        max={5}
        disabled
      />
    </>
    )
  })
}

export default ProductDetails;

// Currently just displaying as a text value --> HOW TO CREATE THE SCALE ELEMENT????