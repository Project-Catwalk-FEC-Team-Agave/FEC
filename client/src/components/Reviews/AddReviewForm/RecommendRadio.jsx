import React from 'react';

const RecommendRadio = ({changeRecommendation}) => {
  return (
    <>
      <div>Do you recommend this product?*</div>
      <input type="radio" id="yes" name="recommend" value={true} required
        onChange={ (event) => { changeRecommendation(JSON.parse(event.target.value)) } }></input>
      <label htmlFor="yes">Yes</label>
      <input type="radio" id="no" name="recommend" value={false}
        onChange={ (event) => { changeRecommendation(JSON.parse(event.target.value)) } }>
      </input>
      <label htmlFor="no">No</label>
    </>
  )
}

export default RecommendRadio;