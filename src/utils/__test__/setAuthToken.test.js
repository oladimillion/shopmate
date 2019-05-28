import setAuthToken from "../setAuthToken";

describe("setAuthToken", () => {
  it("should set the header and cookie with the authentication token", () => {
    setAuthToken({
      accessToken: "897jkshkdjk9837897239djkshywqti",
      expires_in: "24h",
    });
    setAuthToken({
      accessToken: "897jkshkdjk9837897239djkshywqti",
    });
    setAuthToken({});
  });
});

