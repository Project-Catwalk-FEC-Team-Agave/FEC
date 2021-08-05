const axios = require('axios');
const TOKEN = require('./config.js');

const getAllProducts = () => {

  var config = {
		method: 'get',
		url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products',
		headers: {
			'Authorization': TOKEN
		}
	};

	return axios(config)
	.then(({ data }) => {
		console.log(JSON.stringify(data));
		return data;
	})
	.catch(err => console.log('Error retrieving all products: ', err));

}

const getRelatedProducts = (primaryProductID) => {

  var config = {
		method: 'get',
		url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${primaryProductID}/related`,
		headers: {
			'Authorization': TOKEN
		}
	};

	return axios(config)
	.then(({ data }) => {
		console.log(JSON.stringify(data));
		return data;
	})
	.catch(err => console.log('Error retrieving related products: ', err));

}

// const getReviews = (productId) => {
//   let reqOptions = {
//     url: "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews?product_id=11001",
//     method: "GET",
//     headers: {
//      "Authorization": TOKEN
//     }
//   }
// }

// const reviewsMetaData = (productId) => {
//   return reqOptions = {
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=${productId}`,
//     method: "GET",
//     headers: {
//       "Authorization": TOKEN
//       }
//     }
// }

// const markReviewHelpful = (reviewId) => {

// }

//TEST
//getAllProducts();
//getRelatedProducts(11001);

module.exports = {
	getAllProducts,
	getRelatedProducts
}
