import * as types from './types';

export const getDepartments = (payload) => ({
  type: types.GET_DEPARTMENTS_REQUEST,
  payload,
});

