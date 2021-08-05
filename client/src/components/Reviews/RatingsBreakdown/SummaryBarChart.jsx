import React, { useState } from 'react';
import c3 from 'c3';

function ReviewsChart({ratings}) {

  var labels = Object.keys(ratings);
  var data = Object.values(ratings);

  var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['ratings', ...data],
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
    <div id="chart"></div>
  );
}

export default ReviewsChart;

// Data passed in will be # of reviews with each rating 0-6 - can destructure

