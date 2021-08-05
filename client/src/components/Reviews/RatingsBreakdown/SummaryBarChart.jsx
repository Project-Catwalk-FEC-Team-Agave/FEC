import React, { useState } from 'react';
import c3 from 'c3';

function ReviewsChart({ratings}) {


  var chart = c3.generate({
    bindto: "#chart",
    data: {
        columns: [
            ['Ratings', ...Object.values(ratings)],
        ],
        type: 'bar',
        colors: {
          'Ratings': '#bdbdbd'
        }
    },
    legend: {
      show: false
    },
    axis: {
        rotated: true,
        x: {
          tick: {
            format: function(d) { return d + 1 + " Star"; }
          },
        }
      },
      bar: {
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

