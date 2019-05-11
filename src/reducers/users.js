
import * as types from "../actions/types";

const initState = {
  isLoading: false,
  customer: {},
  error: null,
  message: "",
};

const User = (state=initState, action) => {
  switch (action.type) {
    case types.USER_SUCCESS:
      const { customer, message } = action.payload;
      return { 
        ...state, 
        isLoading: false, 
        customer, 
        message,
      };
    case types.USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload, message: "" };
    case types.USER_LOADING:
      return { ...initState, isLoading: true, message: "Please wait..." };
    default:
      return state;
  }
}

export default { 
  User,
};
