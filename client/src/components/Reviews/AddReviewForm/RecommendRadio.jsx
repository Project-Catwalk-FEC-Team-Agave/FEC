import React from 'react';

const RecommendRadio = (props) => {
  return (
    <>
      <input type="radio" id="yes" name="recommend" value="true" required></input>
      <label htmlFor="yes">Yes</label>
      <input type="radio" id="no" name="recommend" value="false"></input>
      <label htmlFor="no">No</label>
    </>
  )
}

export default RecommendRadio;