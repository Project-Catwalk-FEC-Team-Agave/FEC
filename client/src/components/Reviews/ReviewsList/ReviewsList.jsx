import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortReviews from './SortReviewsButton.jsx';
import AddReview from './AddReviewButton.jsx';
import MoreReviews from './MoreReviewsButton.jsx';
import ReviewTile from './ReviewTile/ReviewTile.jsx'
import { TOKEN } from '../../../../../config.js'

function ReviewsList ({ id, metaData, totalReviews }) {

  const [requestParams, setRequestParams] = useState({
    sort: 'relevant',
    reviewsDisplayed: 2,
  })
  const [toggleMoreReviews, setToggleMoreReviews] = useState(true);
  const [reviews, setReviews] = useState([]);

  const { sort, reviewsDisplayed } = requestParams;

  const getReviews = (id, sort, count, totalReviews) => {
    console.log(`Getting Review! Sorting by ${sort} and getting ${count} total reviews` )
    let reqOptions = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=${id}&sort=${sort}&count=${totalReviews}`,
      method: "GET",
      headers: {
       "Authorization": TOKEN
      }
    }

    axios.request(reqOptions)
    .then((response) => {
      const {data} = response;
      setReviews(data.results.slice(0, count));
      setTotalReviews(Object.values(metaData.ratings).reduce((accumulator, rating) => {
        return Number(accumulator) + Number(rating);
      }))
      if (data.results.length < reviewsDisplayed) {
        setToggleMoreReviews(false);
      } else {
        setToggleMoreReviews(true);
      }
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getReviews(id, sort, reviewsDisplayed, totalReviews)
  }, [requestParams]);

  return (
    <div>
      <SortReviews sort={sort} setRequestParams={setRequestParams}/>
      {reviews.map((review, i) => {
        return <ReviewTile review={review} key={i}/>
      })}
      <AddReview id={id} metaData={metaData}/>
      {toggleMoreReviews === true &&
        <MoreReviews
          requestParams={requestParams} setRequestParams={setRequestParams}/>
      }
    </div>
    )
}

export default ReviewsList;

//API for get reviews



