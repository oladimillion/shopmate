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
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_PRODUCTS_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

const ProductById = (state={ data: {}, ...initState }, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_BY_ID_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_PRODUCT_BY_ID_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_PRODUCT_BY_ID_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

const ProductReview = (state={ data: [], ...initState }, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_REVIEW_SUCCESS:
      return { ...state, isLoading: false, data: [ ...action.payload, ...state.data ] };
    case types.GET_PRODUCT_REVIEW_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_PRODUCT_REVIEW_FAILURE:
    case types.ADD_PRODUCT_REVIEW_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_PRODUCT_REVIEW_LOADING:
    case types.ADD_PRODUCT_REVIEW_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

const PopularProducts = (state=initState, action) => {
  switch (action.type) {
    case types.GET_POPULAR_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, ...action.payload };
    case types.GET_POPULAR_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_POPULAR_PRODUCTS_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

export default { 
  AllProduct,
  PopularProducts,
  ProductById,
  ProductReview,
};
