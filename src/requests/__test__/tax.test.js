import * as requests from "..";

describe("Tax requests", () => {
  it("get tax", () => {
    requests.getTax().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


