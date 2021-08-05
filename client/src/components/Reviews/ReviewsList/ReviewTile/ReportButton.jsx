//this button is actually never metnioned in BRD so leaving here, but not used anywhere

import React, { useState } from 'react';
import { TOKEN } from '../../

function ReportButton(props) {

  return(
    <button>Report</button>
  )
}

export default ReportButton;

const reportReview = () => {

  let headersList = {
   "Accept": "*/*",
   "Authorization": TOKEN
  }

  let reqOptions = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${id}/report`,
    method: "PUT",
    headers: headersList,
  }

  axios.request(reqOptions)
  .then(function (response) {
    console.log('Review reported');
  })
}