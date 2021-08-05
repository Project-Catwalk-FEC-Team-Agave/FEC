import React, { useState } from 'react';
import useStyles from './styles.js';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton, Modal, Backdrop, Fade, CircularProgress } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import stars from '../../../Shared/stars.jsx';
import ComparisonModal from '../Comparison Modal/comparisonModal.jsx';

const RelatedProductsCard = ({ overviewProductInfo, changeProduct, photo, product, relatedProductStyleInfo, relatedProductsIDs, reviewsData }) => {
  const classes = useStyles();
  let starCount = stars(3.5);

  console.log('PHOTO:', photo);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        data-myattr={product.id}
        onClick={(e) => {
          changeProduct(e.currentTarget.getAttribute("data-myattr"));
        }}
        className={classes.root}>
        {photo ? (
          <CardMedia
          className={classes.media}
          image={photo.photo}/>
        ) : (
          <CircularProgress/>
        )}
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
    <IconButton
      onClick={() => {
        handleOpen();
      }}
      style={{ color: 'black' }}
      aria-label="settings"
      className={classes.overlay}>
      <StarBorderIcon
        style={{ color: '#f4b400' }}
        aria-label="compare to current product"
        className={classes.icon}/>
    </IconButton>
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
            <Typography id="transition-modal-title" variant="caption" color="textSecondary" component="p">
              COMPARING
            </Typography>
              <ComparisonModal
                overviewProductInfo={overviewProductInfo}
                product={product}/>
          </div>
        </Fade>
      </Modal>
    </div>
  </>
  );
}

export default RelatedProductsCard;
