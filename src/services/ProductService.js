import axios from 'axios';

import * as request from '../utils';

export const getAllProducts = async (formData = null) => {
  try {
    const res = await request.get('product');
    return res;
  } catch (error) {
    console.log('error:', error);
  }
};

export const getProduct = async (productId) => {
  try {
    const res = await request.get(`product/${productId}`);
    return res;
  } catch (error) {
    console.log('error:', error);
  }
};

export const getAllProductInMocki = async () => {
  return await axios
    .get(`https://mocki.io/v1/151a87b1-dee7-4bd4-8e9b-afc2948bd5a2`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
