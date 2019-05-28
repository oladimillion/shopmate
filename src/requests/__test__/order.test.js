import * as requests from "..";

describe("Order requests", () => {
  it("create an order", () => {
    requests.createOrder().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


