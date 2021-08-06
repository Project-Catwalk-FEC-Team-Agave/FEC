import React from 'react';
import Overview from './Overview/overview.jsx';

// import QA from './questions/qa.jsx';
// import Related from './Related Items/RelatedProductsContainer.jsx';
// import stars from './Shared/stars.jsx';
// import sampleProductData from '../../../sample_data/sampleProductData.js';
// import NavBar from './NavBar.jsx';
// import Reviews from './Reviews/Reviews.jsx'
// import { TOKEN } from '../../../config.js';
// import axios from 'axios';
// zustand

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '11001',
      overviewProductInfo: {},
      favorites: [],
      productInfo: {},
    };

    this.getReviews = this.getReviews.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
    this.addOutfit = this.addOutfit.bind(this);
  }

  addOutfit(product) {
    this.setState({
      favorites: [...this.state.favorites, product],
    });
  }

  componentDidMount() {
    this.setState({
      productId: 11001,
      favorites: [],

      productInfo: sampleProductData,
    });
  }

  //need to find a way to re-render when overview state is changed!
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.productId !== prevState.productId) {
  //     this.setState({
  //       productId: this.state.productId
  //     })
  //   }
  // }

  changeProduct(id) {
    this.setState({
      productId: id,
    });
  }

  getProductInfo(id) {
    // api call
  }

  //this has the url links
  getStyles(id) {
    //api call to GET /products/:product_id/styles
  }

  // method to get review for a product
  getReviews(productId) {
    // api call
  }

  render() {
    return (
      <>
        <NavBar />

        <div>
          <Related
            changeProduct={this.changeProduct}
            addOutfit={this.addOutfit}
            getProductInfo={this.getProductInfo}
            primaryProductID={this.state.productId}
            yourOutfits={this.state.favorites}
          />

          <QA />
        </div>
      </>
    );
  }
}
export default App;
