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
    };

    this.changeProduct = this.changeProduct.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.setState({
      productId: 11001
    })
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
      productId: id
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <div>
        <Overview/>
          <Related
            changeProduct={this.changeProduct}
            addOutfit={this.addOutfit}
            getProductInfo={this.getProductInfo}
            primaryProductID={this.state.productId}
            yourOutfits={this.state.favorites}
          />
          <Reviews id={this.state.productId}/>
          <Related changeProduct={this.changeProduct} primaryProductID={this.state.productId} />
          <QA />
        </div>
      </>
    );
  }
}
export default App;
