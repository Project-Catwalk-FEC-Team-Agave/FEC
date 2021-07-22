import React from 'react';
import axios from 'axios';

class RelatedProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    }

    this.getRelatedProducts = this.getRelatedProducts.bind(this);
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
    return (
      <>
      </>
    );
  }

}

export default RelatedProductsContainer;