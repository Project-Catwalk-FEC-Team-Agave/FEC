import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import SummaryBreakdown from './RatingsBreakdown/SummaryBreakdown.jsx';
import AddReviewForm from './AddReviewForm/AddReviewForm.jsx';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';

function Reviews(props) {

  const id = 11005  ; //placeholder - change when everything tied together
  const [metaData, changeMetaData] = useState({
    recommended: {true: 0, false: 0},
    characteristics: {},
    ratings: {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    });

  const getMetaData = (id) => {
    let reqOptions = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=${id}`,
      method: "GET",
      headers: {
        "Authorization": TOKEN
        }
    }

    axios.request(reqOptions)
    .then((response) => {
      changeMetaData(response.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getMetaData(id)
    }, []);

  return (
    <div>
      <h3>Reviews and Ratings</h3>
        <Grid container spacing={10}>
          <Grid xs={6} item>
            <SummaryBreakdown metaData={metaData}/>
          </Grid>
          <Grid xs={6} item>
            <ReviewsList id={id} metaData={metaData}/>
          </Grid>
        </Grid>
    </div>
  )
}

export default Reviews;

//After merge need to move API calls into the correct file