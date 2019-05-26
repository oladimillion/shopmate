
import * as types from "../actions/types";
import initState from "./initState";

const Order = (state=initState.order, action) => {
  switch (action.type) {
    case types.CREATE_ORDER_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.CREATE_ORDER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.CREATE_ORDER_LOADING:
      return { ...state, isLoading: true, error: null };
    case types.USER_LOGOUT:
      return { ...initState.order };
    default:
      return state;
  }
}

export default { 
  Order,
};
