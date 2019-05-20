import * as types from "../actions/types";

const initState = {
  isLoading: false,
  data: {},
  error: null,
};

const StripeToken = (state=initState, action) => {
  switch (action.type) {
    case types.GEN_STRIPE_TOKEN_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.GEN_STRIPE_TOKEN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.GEN_STRIPE_TOKEN_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

const StripeCharge = (state=initState, action) => {
  switch (action.type) {
    case types.CREATE_STRIPE_CHARGE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.CREATE_STRIPE_CHARGE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case types.CREATE_STRIPE_CHARGE_LOADING:
      return { ...state, isLoading: true, error: null };
    default:
      return state;
  }
}

export default { 
  StripeToken,
  StripeCharge,
};
