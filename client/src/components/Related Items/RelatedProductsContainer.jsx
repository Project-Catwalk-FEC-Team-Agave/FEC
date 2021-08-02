import React from 'react';
import axios from 'axios';
import RelatedProductsCarousel from './Related Products Carousel/RelatedProductsCarousel.jsx';
import YourOutfitCarousel from './Your OutFit Carousel/YourOutfitCarousel.jsx';
import { TOKEN } from '../../../../config.js';
//import stars from '.././Shared/stars.jsx';
import sampleAllProducts from '../../../../sample_data/sampleAllProducts.js';
import './styles.css';

class RelatedProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [],
      relatedProductsIDs: [],
      relatedProductStyleInfo: [],
      reviewsData: []
    }


  }

  componentDidMount() {

    const config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.primaryProductID}/related`,
      headers: {
        'Authorization': TOKEN
      }
    };

    return axios(config)
    .then(({ data }) => {
      this.setState({
        relatedProductsIDs: data
      }, () => console.log('Product IDs in state: ', this.state.relatedProductsIDs));

      data.forEach(productID => {
        this.getProductInfo(productID);
        this.getRelatedStyles(productID);
        this.getRating(productID);
      })
    })
    .catch(err => console.log('Error retrieving data in componentDidMount: ', err));
  }

  getProductInfo(productID) {
    const auth = { headers: {'Authorization': TOKEN}};

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}`, auth)
    .then(({ data }) => {
      this.setState({
        productInfo: data
      }, () => console.log('Product info', this.state.productInfo))
      })
    .catch(err => console.log('Error retrieving product INFO: ', err));
  }

  getRelatedStyles(productID) {

    const auth = { headers: {'Authorization': TOKEN}};

      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`, auth)
      .then(({ data }) => {
        this.setState({
          relatedProductStyleInfo: data
        }, () => console.log('Related product info', this.state.relatedProductStyleInfo))
        })
      .catch(err => console.log('Error retrieving related product INFO: ', err));
  }

  getRating(productID) {

    const auth = { headers: {'Authorization': TOKEN}};

      return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${productID}`, auth)
      .then(({ data }) => {
        this.setState({
          reviewsData: data
        }, () => console.log('Reviews: ', this.state.reviewsData))
        })
      .catch(err => console.log('Error retrieving reviews: ', err));

  }

  render() {
    const { changeProduct, addOutfit, getProductInfo, primaryProductID } = this.props;
    console.log('Related Products State: ', this.state.relatedProductsIDs);
    return (

      <div className="related-products-container">
        <div>
          <RelatedProductsCarousel sampleAllProducts={sampleAllProducts} products={this.state.productInfo}/>
        </div>
        <div>
          <YourOutfitCarousel/>
        </div>

      </div>
    )
  }

}

export default RelatedProductsContainer;