import React from 'react';

const NameAndEmailFields = ({ changeReviewerEmail, changeReviewerName }) => {

  return (
    <>
      <label htmlFor="nickname">Nickname*</label><br></br>
      <input id="nickname" type="text" name="nickname" size="30"
        placeholder="Example: jackson11!" maxLength="60" required
        onChange={(event) => { changeReviewerName(event.target.value) }}></input><br></br>
      <em>For privacy reasons, do not use your full name or email address</em><br></br><br></br>
      <label htmlFor="email">Email Address*</label><br></br>
      <input id="email" type="email" name="email" size="30"
        placeholder="Example: jackson11@gmail.com" required
        onChange={(event) => { changeReviewerEmail(event.target.value) }}></input><br></br>
      <em>For authentication reasons, you will not be emailed</em><br></br>
    </>
  );
};

export default NameAndEmailFields;
