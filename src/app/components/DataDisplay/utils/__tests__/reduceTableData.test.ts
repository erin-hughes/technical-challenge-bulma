import { reduceTableData } from "../reduceTableData";
import { PriceData } from "../../../../interfaces/FetchedData";

describe("reduceTableData", () => {
  const mockPriceData: PriceData = {
    open: [21.12, 22.34, 23.45],
    close: [22.54, 23.67, 24.78],
    high: [22.89, 23.9, 24.99],
    low: [20.11, 21.22, 22.33],
    volume: [1000, 2000, 3000],
    timestamp: ["2023-01-01", "2023-01-02", "2023-01-03"],
  };

  const headers = ["open", "close", "high", "low", "volume", "timestamp"];

  it("converts PriceData into RowData", () => {
    const result = reduceTableData(mockPriceData, headers);
    expect(result).toEqual([
      {
        open: 21.12,
        close: 22.54,
        high: 22.89,
        low: 20.11,
        volume: 1000,
        timestamp: "2023-01-01",
      },
      {
        open: 22.34,
        close: 23.67,
        high: 23.9,
        low: 21.22,
        volume: 2000,
        timestamp: "2023-01-02",
      },
      {
        open: 23.45,
        close: 24.78,
        high: 24.99,
        low: 22.33,
        volume: 3000,
        timestamp: "2023-01-03",
      },
    ]);
  });

  it("returns an empty array for empty PriceData", () => {
    const emptyPriceData: PriceData = {
      open: [],
      close: [],
      high: [],
      low: [],
      volume: [],
      timestamp: [],
    };
    const result = reduceTableData(emptyPriceData, headers);
    expect(result).toEqual([]);
  });

  it("throws an error if a header does not exist in PriceData", () => {
    const invalidHeaders = ["open", "close", "invalidHeader"];
    expect(() => reduceTableData(mockPriceData, invalidHeaders)).toThrow();
  });
});
