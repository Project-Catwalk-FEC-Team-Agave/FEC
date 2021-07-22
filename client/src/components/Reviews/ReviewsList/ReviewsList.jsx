import React from 'react';
import SortReviews from './SortReviewsButton.jsx';
import AddReviews from './AddReviewButton.jsx';
import MoreReviews from './MoreReviewsButton.jsx';
import ReviewsTile from './ReviewTile/ReviewTile.jsx'

class ReviewsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <SortReviews/>
        <ReviewsTile/>
        <ReviewsTile/>
        <div>
          <AddReviews/> <MoreReviews/>
        </div>
      </div>
      )
  }
}

export default ReviewsList;