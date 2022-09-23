export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  };
};

export const increaseProduct = (productId) => {
  return {
    type: 'INCREASE_PRODUCT',
    payload: productId,
  };
};

export const decreaseProduct = (productId) => {
  return {
    type: 'DECREASE_PRODUCT',
    payload: productId,
  };
};

export const removeProductCart = (productId) => {
  return {
    type: 'REMOVE_PRODUCT_CART',
    payload: productId,
  };
};
