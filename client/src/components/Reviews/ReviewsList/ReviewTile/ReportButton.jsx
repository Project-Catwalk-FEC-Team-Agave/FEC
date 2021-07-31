//this button is actually never metnioned in BRD so leaving here, but not used anywhere

import React, { useState } from 'react';
function ReportButton(props) {

  return(
    <button>Report</button>
  )
}

export default ReportButton;

const reportReview = () => {

  let headersList = {
   "Accept": "*/*",
   "Authorization": "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"
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