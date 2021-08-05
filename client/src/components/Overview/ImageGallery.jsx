import React from 'react';
import { usePoroductStore, useStylesStore } from './store';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageModal from './ImageModal.jsx';


const ImageGallery = () => {
  const photos = useStylesStore((state) => state.photos);
  const handleOpen = useStylesStore((state) => state.handleOpen);
  const handleClose = useStylesStore((state) => state.handleClose);
  const modelActive = useStylesStore((state) => state.open);

  return (
    <div>
      <Carousel transitionTime="1000">
        {photos.map((photo, i) => (
          <div key={i} onClick={handleOpen} id={i}>
            <img src={photo.url} />
          </div>
        ))}
      </Carousel>
      {modelActive ? <ImageModal /> : null}
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
  // </Carousel>;
};
export default ImageGallery;

{
  /* <Carousel>
  {photos.map((photo, i) => (
    <Carousel.Item>
      <img className="d-block w-100" src={photo.url} />
    </Carousel.Item>
  ))}
</Carousel>;
{ */
}
/* <Carousel>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={photos[0].url}
    alt="First slide"
  />
  <Carousel.Caption></Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={photos[0].url}
    alt="Second slide"
  />

  <Carousel.Caption></Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={photos[0].url}
    alt="Third slide"
  />

  <Carousel.Caption></Carousel.Caption>
</Carousel.Item>
</Carousel> */
// }
