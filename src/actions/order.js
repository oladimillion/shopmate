import * as types from './types';

export const createOrder = (payload) => ({
  type: types.CREATE_ORDER_REQUEST,
  payload,
});

