import React from 'react';
import Overview from './Overview/overview.jsx';
import QA from './questions/qa.jsx';
import Related from './Related Items/related.jsx';
import stars from './Shared/stars.js';
import sampleProductData from '../../../sample_data/sampleProductData.js';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      productId: 11001,
      favorites: [],
      productInfo: {}

    }

    this.getReviews = this.getReviews.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
    this.addOutfit = this.addOutfit.bind(this);
  }


  addOutfit (id) {
    this.setState({
      favorites: [...this.state.favorites, id]
    })
  }

  componentDidMount() {
    this.setState({
      productId: 11001,
      favorites: [],
      productInfo: sampleProductData

    })
  }

  changeProduct(id) {
    this.setState( {
      productId: id
    })
  }

  getProductInfo (id) {

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


    <div>
      <Related changeProduct = {this.changeProduct}  addOutfit = {this.addOutfit} />

      <QA />
    </div>

    )

  }
}
export default App;