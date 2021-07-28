import React from 'react';

const MoreReviews = (props) => {
  const {id, currentPage, sort, getReviews} = props

  return(
    <button onClick={(e) => {
      e.preventDefault();
      getReviews(id, sort, currentPage);
    }}> See More Reviews</button>
  )
}

export default MoreReviews;
