import * as types from "../../actions/types";
import initState from "../initState"
import products from "../products";

describe('AllProduct reducer', () => {
  it('should update the store data', () => {
    expect(
      products.AllProduct(initState.allProduct, {
        type: types.GET_PRODUCTS_SUCCESS,
        payload: initState.allProduct,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      products.AllProduct(initState.allProduct, {
        type: types.GET_PRODUCTS_LOADING,
        payload: initState.allProduct,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      products.AllProduct(initState.allProduct, {
        type: types.GET_PRODUCTS_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});

describe('ProductById reducer', () => {
  it('should update the store data', () => {
    expect(
      products.ProductById(initState.productById, {
        type: types.GET_PRODUCT_BY_ID_SUCCESS,
        payload: initState.productById,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      products.ProductById(initState.productById, {
        type: types.GET_PRODUCT_BY_ID_LOADING,
        payload: initState.productById,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      products.ProductById(initState.productById, {
        type: types.GET_PRODUCT_BY_ID_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});

describe('ProductReview reducer', () => {
  it('should update the store data', () => {
    expect(
      products.ProductReview(initState.productReview, {
        type: types.GET_PRODUCT_REVIEW_SUCCESS,
        payload: initState.productReview,
      }).error,
    ).toEqual(null);
    expect(
      products.ProductReview(initState.productReview, {
        type: types.ADD_PRODUCT_REVIEW_SUCCESS,
        payload: initState.productReview.data,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      products.ProductReview(initState.productReview, {
        type: types.GET_PRODUCT_REVIEW_LOADING,
        payload: initState.productReview,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      products.ProductReview(initState.productReview, {
        type: types.ADD_PRODUCT_REVIEW_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});

describe('PopularProducts reducer', () => {
  it('should update the store data', () => {
    expect(
      products.PopularProducts(initState.popularProducts, {
        type: types.GET_POPULAR_PRODUCTS_SUCCESS,
        payload: initState.popularProducts,
      }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      products.PopularProducts(initState.popularProducts, {
        type: types.GET_POPULAR_PRODUCTS_LOADING,
        payload: initState.popularProducts,
      }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      products.PopularProducts(initState.popularProducts, {
        type: types.GET_POPULAR_PRODUCTS_FAILURE,
        payload: "error occured",
      }).error,
    ).toEqual("error occured");
  });
});
