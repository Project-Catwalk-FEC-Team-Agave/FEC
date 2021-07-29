import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortReviews from './SortReviewsButton.jsx';
import AddReviews from './AddReviewButton.jsx';
import MoreReviews from './MoreReviewsButton.jsx';
import ReviewsTile from './ReviewTile/ReviewTile.jsx'

function ReviewsList ({id}) {

  const [sort, setSort] = useState('Relevant');
  const [totalReviews, setTotalReviews] = useState(0);
  const [reviewsDisplayed, setReviewsDisplayed] = useState(0);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    getReviews(id);
  })
  return (
    <div>
      <SortReviews/>
      <br></br>
      <br></br>
      <ReviewsTile/>
      <br></br>
      <ReviewsTile/>
      <br></br>
      <AddReviews/> <MoreReviews/>
    </div>
    )
}

export default ReviewsList;

//API for get reviews
const getReviews = (id) => {
  let reqOptions = {
    url: "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11001",
    method: "GET",
    headers: {
     "Authorization": "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"
    }
  }

  axios.request(reqOptions)
  .then((response) => {
    setReviews(...reviews, response.results);
    setTotalReviews(setTotalReviews += 2);
    setReviewsDisplayed(setReviewsDisplayed += 2);
  })
}



