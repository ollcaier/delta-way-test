import { getFormedDateFromDatestring } from "../getFormedDateFromDatestring";

describe("test getFormedDateFromDatestring function", () => {
  it("should return 22 March, 1998 for 1998-03-22T11:00:00", () => {
    expect(
      getFormedDateFromDatestring("1998-03-22T11:00:00"),
    )
      .toBe("22 March, 1998");
  });

  it("should return 1 January, 2018 for 2018-01-01T11:00:00", () => {
    expect(
      getFormedDateFromDatestring("2018-01-01T11:00:00"),
    )
      .toBe("1 January, 2018");
  });

  it("should throw error for invalid date", () => {
    expect(() => {
        getFormedDateFromDatestring("invalid date");
    })
      .toThrow("Invalid Date");
  });
});
