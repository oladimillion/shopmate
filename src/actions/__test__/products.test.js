import * as actions from "..";
import * as types from '../types';


describe('products request action test', () => {
  it('should dispatch get products request action', () => {
    expect(actions.getProducts({}).type).toEqual(
      types.GET_PRODUCTS_REQUEST,
    );
  });
  it('should dispatch get product by id request action', () => {
    expect(actions.getProductById({}).type).toEqual(
      types.GET_PRODUCT_BY_ID_REQUEST,
    );
  });
  it('should dispatch search product request action', () => {
    expect(actions.searchProducts({}).type).toEqual(
      types.SEARCH_PRODUCTS_REQUEST,
    );
  });
  it('should dispatch get products by department request action', () => {
    expect(actions.getProductsByDepartment({}).type).toEqual(
      types.GET_PRODUCTS_BY_DEPARTMENT_REQUEST,
    );
  });
  it('should dispatch get products by category request action', () => {
    expect(actions.getProductsByCategory({}).type).toEqual(
      types.GET_PRODUCTS_BY_CATEGORY_REQUEST,
    );
  });
  it('should dispatch get product review request action', () => {
    expect(actions.getProductReview({}).type).toEqual(
      types.GET_PRODUCT_REVIEW_REQUEST,
    );
  });
  it('should dispatch add product review request action', () => {
    expect(actions.addProductReview({}).type).toEqual(
      types.ADD_PRODUCT_REVIEW_REQUEST,
    );
  });
  it('should dispatch get product populars request action', () => {
    expect(actions.getPopularProducts({}).type).toEqual(
      types.GET_POPULAR_PRODUCTS_REQUEST,
    );
  });
});
