import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';

const AddButton = () => {
  // const onClick = usePoroductStore((state) => state.name);

  return (
    <div>
      <Button variant="outlined" endIcon={<AddIcon></AddIcon>}>
        Add to cart
      </Button>
      <IconButton aria-label="delete">
        <StarIcon />
      </IconButton>
    </div>
  );
};
export default AddButton;
