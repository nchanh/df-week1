const initialState = {
  carts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newCarts = [...state.carts];
      newCarts.push(action.payload);
      return {
        ...state,
        carts: newCarts,
      };

    default:
      return state;
  }
};

export default cartReducer;
