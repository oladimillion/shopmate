import connectivityCheck from "../connectivityCheck";
import * as types from "../../actions/types";

describe("connectivityCheck", () => {
  it("should format error message", () => {
    expect(
      connectivityCheck(
        {
          response: {
            data: "Email is required",
          }
        },
        types.USER_LOGOUT,
      ).payload
    ).toEqual(
      "Email is required" 
    );
    expect(
      connectivityCheck(
        {},
        types.USER_LOGOUT,
      ).payload
    ).toEqual(
      "No internet connectivity"
    );
  });
});
