import React from 'react';
import Stars from '../../../Shared/stars.jsx';
import Image from './ReviewImages.jsx';
import HelpfulButton from './HelpfulButton.jsx';

function ReviewTile(props) {

  const {summary, body, date, rating, photos} = props.review

  return (
    <div>
      <div><Stars value={rating}/><em>{date}</em></div>
      <strong>{summary}</strong>
      <div>{body}</div>
      {photos.map((photo, i) => {
        <picture><Image url={photo.url}/></picture>
      })}
      <HelpfulButton/>
    </div>
  )
}

export default ReviewTile;