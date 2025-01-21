import { applySearchString } from "../applySearchString";
import { mockData } from "./__data__/mockData";

describe("applySearchString", () => {
  it("returns rows that have a value that matched searchString", () => {
    const result = applySearchString(mockData, "200");
    expect(result).toEqual([
      {
        close: 200,
        low: 190,
        open: 195,
        high: 210,
        volume: 2000,
        timestamp: "2023-01-02 10:30:00",
      },
    ]);
  });

  it("returns all rows if every row contains a match to searchString", () => {
    const result = applySearchString(mockData, "2023-01");
    expect(result).toEqual(mockData);
  });

  it("returns an empty array when searchString yields no matches", () => {
    const result = applySearchString(mockData, "999");
    expect(result).toEqual([]);
  });

  it("returns all rows when searchString is empty", () => {
    const result = applySearchString(mockData, "");
    expect(result).toEqual(mockData);
  });

  it("handles tableData being undefined", () => {
    const result = applySearchString(undefined, "200");
    expect(result).toEqual([]);
  });
});
