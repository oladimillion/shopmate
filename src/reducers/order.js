
import * as types from "../actions/types";

const initState = {
  isLoading: false,
  data: {},
  error: null,
};

const Order = (state=initState, action) => {
  switch (action.type) {
    case types.CREATE_ORDER_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.CREATE_ORDER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.CREATE_ORDER_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

export default { 
  Order,
};
