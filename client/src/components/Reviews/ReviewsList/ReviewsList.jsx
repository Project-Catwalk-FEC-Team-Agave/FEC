import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortReviews from './SortReviewsButton.jsx';
import AddReview from './AddReviewButton.jsx';
import MoreReviews from './MoreReviewsButton.jsx';
import ReviewsTile from './ReviewTile/ReviewTile.jsx'
import { TOKEN } from '../../../../../config.js'

function ReviewsList ({id}) {

  const [sort, setSort] = useState('Relevant');
  const [totalReviews, setTotalReviews] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([]);

  const getReviews = (id, sort, page) => {
    let reqOptions = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=${id}&page=${page}&sort=${sort}`,
      method: "GET",
      headers: {
       "Authorization": TOKEN
      }
    }

    axios.request(reqOptions)
    .then((response) => {
      const {data} = response

      if (data.results.length) {
        setReviews(...reviews, data.results);
      }
      setTotalReviews(data.count);
      setCurrentPage(currentPage + 1);
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getReviews(id, sort, currentPage);
  }, []);

  return (
    <div>
      <SortReviews sort={setSort}/>
      {reviews.map((review, i) => {
        return <ReviewsTile review={review} key={i}/>
      })}
      <AddReview/>
      <MoreReviews id={id} sort={sort}
        currentPage={currentPage} getReviews={getReviews}/>
    </div>
    )
}

export default ReviewsList;

//API for get reviews



