import React from 'react';

function SortReviews({ setRequestParams }) {

  return (
    <select onChange={(e) => {
      e.preventDefault();
      setRequestParams({
        reviewsDisplayed: 2,
        sort: e.target.value
      })
    }}>
      <option value="relevant">Relevant</option>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
    </select>
  )
}

export default SortReviews;