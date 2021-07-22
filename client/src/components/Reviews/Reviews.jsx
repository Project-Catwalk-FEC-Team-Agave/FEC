import React from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import RatingsBreakdown from './RatingsBreakdown/RatingsBreakdown.jsx';

class Reviews extends React.Component {


  render() {
    return (
      <div>
        <h3>Reviews and Ratings</h3>
        <div>
          <RatingsBreakdown/> <ReviewsList/>
        </div>
      </div>
    )
  }

}

export default Reviews;