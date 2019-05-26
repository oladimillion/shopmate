
import * as types from "../actions/types";
import initState from "./initState";


const Tax = (state=initState.tax, action) => {
  switch (action.type) {
    case types.GET_TAX_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_TAX_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_TAX_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

export default { 
  Tax,
};
