import React, { useState } from 'react';

function Image({url}) {
  return(
    <a>
      <img width="40px" src={url}></img>
    </a>
  )
}

export default Image;