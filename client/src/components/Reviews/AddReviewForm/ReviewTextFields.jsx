import React, { useState } from 'react';

const ReviewTextFields = (props) => {

  const [totalChars, changeTotalChars] = useState(50 + ' characters required');

  return (
    <>
      <label htmlFor="summary">Review Summary:</label><br></br>
      <input id="summary" type="text" name="summary" maxLength="60" size="60"></input><br></br><br></br>
      <label htmlFor="body">Review Body:</label><br></br>
      <textarea id="body" type="text" name="body" autoFocus rows="5" cols="60"
        placeholder="Why did you like the product or not?"
        maxLength="1000" minLength="50" required style={ {resize: 'none'} }
        onChange={(e) => {
          e.preventDefault();
          if (e.target.value.length > 50) {
            changeTotalChars('Minimum review length reached');
          } else {
            changeTotalChars(50 - e.target.value.length + ' more characters required');
          }}}>
      </textarea><br></br><em>{totalChars}</em><br></br><br></br>
    </>
  )
};

export default ReviewTextFields;