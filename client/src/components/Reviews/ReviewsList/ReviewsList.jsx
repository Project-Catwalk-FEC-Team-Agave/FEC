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
      <SortReviews sort={sort} setRequestParams={setRequestParams}/><br></br><br></br>
      {reviews.map((review, i) => {
        return <><ReviewTile review={review} key={i}/><br></br></>
      })}
      <div>
        <AddReview id={id} metaData={metaData}/><span style={{paddingLeft: 5, paddingRight: 5}}></span>
        {toggleMoreReviews === true &&
          <MoreReviews style={{paddingLeft: "50px"}}
            requestParams={requestParams} setRequestParams={setRequestParams}/>
        }
      </div>
    </div>
    )
}

export default ReviewsList;

//API for get reviews



