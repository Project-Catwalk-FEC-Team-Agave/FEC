import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortReviews from './SortReviewsButton.jsx';
import AddReview from './AddReviewButton.jsx';
import MoreReviews from './MoreReviewsButton.jsx';
import ReviewTile from './ReviewTile/ReviewTile.jsx'
import { TOKEN } from '../../../../../config.js'

function ReviewsList ({ id, metaData }) {

  const [sort, setSort] = useState('relevant');
  const [reviewsDisplayed, setReviewsDisplayed] = useState(2);
  const [reviews, setReviews] = useState([]);
  const [toggleMoreReviews, setToggleMoreReviews] = useState(true);

  const getReviews = (id, sort, count) => {
    let reqOptions = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=${id}&sort=${sort}&count=${count}`,
      method: "GET",
      headers: {
       "Authorization": TOKEN
      }
    }

    axios.request(reqOptions)
    .then((response) => {
      const {data} = response
      setReviews(data.results)
      if (toggleMoreReviews) {
        setToggleMoreReviews(false);
      } else {
        setReviewsDisplayed(reviewsDisplayed + 2)
        setToggleMoreReviews(true);
      }
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getReviews(id, sort, reviewsDisplayed);
  }, []);

  return (
    <div>
      <SortReviews sort={sort} setSort={setSort}
        reviewsDisplayed={reviewsDisplayed} setReviewsDisplayed={setReviewsDisplayed}
        getReviews={getReviews} id={id}
        />
      {reviews.map((review, i) => {
        return <ReviewTile review={review} key={i}/>
      })}
      <AddReview id={id} metaData={metaData}/>
      {toggleMoreReviews === true &&
        <MoreReviews id={id} sort={sort}
        reviewsDisplayed={reviewsDisplayed}
        getReviews={getReviews}/>
      }
    </div>
    )
}

export default ReviewsList;

//API for get reviews



