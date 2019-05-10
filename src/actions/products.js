import * as types from './types';

export const getProducts = (payload) => ({
  type: types.GET_PRODUCTS_REQUEST,
  payload,
});

export const getProductById = (payload) => ({
  type: types.GET_PRODUCT_BY_ID_REQUEST,
  payload,
});

export const searchProducts = (payload) => ({
  type: types.SEARCH_PRODUCTS_REQUEST,
  payload,
});

export const getProductsByDepartment = (payload) => ({
  type: types.GET_PRODUCTS_BY_DEPARTMENT_REQUEST,
  payload,
});

export const getProductsByCategory = (payload) => ({
  type: types.GET_PRODUCTS_BY_CATEGORY_REQUEST,
  payload,
});

export const getProductReview = (payload) => ({
  type: types.GET_PRODUCT_REVIEW_REQUEST,
  payload,
});

export const addProductReview = (payload) => ({
  type: types.ADD_PRODUCT_REVIEW_REQUEST,
  payload,
});

export const getPopularProducts = (payload) => ({
  type: types.GET_POPULAR_PRODUCTS_REQUEST,
  payload,
});
