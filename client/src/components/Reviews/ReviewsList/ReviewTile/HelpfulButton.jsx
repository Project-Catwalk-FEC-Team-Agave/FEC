import React, { useState } from 'react';
import axios from 'axios';

function HelpfulButton({id}) {

  const [submitted, changeSubmitted] = useState(false);

  return(
    <div>Was this review helpful?
      <button>Yes</button>COUNT<button>No</button>COUNT
    </div>

  )

}

export default HelpfulButton;

//API put call - need to set up Yes/No so only clickable if not submitted

const markHelpful = () => {

  let headersList = {
   "Accept": "*/*",
   "Authorization": "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"
  }

  let reqOptions = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${id}/helpful`,
    method: "PUT",
    headers: headersList,
  }

  axios.request(reqOptions)
  .then(function (response) {
    changeSubmitted = true;
    console.log('Review marked helpful');
  })
}


const markUnhelpful = () => {
  changeSubmitted = true;
}