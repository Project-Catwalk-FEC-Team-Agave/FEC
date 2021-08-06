import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Stars from '../../Shared/stars.jsx';
import ReviewsChart from './SummaryBarChart.jsx';
import ProductDetails from './ProductDetails.jsx';
import Rating from '@material-ui/lab/Rating';


function SummaryBreakdown({ metaData }) {

  const { ratings, recommended, characteristics } = metaData;

  const average = (Math.round(10 *
      (Object.values(ratings).reduce((accumulator, rating, i) => {
        return Number(accumulator) + (rating * i) }, 0) /
      Object.values(ratings).reduce((accumulator, rating) => {
        return Number(accumulator) + Number(rating)
      }))) / 10);

  const characteristicRatings = [];
  for (var key in characteristics) {
    characteristicRatings.push([key, characteristics[key].value.slice(0,3)])
  }

  return (
    <div>
      <Rating name="read-only" value={3} readOnly precision={0.25}/>
      <br></br>
      <ReviewsChart ratings={ratings}/><br></br>
        <strong>{Math.round((recommended.true) / (Number(recommended.true) + Number(recommended.false)) * 100)}%</strong> of Buyers Recommend this Product
        <br></br>
        <br></br>
      <ProductDetails characteristics={characteristicRatings}/>
    </div>
  )
}

export default SummaryBreakdown;