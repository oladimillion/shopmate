import formatErrorMessage from "../formatErrorMessage";

describe("formatErrorMessage", () => {
  it("should format error message", () => {
    expect(
      formatErrorMessage({
        message: "The field(s) is/are required",
        field: "first_name, last_name",
      })
    ).toEqual(
      "first_name, last_name is/are required"
    );
    expect(
      formatErrorMessage({
        message: "Email is/are required",
      })
    ).toEqual(
      "Email is/are required"
    );
  });
});
