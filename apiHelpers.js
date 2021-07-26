const axios = require('axios');
const config = require('../config.js');

const getRelatedProducts = (primaryProductID) => {



  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${primaryProductID}/related`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  //axios always returns a response object with a "data" property
  return axios.get(options.url, options.headers)
    .then(({ data }) => {

		})
    .catch(err => console.log('Error retrieving Related Products: ', err));

}

module.exports.getRelatedProducts = getRelatedProducts;