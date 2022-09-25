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
    .get(`https://mocki.io/v1/be533d94-f0bf-4206-80af-02372e44d81e`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
