import React from 'react';
import { usePoroductStore, useStylesStore } from './store';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// import { Carousel } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   border: '2px solid #000',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
}));

const ImageModal = () => {
  const photos = useStylesStore((state) => state.photos);
  const classes = useStyles();
  const handleClose = useStylesStore((state) => state.handleClose);
  const currentIndex = useStylesStore((state) => state.currentImage);
  const gallery = photos
    .slice(currentIndex)
    .concat(photos.slice(0, currentIndex));
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Carousel
              className="image-modal-container"
              transitionTime="1000"
              showThumbs={false}
            >
              {gallery.map((photo, i) => (
                <div key={i}>
                  <InnerImageZoom
                    src={photo.url}
                    zoomScale={2.5}
                    sizes="60vh"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default ImageModal;
