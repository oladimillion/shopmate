import * as requests from "..";

describe("User requests", () => {
  it("login", () => {
    requests.login({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("signup", () => {
    requests.signup({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("get user", () => {
    requests.getUser({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("profile", () => {
    requests.profile({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
  it("address", () => {
    requests.address({}).then(res => {
      expect(res).toEqual(Promise({}));
    });
  });
});


