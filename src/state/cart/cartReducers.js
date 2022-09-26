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
  let indexOrder = -1;

  switch (action.type) {
    case 'ADD_TO_CART':
      const order = action.payload;

      indexOrder = carts.findIndex(
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

    case 'INCREASE_PRODUCT':
      indexOrder = carts.findIndex((item) => item.productId === action.payload);

      if (indexOrder > -1) {
        carts[indexOrder].quantity++;
      }

      numberOrders++;

      totalPrice = countTotalPrice(carts);

      return {
        ...state,
        carts: carts,
        numberOrders: numberOrders,
        totalPrice: totalPrice,
      };

    case 'DECREASE_PRODUCT':
      if (carts.length === 0) {
        return state;
      }

      indexOrder = carts.findIndex((item) => item.productId === action.payload);

      if (indexOrder > -1) {
        if (carts[indexOrder].quantity === 1) {
          carts.splice(indexOrder, 1);
        } else {
          carts[indexOrder].quantity--;
        }
      }

      numberOrders--;

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

    case 'RESET_CARTS':
      return {
        ...state,
        carts: [],
        numberOrders: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
