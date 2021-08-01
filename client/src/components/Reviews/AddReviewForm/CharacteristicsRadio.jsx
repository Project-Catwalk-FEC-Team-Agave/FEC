import React from 'react';

const CharacteristicsRadio = (props) => {

  const characteristics = [
    'Size',
    'Width',
    'Comfort',
    'Quality',
    'Length',
    'Fit'
  ]

  return (
    characteristics.map((characteristic) => {
      return (
        <div>{characteristic}<br></br>
          <input type="radio" id="1" name={characteristic} value="1"></input>
          <label htmlFor="1">1</label>
          <input type="radio" id="2" name={characteristic} value="2"></input>
          <label htmlFor="2">2</label>
          <input type="radio" id="3" name={characteristic} value="3"></input>
          <label htmlFor="3">3</label>
          <input type="radio" id="4" name={characteristic} value="4"></input>
          <label htmlFor="4">4</label>
          <input type="radio" id="5" name={characteristic} value="5"></input>
          <label htmlFor="5">5</label>
        </div>
      )
    })
  )
}

export default CharacteristicsRadio;