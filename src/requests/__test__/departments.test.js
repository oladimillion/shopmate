import * as requests from "..";

describe("Departments requests", () => {
  it("get departments", () => {
    requests.getDepartments().then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


