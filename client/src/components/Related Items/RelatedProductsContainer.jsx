import React from 'react';
import axios from 'axios';
import RelatedProductsCarousel from './Related Products Carousel/relatedProductsCarousel.jsx';
import YourOutfitCarousel from './Your Outfit Carousel/YourOutfitCarousel.jsx';
import { TOKEN } from '../../../../config.js';
import './styles.css';

const auth = { headers: {'Authorization': TOKEN}};

class RelatedProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [],
      relatedProductsIDs: [],
      photoObjs: [],
      reviewsData: [],
      overviewProductInfo: {}
    }
    //function binding goes here
  }

  componentDidMount() {
    this.getOverviewProductInfo();

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.primaryProductID}/related`, auth)
    .then(({ data }) => {
      this.setState({
        relatedProductsIDs: data
      });

      data.forEach(productID => {
        this.getProductInfo(productID);
        this.getPhotos(productID);
        this.getRating(productID);
      })
    })
    .catch(err => console.log('Error retrieving data in componentDidMount: ', err));
  }

  getOverviewProductInfo(id) {

    const auth = { headers: {'Authorization': TOKEN}};

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.props.primaryProductID}`, auth)
    .then(({ data }) => {
      console.log('OVERVIEW PRODUCT', data);
      this.setState({
        overviewProductInfo: data
      });

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

  getPhotos(productID) {

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`, auth)
    .then(({data}) => {

      let array = [];

      if (data.product_id === '11007') {
        data.results.forEach(result => {
          array.push(result.photos[0].url)
        })
      }

      let photo = array[0];

      if (data.product_id !== '11007') {
        data.results.forEach(result => {

          if (result['default?'] === true) {

            photo = result.photos[0].url || 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
          }
        })
      }

      this.setState({
        photoObjs: [...this.state.photoObjs, {productID, photo}]
      })

    })
    .catch(err => console.log('Error retrieving photos: ', err));
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
    // console.log('STATE: ', this.state);
    const { changeProduct, addOutfit, getProductInfo, primaryProductID } = this.props;

    const { productInfo, relatedProductsIDs, photoObjs, reviewsData } = this.state;

    return (

      <div className="related-products-container">
        <div>
          <RelatedProductsCarousel
          changeProduct={changeProduct}
          productInfo={productInfo}
          relatedProductsIDs={relatedProductsIDs}
          photoObjs={photoObjs}
          reviewsData={reviewsData}
          overviewProductInfo={this.state.overviewProductInfo}/>
        </div>
        <div>
          <YourOutfitCarousel
          productInfo={productInfo}
          relatedProductsIDs={relatedProductsIDs}
          photoObjs={photoObjs}
          reviewsData={reviewsData}/>
        </div>
      </div>
    )
  }
}

export default RelatedProductsContainer;