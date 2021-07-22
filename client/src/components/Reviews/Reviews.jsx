import React, { useState } from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import RatingsBreakdown from './RatingsBreakdown/RatingsBreakdown.jsx';

function Reviews(props) {

  return (
    <div>
      <h3>Reviews and Ratings</h3>
      <div>
        <RatingsBreakdown/> <ReviewsList/>
      </div>
    </div>
  )
}

export default Reviews;
