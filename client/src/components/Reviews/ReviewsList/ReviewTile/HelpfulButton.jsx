import React, { useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../../../config.js'

function HelpfulButton({review_id, helpful}) {

  const [submitted, changeSubmitted] = useState(false);

  const markHelpful = (e) => {
    e.preventDefault();

    let reqOptions = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${review_id}/helpful`,
      method: "PUT",
      headers: {
        "Authorization": TOKEN
       },
    }

    axios.request(reqOptions)
    .then(function (response) {
      changeSubmitted(true);
      console.log('Review marked helpful');
    })
  }


  const markUnhelpful = (e) => {
    e.preventDefault();
    changeSubmitted(true);
  }

  return(
    <div>Was this review helpful?
      <button onClick={markHelpful}>Yes</button>{helpful}
      <button onClick={markUnhelpful}>No</button>
    </div>

  )

}

export default HelpfulButton;

//API put call - need to set up Yes/No so only clickable if not submitted

