import * as products from "../products";
import * as types from "../../actions/types";

describe("Products saga", () => {
  it("get products by department", () => {
    const gen = products.getProductsByDepartmentAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCTS_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCTS_FAILURE)
  });
  it("get products by category", () => {
    const gen = products.getProductsByCategoryAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCTS_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCTS_FAILURE)
  });
  it("get products by id", () => {
    const gen = products.getProductByIdAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCT_BY_ID_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCT_BY_ID_FAILURE)
  });
  it("get products review", () => {
    const gen = products.getProductReviewAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCT_REVIEW_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCT_REVIEW_FAILURE)
  });
  it("add product review", () => {
    const gen = products.addProductReviewAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.ADD_PRODUCT_REVIEW_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.ADD_PRODUCT_REVIEW_FAILURE)
  });
  it("get products", () => {
    const gen = products.getProductsAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCTS_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCTS_FAILURE)
  });
  it("search product", () => {
    const gen = products.searchProductsAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCTS_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_PRODUCTS_FAILURE)
  });
  it("get popular products", () => {
    const gen = products.getPopularProductsAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_POPULAR_PRODUCTS_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.GET_POPULAR_PRODUCTS_FAILURE)
  });
});


