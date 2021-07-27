import React, { useState } from 'react';
import Stars from '../../Shared/stars.jsx';
import ReviewsChart from './SummaryBarChart.jsx';


function SummaryBreakdown(props) {
  return (
    <div>
      X.X<Stars/><br></br>
      <ReviewsChart/>
      XX% of Buyers Recommend
    </div>
  )
}

export default SummaryBreakdown;

/*
Needs access to reviews metadata
  Will convert that to an average star rating ((const {0, 1, 2, 3, 4, 5} = Ratings) -->SumProduct )
    Displayed in the X.X Stars text and as number of stars
    % Recommended = recommended.true / (recommended.true + recommended.false)

*/