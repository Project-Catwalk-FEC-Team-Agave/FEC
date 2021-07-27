import React, { useState } from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import SummaryBreakdown from './RatingsBreakdown/SummaryBreakdown.jsx';

function Reviews(props) {

  return (
    <div>
      <h3>Reviews and Ratings</h3>
      <div>
        <SummaryBreakdown/> <ReviewsList/>
      </div>
    </div>
  )
}

export default Reviews;
