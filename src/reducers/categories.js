
import * as types from "../actions/types";

const initState = {
  isLoading: false,
  data: { rows: [] },
  error: null,
};

const Categories = (state=initState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
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
