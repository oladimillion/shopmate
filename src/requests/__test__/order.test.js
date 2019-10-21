import * as requests from "..";

describe("Order requests", () => {
  it("create an order", () => {
    requests.createOrder().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get customer order", () => {
    requests.getCustomerOrder().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get order by id", () => {
    requests.getOrderById({order_id: 1}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


