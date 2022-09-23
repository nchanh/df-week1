export const setAuth = (auth) => {
  return {
    type: 'SET_AUTH',
    payload: auth,
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
