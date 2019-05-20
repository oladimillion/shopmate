import * as types from './types';

export const getTax = (payload) => ({
  type: types.GET_TAX_REQUEST,
  payload,
});

