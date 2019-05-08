import * as types from "../actions/types";

const initState = {
  isLoading: false,
  count: 0,
  rows: [],
  error: null,
}

const AllProduct = (state=initState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, ...action.payload };
    case types.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, ...action.payload };
    case types.GET_PRODUCTS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

const PopularProducts = (state=initState, action) => {
  switch (action.type) {
    case types.GET_POPULAR_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, ...action.payload };
    case types.GET_POPULAR_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, ...action.payload };
    case types.GET_POPULAR_PRODUCTS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export default { 
  AllProduct,
  PopularProducts,
};

