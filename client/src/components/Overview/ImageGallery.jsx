import React from 'react';
import { usePoroductStore, useStylesStore } from './store';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'react-bootstrap';
const ImageGallery = () => {
  const photo = useStylesStore((state) => state.photos[0].url);
  return (
    <div>
      <h3>Image gallery</h3>
      <Carousel transitionTime="1000">
        <div>
          <img src={photo} />
        </div>
        <div>
          <img src={photo} />
        </div>
        <div>
          <img src={photo} />
        </div>
      </Carousel>
    </div>
  );
  // <Carousel>
  //   <Carousel.Item>
  //     <img className="d-block w-100" src={photo} alt="First slide" />
  //     <Carousel.Caption></Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img className="d-block w-100" src={photo} alt="Second slide" />

  //     <Carousel.Caption></Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img className="d-block w-100" src={photo} alt="Third slide" />

  //     <Carousel.Caption></Carousel.Caption>
  //   </Carousel.Item>
  // </Carousel>
};
export default ImageGallery;
