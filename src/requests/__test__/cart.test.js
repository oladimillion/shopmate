import * as requests from "..";

describe("Cart requests", () => {
  it("add item to cart", () => {
    requests.addCart({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get cart", () => {
    requests.getCart({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("gen cart id", () => {
    requests.genCartID({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get cart amount", () => {
    requests.getCartAmount({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("update cart", () => {
    requests.updateCart({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("delete cart item", () => {
    requests.deleteCartItem({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


