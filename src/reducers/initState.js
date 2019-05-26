
const initValue = {
  isLoading: false,
  data: {},
  error: null,
};

export default {
  user: {
    ...initValue,
    customer: {},
    message: "",
    isAuth: false,
  },
  cart: {
    ...initValue,
    data: [],
    totalAmount: 0,
  },
  stripeToken: {
    ...initValue,
  },
  stripeCharge: {
    ...initValue,
  },
  order: {
    ...initValue,
  },
  tax: {
    ...initValue,
    data: [],
  },
  shippingRegionById: {
    ...initValue,
    data: [],
  },
  shippingRegion: {
    ...initValue,
    data: [],
  },
  departments: {
    ...initValue,
    data: [],
    count: 0,
  },
  categories: {
    ...initValue,
    data: [],
    count: 0,
  },
  allProduct: {
    ...initValue,
    data: [],
    count: 0,
  },
  productReview: {
    ...initValue,
    data: [],
    count: 0,
  },
  popularProducts: {
    ...initValue,
    data: [],
    count: 0,
  },
  productById: {
    ...initValue,
    count: 0,
  },
}
