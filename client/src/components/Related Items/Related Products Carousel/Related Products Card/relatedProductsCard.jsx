import React, { useState } from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton } from '@material-ui/core';

// import DoneAllIcon from '@material-ui/icons/DoneAll';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import stars from '../../../Shared/stars.jsx';
// import ComparisonModal from '../Comparison Modal/comparisonModal.jsx';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import { Modal, Backdrop, Fade } from '@material-ui/core';

//product photos are located in the styles endpoint

const RelatedProductsCard = ({ changeProduct, photo, product, relatedProductStyleInfo, relatedProductsIDs, reviewsData }) => {
  const classes = useStyles();
  let starCount = stars();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
  <Card
  data-myattr={product.id}
  //onClick here updates top-level product overview ID
  onClick={(e) => {
    changeProduct(e.target.dataset.myattr);
  }}
  className={classes.root}>

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
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>


    {/* <ComparisonModal/> */}


      <CardMedia
        className={classes.media}
        image={photo[2]}>
        <IconButton
          onClick={() => {
            console.log('clicked!');
            handleOpen();
          }}
          style={{ color: 'black' }}
          aria-label="settings"
          className={classes.overlay}>
          <StarBorderIcon
            style={{ color: '#f4b400' }}
            aria-label="compare to current product"/>

        </IconButton>
      </CardMedia>
      <CardContent>
        <Typography variant="caption" color="textSecondary" component="p">
          {product.category.toUpperCase()}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
          {product.name}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {'$' + product.default_price.split('.')[0]}
        </Typography>
        <>
          {starCount}
        </>
      </CardContent>
  </Card>




  );
}

export default RelatedProductsCard;

    // <div>
    //   <Modal
    //     aria-labelledby="transition-modal-title"
    //     aria-describedby="transition-modal-description"
    //     className={classes.modal}
    //     open={open}
    //     onClose={handleClose}
    //     closeAfterTransition
    //     BackdropComponent={Backdrop}
    //     BackdropProps={{
    //       timeout: 500,
    //     }}
    //   >
    //     <Fade in={open}>
    //       <div className={classes.paper}>
    //         <h2 id="transition-modal-title">Transition modal</h2>
    //         <p id="transition-modal-description">react-transition-group animates me.</p>
    //       </div>
    //     </Fade>
    //   </Modal>
    // </div>
