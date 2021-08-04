import React from 'react';
import Overview from './Overview/overview.jsx';
import QA from './questions/qa.jsx';
import Related from './Related Items/RelatedProductsContainer.jsx';
import stars from './Shared/stars.jsx';
import sampleProductData from '../../../sample_data/sampleProductData.js';
import NavBar from './NavBar.jsx';
import Reviews from './Reviews/Reviews.jsx'
import { TOKEN } from '../../../config.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '11001',
      overviewProductInfo: {},
      favorites: [],
      productInfo: {}
    }

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
      productInfo: sampleProductData
    })

  }

  //set info for product overview
  // getOverviewProductInfo() {

  //   const auth = { headers: {'Authorization': TOKEN}};

  //   return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${this.state.productId}`, auth)
  //   .then(({ data }) => {
  //     console.log(data);
  //     this.setState({
  //       overviewProductInfo: data
  //     }, () => console.log(this.state.overviewProductInfo));

  //   })
  //   .catch(err => console.log('Error retrieving data in componentDidMount: ', err));

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
      <NavBar/>

        <div>
          <Related changeProduct={this.changeProduct}  addOutfit={this.addOutfit} getProductInfo={this.getProductInfo} primaryProductID={this.state.productId} yourOutfits={this.state.favorites}/>

          <QA />
        </div>
      </>

    )

  }
}
export default App;
