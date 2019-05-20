
import * as types from "../actions/types";

const initState = {
  isLoading: false,
  data: [],
  error: null,
};

const ShippingRegion = (state=initState, action) => {
  switch (action.type) {
    case types.GET_SHIPPING_REGION_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_SHIPPING_REGION_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_SHIPPING_REGION_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

const ShippingRegionById = (state=initState, action) => {
  switch (action.type) {
    case types.GET_SHIPPING_REGION_BY_ID_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_SHIPPING_REGION_BY_ID_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_SHIPPING_REGION_BY_ID_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

export default { 
  ShippingRegion,
  ShippingRegionById,
};