import React from 'react';
import Stars from '../../../Shared/stars.jsx';
import Image from './ReviewImages.jsx';
import HelpfulButton from './HelpfulButton.jsx';
import Rating from '@material-ui/lab/Rating';

function ReviewTile(props) {
//Still need to add in conditional for user recommended and response
  const {summary, body, date, rating, photos, reviewer_name, helpfulness, review_id} = props.review

  if (photos) {
    return (
      <div style={{border: '4px #5975FF ridge'}}>
        <div>
          <Rating style={{paddingTop: '3px'}} name="read-only" value={rating} readOnly precision={0.25}/>
          <em style={{paddingLeft: '5px'}}>{date.slice(0, 10)}</em>
        </div>
        <strong>{summary}</strong>
        <div>{body}</div>
        {photos.map((photo, i) => {
          <picture><Image url={photo.url}/></picture>
        })}
        {reviewer_name}
        <HelpfulButton helpful={helpfulness} review_id={review_id}/>
      </div>
    )
  } else {
    return (
      <div>
        <div>
          <Rating name="read-only" value={rating} readOnly />
          <em>{date}</em>
        </div>
        <strong>{summary}</strong>
        <div>{body}</div>
        <HelpfulButton helpful={helpfulness} review_id={review_id}/>
      </div>
    )
  }
}

export default ReviewTile;