import React from 'react';
import AddButton from './AddButton.jsx';
import Stock from './Stock.jsx';
import { usePoroductStore, useStylesStore } from './store';
import { DropdownButton } from 'react-bootstrap/DropdownButton';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const AddToCart = () => {
  return (
    <div>
      <Stock />
      <AddButton />
    </div>
  );
};
export default AddToCart;

// skus: {
//   295408: {
//     quantity: 8,
//     size: 'XS',
//   },
//   295409: {
//     quantity: 16,
//     size: 'S',
//   },
//   295410: {
//     quantity: 17,
//     size: 'M',
//   },
//   295411: {
//     quantity: 10,
//     size: 'L',
//   },
//   295412: {
//     quantity: 15,
//     size: 'XL',
//   },
//   295413: {
//     quantity: 4,
//     size: 'XL',
//   },
// },
