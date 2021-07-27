import React from 'react';
import Stars from '../../../Shared/stars.jsx';
import Images from './ReviewImages.jsx';
import Text from './ReviewText.jsx';
import HelpfulButton from './HelpfulButton.jsx';
import ReportButton from './ReportButton.jsx';

function ReviewTile(props) {

  return (
    <div>
      <div><Stars/><em>Date</em></div>
      <Text/>
      <picture><Images/></picture><br></br>
      <HelpfulButton/>
    </div>
  )
}

export default ReviewTile;