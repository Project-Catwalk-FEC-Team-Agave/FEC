import React from 'react';
import axios from 'axios';
import relatedProductsCarousel from './Related Products Carousel/relatedProductsCarousel.jsx';
import YourOutfitCarousel from './Your OutFit Carousel/YourOutfitCarousel.jsx';
import { getRelatedProducts } from '../../../../apiHelpers.js';

class RelatedProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    }

    this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  componentDidMount() {
    this.setState({

    })
  }

  getRelatedProducts(currentProductId) {
    //need to send API Token in headers
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${currentProductId}/related`)
      .then(({data}) => {
        console.log(data);
        this.setState({
          relatedProducts: data
        }, () => console.log(this.state))
      })
      .catch(err => console.log(`Error retrieving related products: `, err));
  }


  render() {
    const { changeProduct, addOutfit, getProductInfo } = this.props;
    console.log(changeProduct);
    console.log(addOutfit);
    console.log(getProductInfo);
    return (
      <>
      <div>hellooooooo</div>
      </>
    );
  }

}

export default RelatedProductsContainer;