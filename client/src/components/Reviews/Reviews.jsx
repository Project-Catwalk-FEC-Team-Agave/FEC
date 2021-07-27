import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import SummaryBreakdown from './RatingsBreakdown/SummaryBreakdown.jsx';

function Reviews({id}) {


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

//After merge need to move API calls into the correct file