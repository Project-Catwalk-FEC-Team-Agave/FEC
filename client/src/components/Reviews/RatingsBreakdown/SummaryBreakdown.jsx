import React, { useState, useEffect } from 'react';
import Stars from '../../Shared/stars.jsx';
import ReviewsChart from './SummaryBarChart.jsx';
import ProductDetails from './ProductDetails.jsx';


function SummaryBreakdown({id}) {

  const [ratings, setRatings] = useState({});
  const [characteristics, setCharacteristics] = useState([]);
  const [recommended, setRecommended] = useState(0);

  const average = Object.values(ratings).reduce((accumulator, rating, i) => {
    return Number(accumulator) + (rating * i)
    }, 0) /
    Object.values(ratings).reduce((accumulator, rating) => {
      return Number(accumulator) + Number(rating)
    })

  const getMetaData = (id) => {
    let reqOptions = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=${id}`,
      method: "GET",
      headers: {
        "Authorization": "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"
      }
    }
    axios.request(reqOptions)
    .then((response) => {
      setRatings(response.ratings);
      var characteristics = [];
      for (var key in response.characteristics) {
        characteristics.push([key, response.characteristics[key].value])
      }
      setCharacteristics(characteristics);
      setRecommended(response.recommended.true /
        (response.recommended.true + response.recommended.false) * 100)
   })
  }

  useEffect(() => {
    getMetaData(id)
    }, []);

  return (
    <div>
      {average}<Stars value={average}/><br></br>
      <ReviewsChart ratings={ratings}/>
        {recommended}% of Buyers Recommend
      <ProductDetails characteristics={characteristcs}/>
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