import React from 'react';
import ReviewTile from './ReviewsList/ReviewTile/ReviewTile.jsx';
import SortReviews from './ReviewsList/SortReviewsButton.jsx';
import RatingsBreakdown from './RatingsBreakdown/RatingsBreakdown.jsx';

class Reviews extends React.Component {


  render() {
    return (
      <div>
        Reviews and Ratings
        <div>
          <RatingsBreakdown/> <ReviewsList/>
        </div>
      </div>
    )
  }

}

export default Reviews;