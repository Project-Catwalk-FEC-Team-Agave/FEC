import React from 'react';

function SortReviews({sort}) {

  return (
    <select onChange={(e) => {
      e.preventDefault();
      sort(e.target.value)
    }}>
      <option>Helpful</option>
      <option>Newest</option>
      <option>Relevant</option>
    </select>
  )
}

export default SortReviews;