import React from 'react';

const CharacteristicsRadio = ({ changeDetailRatings, detailRatings, characteristics }) => {

  return (
    <div>Please rate the different characteristics for this product
    {Object.keys(characteristics).map((characteristic, i) => {
      var id = characteristics[characteristic].id;
      return (
        <div key={i}>{characteristic}*<br></br>
          <input type="radio"name={characteristic} value="1" required
            onChange={ (event) => {
              detailRatings[id] = Number(event.target.value);
              changeDetailRatings(detailRatings) }}></input>
          <label htmlFor="1">1 </label>

          <input type="radio" id={characteristics[characteristic.id]} name={characteristic} value="2"
            onChange={ (event) => {
              detailRatings[id] = Number(event.target.value);
              changeDetailRatings(detailRatings) }}></input>
          <label htmlFor="2">2</label>

          <input type="radio" id={characteristics[characteristic.id]} name={characteristic} value="3"
            onChange={ (event) => {
            Object[characteristic] = event.target.value;
            detailRatings[id] = Number(event.target.value);;
              changeDetailRatings(detailRatings) }}></input>
          <label htmlFor="3">3</label>

          <input type="radio" id={characteristics[characteristic.id]} name={characteristic} value="4"
            onChange={ (event) => {
              detailRatings[id] = Number(event.target.value);
              changeDetailRatings(detailRatings) }}></input>
          <label htmlFor="4">4</label>

          <input type="radio" id={characteristics[characteristic.id]} name={characteristic} value="5"
            onChange={ (event) => {
              detailRatings[id] = Number(event.target.value);
              changeDetailRatings(detailRatings) }}></input>
          <label htmlFor="5">5</label>
        </div>
      )
    })}
    </div>
  )
}

export default CharacteristicsRadio;