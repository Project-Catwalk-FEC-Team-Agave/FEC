import create from 'zustand';
import { data } from './sampleStyleData';
import axios from 'axios';
const { TOKEN } = require('../../../../config.js');

var configGeneral = {
  method: 'get',
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/',
  headers: {
    Authorization: TOKEN,
  },
};
var configReview = {
  method: 'get',
  url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id=11001`,
  headers: {
    Authorization: TOKEN,
  },
};
export const useReviewData = create((set) => ({
  getReviewData: () => {
    axios(configReview).then(({ data }) => {
      set((state) => {
        let average = (metaData) => {
          let averageRating = Object.values(metaData.ratings).reduce(
            (accumulator, rating) => {
              return Number(accumulator) + Number(rating);
            }
          );
        };
        let result = average(data);
        console.log('result', result);
        return { average: result };
      });
    });
  },
}));
export const usePoroductStore = create((set) => ({
  updateId: (e) =>
    set((state) => {
      let newId = e.target.id;
      return { id: newId };
    }),
  getProductData: () => {
    axios(configGeneral).then(({ data }) => {
      console.log('data', data);
      set((state) => ({
        id: data[0].id,
        name: data[0].name,
        category: data[0].category,
        price: data[0].default_price,
      }));
    });
  },
  // id: data[0].id,
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
    set((state) => {
      let id = e.target.parentElement.id;
      let newStyle;
      let price = 0;
      state.allStyles.map((style) => {
        if (style.style_id == id) {
          newStyle = style;
        }
      });

      return {
        currentStyleId: newStyle.style_id,
        currentStyle: newStyle,
        skus: newStyle.skus,
        photos: newStyle.photos,
        currentStyleName: newStyle.name,
        original: newStyle.original_price,
        sale: newStyle.sale_price,
      };
    }),

  getData: () => {
    axios(config).then(({ data }) => {
      // console.log('data', data);
      set((state) => ({
        allStyles: data.results,
      }));
    });
  },
  // MODAL
  handleOpen: (e) =>
    set((state) => {
      console.log('target', e.target.id);
      return { open: true, currentImage: e.target.id };
    }),
  handleClose: () => set((state) => ({ open: false })),
  currentImage: data.results[0].photos[0].url,
  open: false,
  allStyles: data.results,
  currentStyle: data.results[0],
  currentStyleId: data.results[0].style_id,
  currentStyleName: data.results[0].name,
  sizeQuantity: 1,
  sizeSelected: '',
  skus: data.results[0].skus,
  photos: data.results[0].photos,
  sale: data.results[0].sale_price,
  original: data.results[0].original_price,

  // currentStyleId: 0,
  // product_id: '11001',
  // style_id: 51158,
  // name: 'Forest Green & Black',
  // original_price: '140.00',
  // sale_price: null,
  // default: true,
  // sizeQuantity: 1,
  // sizeSelected: '',
  // photos: [
  //   {
  //     thumbnail_url:
  //       'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  //     url:
  //       'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  //   },
  //   {
  //     thumbnail_url:
  //       'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  //     url:
  //       'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
  //   },
  // ],
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
}));
