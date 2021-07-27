const axios = require('axios');
const { TOKEN } = require('./config.js');

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

//TEST
//getAllProducts();
//getRelatedProducts(11001);

module.exports = {
	getAllProducts,
	getRelatedProducts
}
