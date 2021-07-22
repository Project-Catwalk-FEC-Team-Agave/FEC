import React from 'react';
import Stars from '../../../Shared/stars.jsx';
import Images from './ReviewImages.jsx';
import Text from './ReviewText.jsx';

function ReviewTile(props) {

  return (
    <div>
      <div><Stars/><em>Date</em></div>
      <Text/>
      <picture><Images/></picture>
    </div>
  )
}

export default ReviewTile;