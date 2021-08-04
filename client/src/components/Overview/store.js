import create from 'zustand';
import { data } from './sampleStyleData';
import axios from 'axios';
const { TOKEN } = require('./config.js');

export const usePoroductStore = create((set) => ({
  id: 11001,
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description:
    'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
}));

var config = {
  method: 'get',
  url:
    'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/styles',
  headers: {
    Authorization: TOKEN,
  },
};

export const useStylesStore = create((set) => ({
  handleSizeChange: (e) =>
    set((state) => {
      let amount = 0;
      for (let key in state.skus) {
        if (state.skus[key].size === e.target.value) {
          amount = state.skus[key].quantity;
        }
      }
      return { sizeSelected: e.target.value, sizeQuantity: amount };
    }),
  handleStyleChange: (e) =>
    set((state) => ({ currentStyleId: e.target.value })),
  getData: () => {
    axios(config).then(({ data }) => {
      console.log('data', data);
      set({
        style_idtest: data.style_id,
        nametest: data.name,
      });
    });
  },
  currentStyleId: 0,
  product_id: '11001',
  style_id: 51158,
  name: 'Forest Green & Black',
  original_price: '140.00',
  sale_price: null,
  default: true,
  sizeQuantity: 1,
  sizeSelected: '',
  photos: [
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
  ],
  skus: {
    295408: {
      quantity: 8,
      size: 'XS',
    },
    295409: {
      quantity: 16,
      size: 'S',
    },
    295410: {
      quantity: 17,
      size: 'M',
    },
    295411: {
      quantity: 10,
      size: 'L',
    },
    295412: {
      quantity: 15,
      size: 'XL',
    },
    295413: {
      quantity: 4,
      size: 'XL',
    },
  },
}));
