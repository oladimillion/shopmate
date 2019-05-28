import * as requests from "..";

describe("Products requests", () => {
  it("get products", () => {
    requests.getProducts().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("search products", () => {
    requests.searchProducts().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get popular products", () => {
    requests.getPopularProducts().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get product by id", () => {
    requests.getProductById().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get products by category", () => {
    requests.getProductsByCategory({
      query: "?page=1",
      category: 2,
    }).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get products by department", () => {
    requests.getProductsByDepartment({
      query: "?page=1",
      department: 2,
    }).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get product review", () => {
    requests.getProductReview(1).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("add review to product", () => {
    requests.addProductReview({
      product_id: 20,
      rating: 5,
      review: "Good",
    }).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


