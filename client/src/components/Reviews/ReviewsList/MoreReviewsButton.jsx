import React from 'react';

const MoreReviews = (props) => {
  const { id, sort, getReviews, reviewsDisplayed } = props

  return(
    <button onClick={(e) => {
      e.preventDefault();
      getReviews(id, sort, reviewsDisplayed);
    }}> See More Reviews</button>
  )
}

export default MoreReviews;
