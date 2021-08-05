import React from 'react';

const MoreReviews = (props) => {
  const { requestParams, setRequestParams } = props

  return(
    <button onClick={(e) => {
      e.preventDefault();
      console.log(`Count: ${requestParams.reviewsDisplayed} `)
      var tempObj = requestParams;
      requestParams.reviewsDisplayed = requestParams.reviewsDisplayed + 2;
      setRequestParams(tempObj);
    }}> See More Reviews</button>
  )
}

export default MoreReviews;
