import * as requests from "..";

describe("ShippingRegion requests", () => {
  it("get shipping region", () => {
    requests.getShippingRegion().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get shipping region by id", () => {
    requests.getShippingRegionById({
      shipping_region_id: 3,
    }).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


