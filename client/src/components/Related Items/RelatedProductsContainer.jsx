import React from 'react';
import axios from 'axios';
import RelatedProductsCarousel from './Related Products Carousel/RelatedProductsCarousel.jsx';
import YourOutfitCarousel from './Your OutFit Carousel/YourOutfitCarousel.jsx';
import { TOKEN } from '../../../../config.js';
import sampleAllProducts from '../../../../sample_data/sampleAllProducts.js';
import './styles.css';

const auth = { headers: {'Authorization': TOKEN}};

class RelatedProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [],
      relatedProductsIDs: [],
      relatedProductStyleInfo: [],
      reviewsData: []
    }
    //function binding goes here
  }

  componentDidMount() {

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.primaryProductID}/related`, auth)
    .then(({ data }) => {
      this.setState({
        relatedProductsIDs: data
      });

      data.forEach(productID => {
        this.getProductInfo(productID);
        this.getRelatedStyles(productID);
        this.getRating(productID);
      })
    })
    .catch(err => console.log('Error retrieving data in componentDidMount: ', err));
  }

  getProductInfo(productID) {

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}`, auth)
    .then(({ data }) => {
      this.setState({
        productInfo: [...this.state.productInfo, data]
      })
    })
    .catch(err => console.log('Error retrieving product INFO: ', err));
  }

  getRelatedStyles(productID) {

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`, auth)
    .then(({ data }) => {
      this.setState({
        relatedProductStyleInfo: [...this.state.relatedProductStyleInfo, data]
      })
    })
    .catch(err => console.log('Error retrieving related product INFO: ', err));
  }

  getRating(productID) {

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/?product_id=${productID}`, auth)
    .then(({ data }) => {
      this.setState({
        reviewsData: [...this.state.reviewsData, data]
      })
    })
    .catch(err => console.log('Error retrieving reviews: ', err));
  }

  render() {
    const { changeProduct, addOutfit, getProductInfo, primaryProductID } = this.props;
    console.log('State: ', this.state);

    const { productInfo, relatedProductsIDs, relatedProductStyleInfo, reviewsData } = this.state;

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