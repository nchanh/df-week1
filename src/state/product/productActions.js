export const addProducts = (products) => {
  return {
    type: 'ADD_PRODUCTS',
    payload: products,
  };
};
