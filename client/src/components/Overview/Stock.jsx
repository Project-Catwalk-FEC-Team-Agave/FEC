import React from 'react';
import { usePoroductStore, useStylesStore } from './store';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Stock = () => {
  const classes = useStyles();
  const id = 295408;
  const skus = useStylesStore((state) => state.skus);
  let quantity = useStylesStore((state) => state.sizeQuantity);
  if (quantity > 15) {
    quantity = 15;
  }
  const quantities = [...Array(quantity + 1).keys()];
  const sizes = Object.values(skus).map((sku) => sku.size);
  const handleChange = useStylesStore((state) => state.handleSizeChange);
  const test = useStylesStore((state) => state.sizeSelected);
  const allStyles = useStylesStore((state) => state.allStyles);

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
        <Select
          labelId="label"
          id="select-size"
          onChange={handleChange}
          label="Size"
        >
          {sizes.map((size, i) => {
            return (
              // if (skus[id].quantity > 0) {
              <MenuItem key={i} value={size}>
                {size}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Amount</InputLabel>
        <Select id="select-quantity" label="Amount">
          {quantities.map((q, i) => {
            return (
              <MenuItem key={i} value={q}>
                {q}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Stock;
