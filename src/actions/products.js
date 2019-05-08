import * as types from './types';

export const getProducts = (payload) => ({
  type: types.GET_PRODUCTS_REQUEST,
  payload,
});

export const searchProducts = (payload) => ({
  type: types.SEARCH_PRODUCTS_REQUEST,
  payload,
});

export const getPopularProducts = (payload) => ({
  type: types.GET_POPULAR_PRODUCTS_REQUEST,
  payload,
});
