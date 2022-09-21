const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      const newProducts = action.payload;
      return {
        ...state,
        products: newProducts,
      };

    default:
      return state;
  }
};

export default productReducer;
