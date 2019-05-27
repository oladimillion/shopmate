import * as types from "../actions/types";
import initState from "./initState";



const StripeToken = (state=initState.stripeToken, action) => {
  switch (action.type) {
    case types.GEN_STRIPE_TOKEN_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GEN_STRIPE_TOKEN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GEN_STRIPE_TOKEN_LOADING:
      return { ...state, isLoading: true, error: null };
    case types.USER_LOGOUT:
      return { ...initState.stripeToken };
    default:
      return state;
  }
}

const StripeCharge = (state=initState.stripeCharge, action) => {
  switch (action.type) {
    case types.CREATE_STRIPE_CHARGE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.CREATE_STRIPE_CHARGE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.CREATE_STRIPE_CHARGE_LOADING:
      return { ...state, isLoading: true, error: null };
    case types.USER_LOGOUT:
      return { ...initState.stripeCharge };
    default:
      return state;
  }
}

export default { 
  StripeToken,
  StripeCharge,
};
