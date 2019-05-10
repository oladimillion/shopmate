
import * as types from "../actions/types";

const initState = {
  isLoading: false,
  data: [],
  error: null,
};

const Departments = (state=initState, action) => {
  switch (action.type) {
    case types.GET_DEPARTMENTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_DEPARTMENTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_DEPARTMENTS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export default { 
  Departments,
};
