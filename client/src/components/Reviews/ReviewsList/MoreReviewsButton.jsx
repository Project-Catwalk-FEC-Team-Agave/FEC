import React from 'react';

const MoreReviews = (props) => {
  const { requestParams, setRequestParams } = props

  return(
    <button onClick={(e) => {
      e.preventDefault();
      setRequestParams({
        reviewsDisplayed: requestParams.reviewsDisplayed += 2,
        sort: requestParams.sort
      });
    }}> See More Reviews</button>
  )
}

export default MoreReviews;
