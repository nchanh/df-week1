const initialState = {
  auth: { token: '', username: '' },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        auth: action.payload,
      };

    case 'LOG_OUT':
      return {
        ...state,
        auth: { token: '', username: '' },
      };

    default:
      return state;
  }
};

export default authReducer;
