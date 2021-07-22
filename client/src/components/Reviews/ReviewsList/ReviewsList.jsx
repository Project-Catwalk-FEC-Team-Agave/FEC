import React, { useState } from 'react';
import SortReviews from './SortReviewsButton.jsx';
import AddReviews from './AddReviewButton.jsx';
import MoreReviews from './MoreReviewsButton.jsx';
import ReviewsTile from './ReviewTile/ReviewTile.jsx'

function ReviewsList (props) {

  return (
    <div>
      <SortReviews/>
      <br></br>
      <br></br>
      <ReviewsTile/>
      <br></br>
      <ReviewsTile/>
      <br></br>
      <AddReviews/> <MoreReviews/>
    </div>
    )
}

export default ReviewsList;