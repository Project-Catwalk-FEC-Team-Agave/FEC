import React from 'react';
import axios from 'axios';
import RelatedProductsCarousel from './Related Products Carousel/relatedProductsCarousel.jsx';
import YourOutfitCarousel from './Your OutFit Carousel/YourOutfitCarousel.jsx';
import { TOKEN } from '../../../../config.js';
//import { getRelatedProducts } from '../../../../apiHelpers.js';

//console.log(getRelatedProducts(11001));

class RelatedProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
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
        relatedProducts: data
      }, () => console.log(this.state))
    })
    .catch(err => console.log('Error retrieving related products: ', err));
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
    console.log('Related Products State: ', this.state.relatedProducts);
    return (

      <div className="related-products-container">
        <RelatedProductsCarousel/>
        <YourOutfitCarousel/>
      </div>
    )
  }

}

export default RelatedProductsContainer;