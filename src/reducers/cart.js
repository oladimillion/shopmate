
import * as types from "../actions/types";

const initState = {
  isLoading: false,
  data: [],
  error: null,
  totalAmount: 0,
};

const calcTotalAmount = (data) => {
  return data.reduce((accum, item) => {
    accum = accum + (item.quantity * item.price);
    return accum;
  }, 0).toFixed(2);
}

const Cart = (state=initState, action) => {
  switch (action.type) {
    case types.ADD_CART_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        data: action.payload,
        totalAmount: calcTotalAmount(action.payload),
      };
    case types.GET_CART_AMOUNT_SUCCESS:
      return { ...state, isLoading: false, totalAmount: action.payload.total_amount };
    case types.GET_CART_SUCCESS:
      return { ...state, isLoading: false, data: action.payload[0] };
    case types.UPDATE_CART_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        data: action.payload,
        totalAmount: calcTotalAmount(action.payload),
      };
    case types.DELETE_CART_ITEM_SUCCESS:
      const { item_id, price, quantity } = action.payload;
      return { 
        ...state, 
        isLoading: false, 
        data: state.data.filter(item => {
          return item.item_id !== item_id;
        }),
        totalAmount: state.totalAmount - (price * quantity),
      };
    case types.GET_CART_FAILURE:
    case types.ADD_CART_FAILURE:
    case types.GET_CART_AMOUNT_FAILURE:
    case types.DELETE_CART_ITEM_FAILURE:
    case types.UPDATE_CART_FAILURE:
      return { 
        ...state, 
        isLoading: false, 
        error: action.payload 
      };
    case types.GET_CART_LOADING:
    case types.ADD_CART_LOADING:
    case types.GET_CART_AMOUNT_LOADING:
    case types.DELETE_CART_ITEM_LOADING:
    case types.UPDATE_CART_LOADING:
      return { ...state, isLoading: true, error: null };
    case types.USER_LOGOUT:
      return { ...initState };
    default:
      return state;
  }
}

export default { 
  Cart,
};