import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    height: '40%',
    pt: '25%'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AddReviewPhotos = ({ reviewPhotos, changeReviewPhotos }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Photos to your Review
      </button>
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
          <div className={classes.paper} id='submitPhotos'>
            <form id="addPhoto" height="10px">
              <label htmlFor='addPhoto'>Add a Photo to Your Review</label><br></br>
              <input id="photoUrl" type="text" name="photoUrl"></input>
              <input type="submit" onClick={(event) => {
                event.preventDefault();
                if (reviewPhotos.length < 5) {
                  var photos = reviewPhotos;
                  photos.push(document.getElementById('photoUrl').value);
                  document.getElementById('submitPhotos').append(document.getElementById('photoUrl').value, document.createElement("br"))
                  changeReviewPhotos(photos);
                  document.getElementById('addPhoto').reset()
                  alert(`Photo submitted. You can add up to ${5 - reviewPhotos.length} more photos`)
                  console.log(reviewPhotos)
                 } else {
                  alert('Already added maximum number of photos')
                }}}></input>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddReviewPhotos;