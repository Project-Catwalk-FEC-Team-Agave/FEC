import React from 'react';

function SortReviews(props) {

  return (
    <select onChange={(e) => {
      e.preventDefault();
      props.getReviews(props.id, e.target.value, props.currentPage)
    }}>
      <option>Helpful</option>
      <option>Newest</option>
      <option>Relevant</option>
    </select>
  )
}

export default SortReviews;