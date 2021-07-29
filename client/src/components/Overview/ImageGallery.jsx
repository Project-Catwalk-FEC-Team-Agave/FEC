import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>Image gallery</h3>
        <img src={this.props.image}></img>
      </div>
    );
  }
}
export default ImageGallery;
