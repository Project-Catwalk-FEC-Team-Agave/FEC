import React, { useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../../config.js';
import Rating from '@material-ui/lab/Rating';
import RecommendRadio from './RecommendRadio.jsx';
import CharacteristicsRadio from './CharacteristicsRadio.jsx';
import ReviewTextFields from './ReviewTextFields.jsx';
import NameAndEmailFields from './NameAndEmailFields.jsx';
import create from 'zustand';

const AddReviewForm = ({ id, characteristics, name }) => {

  const [overallRating, changeOverallRating] = useState(0);
  const [recommendation, changeRecommendation] = useState(false);
  const [reviewSummary, changeReviewSummary] = useState('');
  const [reviewBody, changeReviewBody] = useState(null);
  const [reviewerName, changeReviewerName] = useState(null);
  const [reviewerEmail, changeReviewerEmail] = useState(null);
  const [reviewPhotos, changeReviewPhotos] = useState( [] );
  const [detailRatings, changeDetailRatings] = useState({
  });

  var reviewData = {
    product_id: id,
    rating: overallRating,
    summary: reviewSummary,
    body: reviewBody,
    recommend: recommendation,
    name: reviewerName,
    email: reviewerEmail,
    photos: reviewPhotos,
    characteristics: detailRatings
  }

  const postReview = (e) => {
    e.preventDefault();

    let reqOptions = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews`,
      method: "POST",
      headers: {
        "Authorization": TOKEN
        },
      data: reviewData
    }

    axios(reqOptions)
    .then((response) => {
      alert('Review submitted!')
      document.getElementById('submitReview').reset() })
    .catch(err => {
      alert('Please make sure all fields are filled out properly!')
      console.log(err)})
  }

    return (
      <form id="submitReview">
        <h1>Write Your Review About the {name}</h1>
        <div>Overall Rating*</div><Rating required name="simple-controlled"
          onChange={(event, newValue) => { changeOverallRating(newValue); }}/><br></br>
        <RecommendRadio changeRecommendation={changeRecommendation} />
        <CharacteristicsRadio characteristics={characteristics} changeDetailRatings={changeDetailRatings} detailRatings={detailRatings}/>
        <ReviewTextFields
          changeReviewSummary={changeReviewSummary}
          changeReviewBody={changeReviewBody}/>
        {/* <AddReviewPhotos/> */}
        <NameAndEmailFields
          changeReviewerEmail={changeReviewerEmail}
          changeReviewerName={changeReviewerName}/>
        <input type="submit" value="Submit Review" onClick={(event) => {postReview(event)}}></input>
      </form>
    )

    // Photos
      // Text box accepting links
}

export default AddReviewForm;
