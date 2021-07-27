import React, { useState } from 'react';
import c3 from 'c3';

function ReviewsChart(props) {

  var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['ratings', 30, 200, 100, 400, 150, 250],
        ],
        type: 'bar'
    },
    axis: {
        rotated: true
      }, bar: {
        width: {
          ratio: 0.5
        }
      }
  });

  return (
    <div id="chart">Bar Chart Not Rendering</div>
  );
}

export default ReviewsChart;

// Data passed in will be # of reviews with each rating 0-6 - can destructure

