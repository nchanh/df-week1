const { default: axios } = require('axios');

const request = axios.create({
  baseURL: 'https://6329214f4c626ff832bb7d81.mockapi.io/',
});

export const get = async (path, fromData = {}) => {
  const response = await request.get(path, { params: fromData });
  return response.data;
};

export const post = async (path, fromData = {}) => {
  const response = await request.post(path, { params: fromData });
  return response.data;
};

export default request;
