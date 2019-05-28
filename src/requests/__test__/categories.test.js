import * as requests from "..";

describe("Categories requests", () => {
  it("get categories", () => {
    requests.getCategories().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


