
import * as types from "../actions/types";
import initState from "./initState"

const User = (state=initState.user, action) => {
  switch (action.type) {
    case types.USER_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        isAuth: true, 
        ...action.payload,
      };
    case types.USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload, message: "" };
    case types.USER_LOADING:
      return { ...state, isLoading: true, error: null, message: "" };
    case types.USER_LOGOUT:
      return { ...initState.user };
    default:
      return state;
  }
}

export default { 
  User,
};
