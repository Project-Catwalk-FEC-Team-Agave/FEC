import React, { useState } from 'react';
import axios from 'axios';
import TOKEN from '../../../../../../config.js'

function HelpfulButton({id}) {

  const [submitted, changeSubmitted] = useState(false);

  return(
    <div>Was this review helpful?
      <button onClick={markHelpful}>Yes</button>COUNT
      <button onClick={markUnhelpful}>No</button>COUNT
    </div>

  )

}

export default HelpfulButton;

//API put call - need to set up Yes/No so only clickable if not submitted

const markHelpful = () => {

  let reqOptions = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${id}/helpful`,
    method: "PUT",
    headers: {
      "Authorization": TOKEN
     },
  }

  axios.request(reqOptions)
  .then(function (response) {
    changeSubmitted = true;
    console.log('Review marked helpful');
  })
}


const markUnhelpful = (e) => {
  e.preventDefault();
  changeSubmitted = true;
}