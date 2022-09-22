const initialState = {
  carts: [],
  numberOrders: 0,
};

const cartReducer = (state = initialState, action) => {
  const carts = [...state.carts];
  let numberOrders = state.numberOrders;

  switch (action.type) {
    case 'ADD_TO_CART':
      const order = action.payload;

      const indexOrder = carts.findIndex(
        (item) => item.productId === order.productId && item.size === order.size
      );

      if (indexOrder > -1) {
        carts[indexOrder].quantity++;
      } else {
        carts.push(order);
      }

      numberOrders++;

      return {
        ...state,
        carts: carts,
        numberOrders: numberOrders,
      };

    default:
      return state;
  }
};

export default cartReducer;
