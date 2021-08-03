import React from 'react';
import axios from 'axios';
import RelatedProductsCarousel from './Related Products Carousel/RelatedProductsCarousel.jsx';
import YourOutfitCarousel from './Your OutFit Carousel/YourOutfitCarousel.jsx';
import { TOKEN } from '../../../../config.js';
//import sampleAllProducts from '../../../../sample_data/sampleAllProducts.js';
import './styles.css';

const auth = { headers: {'Authorization': TOKEN}};

class RelatedProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: [],
      relatedProductsIDs: [],
      photoObjs: [],
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
        this.getPhotos(productID);
        this.getRating(productID);
      })
    })
    .catch(err => console.log('Error retrieving data in componentDidMount: ', err));
  }

  getProductInfo(productID) {

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}`, auth)
    .then(({ data }) => {
      console.log('getProductInfo: ', data)
      this.setState({
        productInfo: [...this.state.productInfo, data]
      })
    })
    .catch(err => console.log('Error retrieving product INFO: ', err));
  }

  getPhotos(productID) {

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`, auth)
    .then(({ data }) => {

      data.results.forEach(result => {
        if (result['default?'] === true) {
          // let copy = this.state.productInfo.slice();
          // copy.photo = result.photos[0].url;

          let photo = result.photos[0].url || 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80';

          this.setState({
            photoObjs: [...this.state.photoObjs, {productID, photo}]
          })
        }
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

  addProperty(val) {
    let copy = this.state.productInfo.slice();
    return mappedProductInfo = copy.map(product => {
      product.photo = val.photos[0].url;
    });
  }

  render() {
    const { changeProduct, addOutfit, getProductInfo, primaryProductID } = this.props;
    //console.log('State: ', this.state);

    const { productInfo, relatedProductsIDs, photoObjs, reviewsData } = this.state;

    return (

      <div className="related-products-container">
        <div>
          <RelatedProductsCarousel
          changeProduct={changeProduct}
          productInfo={productInfo}
          relatedProductsIDs={relatedProductsIDs}
          photoObjs={photoObjs}
          reviewsData={reviewsData} />
        </div>
        <div>
          <YourOutfitCarousel/>
        </div>
      </div>
    )
  }
}

export default RelatedProductsContainer;