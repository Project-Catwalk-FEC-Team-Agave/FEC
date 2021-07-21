import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function quarterRating(value) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="quarter-rating" defaultValue={value} precision={0.25} />
    </div>
  );
}