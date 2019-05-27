
import * as types from "../actions/types";
import initState from "./initState";

const Departments = (state=initState.departments, action) => {
  switch (action.type) {
    case types.GET_DEPARTMENTS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GET_DEPARTMENTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_DEPARTMENTS_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

export default { 
  Departments,
};
