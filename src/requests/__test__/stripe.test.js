import * as requests from "..";

describe("Stripe requests", () => {
  it("generate stripe token", () => {
    requests.genStripeToken().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("create stripe charge", () => {
    requests.createStripeCharge().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


