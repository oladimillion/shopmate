import * as users from "../users";
import * as types from "../../actions/types";

describe("Users saga", () => {
  it("get user", () => {
    const gen = users.getUserAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_FAILURE)
  });
  it("login", () => {
    const gen = users.loginAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_FAILURE)
  });
  it("signup", () => {
    const gen = users.signupAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_FAILURE)
  });
  it("address", () => {
    const gen = users.addressAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_FAILURE)
  });
  it("profile", () => {
    const gen = users.profileAsync({});
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_LOADING)
    gen.next()
    expect(
      gen.next().value.payload.action.type
    ).toEqual(types.USER_FAILURE)
  });
});


