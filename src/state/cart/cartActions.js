export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const removeProductCart = (productId) => {
  return {
    type: 'REMOVE_PRODUCT_CART',
    payload: productId,
  };
};
