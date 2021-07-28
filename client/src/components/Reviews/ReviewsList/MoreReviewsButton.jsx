import React from 'react';

const MoreReviews = (props) => {
  const {id, currentPage, sort, getReviews} = props

  return(
    <button onClick={(e) => {
      e.preventDefault();
      getReviews(id, sort, currentPage + 1);
    }}> See More Reviews</button>
  )
}

export default MoreReviews;

id
sort
currentPage
getReviews