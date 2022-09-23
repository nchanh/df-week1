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
