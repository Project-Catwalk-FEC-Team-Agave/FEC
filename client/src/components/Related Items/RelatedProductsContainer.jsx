import React from 'react';
import axios from 'axios';
import RelatedProductsCarousel from './Related Products Carousel/RelatedProductsCarousel.jsx';
import YourOutfitCarousel from './Your OutFit Carousel/YourOutfitCarousel.jsx';
import { TOKEN } from '../../../../config.js';
import stars from '.././Shared/stars.jsx';
import sampleAllProducts from '../../../../sample_data/sampleAllProducts.js';
import './styles.css';

class RelatedProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductsIDs: [],
      relatedProductStyleInfo: []
    }

    //this.fetchRelatedOnClick = this.fetchRelatedOnClick.bind(this);
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

        const innerConfig = {
          method: 'get',
          url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`,
          headers: {
            'Authorization': TOKEN
          }
        };

        return axios(innerConfig)
        .then(({ data }) => {
          this.setState({
            relatedProductStyleInfo: data
          }, () => console.log('Related products style info: ', this.state.relatedProductStyleInfo))
          })
        .catch(err => console.log('Error retrieving related product INFO: ', err));

      })

    })
    .catch(err => console.log('Error retrieving related product IDs: ', err));
  }


  fetchRelated() {

    this.state.relatedProductsIDs.forEach((productID) => {

      const config = {
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productID}/styles`,
        headers: {
          'Authorization': TOKEN
        }
      };

      return axios(config)
      .then(({ data }) => {
        this.setState({
          relatedProductInfo: data
        }, () => console.log('Related product info', this.state))
        })
      .catch(err => console.log('Error retrieving related product INFO: ', err));

    })
  }

  // fetchRelatedOnClick(e) {

  //   getRelatedProducts(e.target.value)
  //   .then(() => {
  //     this.setState({
  //       relatedProducts: data
  //     }, () => console.log(this.state))
  //   })
  // }

  render() {
    const { changeProduct, addOutfit, getProductInfo, primaryProductID } = this.props;
    console.log('Related Products State: ', this.state.relatedProductsIDs);
    return (

      <div className="related-products-container">
        <div>
          <RelatedProductsCarousel stars={stars} sampleAllProducts={sampleAllProducts} actualProducts={this.state.relatedProducts}/>
        </div>
        <div>
          <YourOutfitCarousel/>
        </div>

      </div>
    )
  }

}

export default RelatedProductsContainer;