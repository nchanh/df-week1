import { countTotalPrice } from '../../helpers/function';

const initialState = {
  carts: [],
  numberOrders: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  const carts = [...state.carts];
  let numberOrders = state.numberOrders;
  let totalPrice = state.totalPrice;

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

      totalPrice = countTotalPrice(carts);

      return {
        ...state,
        carts: carts,
        numberOrders: numberOrders,
        totalPrice: totalPrice,
      };

    case 'REMOVE_PRODUCT_CART':
      const productId = action.payload;

      const orderIndex = carts.findIndex(
        (item) => item.productId === productId
      );
      const objOrder = carts.find((item) => item.productId === productId);

      carts.splice(orderIndex, 1);

      numberOrders -= objOrder.quantity;

      totalPrice = countTotalPrice(carts);

      return {
        ...state,
        carts: carts,
        numberOrders: numberOrders,
        totalPrice: totalPrice,
      };

    default:
      return state;
  }
};

export default cartReducer;
