import React from 'react';
import { usePoroductStore, useStylesStore } from './store';
//import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'react-bootstrap';
const ImageGallery = () => {
  const photos = useStylesStore((state) => state.photos);

  return (
    <div>
      <Carousel transitionTime="1000">
        {photos.map((photo, i) => (
          <div key={i}>
            <img src={photo.url} />
          </div>
        ))}
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
