import saveUserData from "../saveUserData";

describe("saveUserData", () => {
  it("should format error message", () => {
    saveUserData({
      customer: {customer_id: 1} 
    });
    saveUserData({});
  });
});
