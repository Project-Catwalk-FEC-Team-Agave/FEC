import React from 'react';

function SortReviews({ id, sort, setSort, getReviews, reviewsDisplayed, setReviewsDisplayed }) {

  return (
    <select onChange={(e) => {
      e.preventDefault();
      setSort(e.target.value);
      setReviewsDisplayed(2);
      getReviews(id, sort, 2)
    }}>
      <option value="relevant">Relevant</option>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
    </select>
  )
}

export default SortReviews;