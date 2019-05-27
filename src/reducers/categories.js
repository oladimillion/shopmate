import * as types from "../actions/types";
import initState from "./initState";

const Categories = (state=initState.categories, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS:
      const { rows, count } = action.payload;
      return { ...state, isLoading: false, data: rows, count };
    case types.GET_CATEGORIES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GET_CATEGORIES_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

export default { 
  Categories,
};
