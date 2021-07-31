import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Stars from '../../Shared/stars.jsx';
import ReviewsChart from './SummaryBarChart.jsx';
import ProductDetails from './ProductDetails.jsx';
import { TOKEN } from '../../../../../config.js'

function SummaryBreakdown({id}) {

  const [ratings, setRatings] = useState({5: '1'});
  const [characteristics, setCharacteristics] = useState([["Fit", 3], ["Style", 5]]);
  const [recommended, setRecommended] = useState(75);
  const [averageRating, setAverageRatings] = useState(0);

  const average = Math.round(10*
    (Object.values(ratings).reduce((accumulator, rating, i) => {
    return Number(accumulator) + (rating * i)
    }, 0) /
    Object.values(ratings).reduce((accumulator, rating) => {
      return Number(accumulator) + Number(rating)
    })))/10

  const getMetaData = (id) => {
    let reqOptions = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=${id}`,
      method: "GET",
      headers: {
        "Authorization": TOKEN
        }
    }

    axios.request(reqOptions)
    .then((response) => {
      const {data} = response
      setRatings(data.ratings);
      var characteristics = [];
      for (var key in data.characteristics) {
        characteristics.push([key, data.characteristics[key].value.slice(0,3)])
      }
      setCharacteristics(characteristics);
      setRecommended(Math.floor(data.recommended.true /
        (Number(data.recommended.true) + Number(data.recommended.false)) * 100))
   })
   .catch(err => console.log(err))
  }

  useEffect(() => {
    getMetaData(id)
    }, []);

  return (
    <div>
      {average}<Stars value={average}/><br></br>
      <ReviewsChart ratings={ratings}/>
        {recommended}% of Buyers Recommend
      <ProductDetails characteristics={characteristics}/>
    </div>
  )
}

export default SummaryBreakdown;




/*
Needs access to reviews metadata
  Will convert that to an average star rating ((const {0, 1, 2, 3, 4, 5} = Ratings) -->SumProduct )
    Displayed in the X.X Stars text and as number of stars
    % Recommended = recommended.true / (recommended.true + recommended.false)
  Bar Chart Can Display Raw Ratings #'s
  Product Breakdown
    Create subcomponent and map list of ratings
*/