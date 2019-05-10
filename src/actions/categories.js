import * as types from './types';

export const getCategories = (payload) => ({
  type: types.GET_CATEGORIES_REQUEST,
  payload,
});

