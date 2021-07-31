import React from 'react';

function SortReviews({sort}) {

  return (
    <select onChange={(e) => {
      e.preventDefault();
      sort(e.target.value)
    }}>
      <option value="helpful">Helpful</option>
      <option value="newest">Newest</option>
      <option value="relevant">Relevant</option>
    </select>
  )
}

export default SortReviews;