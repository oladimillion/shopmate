import fetch from "../fetch";

describe("Fetch api", () => {
  it("post method", () => {
    fetch.post("/login", {})
      .then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});
