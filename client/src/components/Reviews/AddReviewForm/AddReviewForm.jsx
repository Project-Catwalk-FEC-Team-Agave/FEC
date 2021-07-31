import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../../config.js';
import Rating from '@material-ui/lab/Rating';
import RecommendRadio from './RecommendRadio.jsx';
import CharacteristicsRadio from './CharacteristicsRadio.jsx';

const AddReviewForm = ({id}) => {

  //MODAL WINDOW
    return (
      <form action={postReview}>
        <h1>Write Your Review About the PRODUCT NAME</h1>
        <Rating
          name="simple-controlled"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /><br></br>
        <RecommendRadio/>
        <CharacteristicsRadio/>
        <input type="submit" value="Submit"></input>
      </form>
    )


    // Review Summary
      // text input up to 60 characters
    // Review Body (mandatory)
      // text input allowing up to 1000 chars
      // placeholder = "Why did you like the product or not?"
      // min 50 chars long to submit
      // character counter undereath (50 - chars or "minimum reached")
    // Photos
      // Text box accepting links
    // Nickname (mandatory)
      // text input up to 60 chars
      // placeholder = 'Example: jackson11!
      //below field = For privaprivacy reasons, do not use your full name or email address
    // Email (mandatory)
      // placeholder = 'Example: jackson11@email.com'
      // below field = For authentication reasons, you will not be emailed”
    // Submit review button
      // Error if any blanks, under 50 chars, not correct email format, bad images

  const postReview = (reviewData) => {
    let reqOptions = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews`,
      method: "POST",
      headers: {
        "Authorization": TOKEN
        },
      data: reviewData
    }

    axios.request(reqOptions)
    .then((response) => console.log(response))
    .catch(err => console.log(err))
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