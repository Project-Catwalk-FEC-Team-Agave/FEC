import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../../config.js';
import Rating from '@material-ui/lab/Rating';
import RecommendRadio from './RecommendRadio.jsx';
import CharacteristicsRadio from './CharacteristicsRadio.jsx';
import ReviewTextFields from './ReviewTextFields.jsx';
import NameAndEmailFields from './NameAndEmailFields.jsx';

const AddReviewForm = ({id}) => {

  //MODAL WINDOW
    return (
      <form action={postReview}>
        <h1>Write Your Review About the PRODUCT NAME</h1>
        <Rating required name="simple-controlled"
        onChange={(event, newValue) => {
            setValue(newValue);
          }}/><br></br>
        <RecommendRadio/>
        <CharacteristicsRadio />
        <ReviewTextFields/>
        {/* <AddReviewPhotos/> */}
        <NameAndEmailFields/>
        <input type="submit"></input>
      </form>
    )

    // Photos
      // Text box accepting links


  const postReview = (e) => {
    console.log(e)
    console.log("submission")
    e.preventDefault();

    // let reqOptions = {
    //   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews`,
    //   method: "POST",
    //   headers: {
    //     "Authorization": TOKEN
    //     },
    //   data: reviewData
    // }

    // axios.request(reqOptions)
    // .then((response) => console.log(response))
    // .catch(err => console.log(err))
  }
}

export default AddReviewForm;

/* sample data
{
  product_id: 11001,
  rating: 3,
  summary: '',
  body: '',
  recommend: false,
  name: '',
  email: '',
  photos: [''],
  characteristics: {
    Size: 3,
    Width: 3,
    Comfort: 3,
    Quality: 3,
    Length: 3,
    Fit: 3
  }
}
*/