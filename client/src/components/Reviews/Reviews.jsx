import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList/ReviewsList.jsx';
import SummaryBreakdown from './RatingsBreakdown/SummaryBreakdown.jsx';
import Grid from '@material-ui/core/Grid';

function Reviews(props) {

  const id = 11001; //placeholder - change when everything tied together

  return (
    <div>
      <h3>Reviews and Ratings</h3>
      <div>
        <Grid container spacing={10}>
          <Grid xs={6} item>
            <SummaryBreakdown id={id}/>
          </Grid>
          <Grid xs={6} item>
            <ReviewsList id={id}/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Reviews;

//After merge need to move API calls into the correct file