import { sortByHeaderAscending } from "../sortByHeaderAscending";
import { RowData } from "../../../../interfaces/RowData";
import { mockData, mockDataDupeHighValue, mockDataUnsorted } from "./__data__/mockData";

describe("sortByHeaderAscending", () => {
  it("sorts rows by a numeric header in ascending order", () => {
    const result = sortByHeaderAscending(mockData, "low");
    expect(result).toEqual([
        {
          close: 100,
          low: 90,
          open: 95,
          high: 110,
          volume: 1000,
          timestamp: "2023-01-01 09:30:00",
        },
        {
          close: 200,
          low: 190,
          open: 195,
          high: 210,
          volume: 2000,
          timestamp: "2023-01-02 10:30:00",
        },
        {
          close: 440,
          low: 230,
          open: 450,
          high: 300,
          volume: 8000,
          timestamp: "2023-01-05 16:15:00",
        },
        {
          close: 300,
          low: 290,
          open: 295,
          high: 310,
          volume: 3000,
          timestamp: "2023-01-03 14:30:00",
        },
      ]);
  });

  it("sorts rows by timestamp string in ascending order", () => {
    const result = sortByHeaderAscending(mockDataUnsorted, "timestamp");
    expect(result).toEqual([
        {
          close: 100,
          low: 90,
          open: 95,
          high: 110,
          volume: 1000,
          timestamp: "2023-01-01 09:30:00",
        },
        {
          close: 200,
          low: 190,
          open: 195,
          high: 210,
          volume: 2000,
          timestamp: "2023-01-02 10:30:00",
        },
        {
          close: 300,
          low: 290,
          open: 295,
          high: 310,
          volume: 3000,
          timestamp: "2023-01-03 14:30:00",
        },
        {
          close: 440,
          low: 230,
          open: 450,
          high: 300,
          volume: 8000,
          timestamp: "2023-01-05 16:15:00",
        },
      ]);
  });

  it("handles rows with the same value for sortingHeader", () => {
      const result = sortByHeaderAscending(mockDataDupeHighValue, "high");
      expect(result).toEqual([
        {
          close: 300,
          low: 290,
          open: 295,
          high: 150,
          volume: 3000,
          timestamp: "2023-01-03 14:30:00",
        },
        {
          close: 440,
          low: 230,
          open: 450,
          high: 555,
          volume: 8000,
          timestamp: "2023-01-05 16:15:00",
        },
        {
          close: 200,
          low: 190,
          open: 195,
          high: 555,
          volume: 2000,
          timestamp: "2023-01-02 10:30:00",
        },
      ]);
  });

  it("returns an empty array when tableData is undefined", () => {
    const result = sortByHeaderAscending(undefined, "close");
    expect(result).toEqual([]);
  });

  it("returns an empty array when tableData is empty", () => {
    const result = sortByHeaderAscending([], "close");
    expect(result).toEqual([]);
  });

  it("handles rows with equal values for the header", () => {
    const tableDataWithDuplicates: RowData[] = [
      { close: 150, low: 140, open: 145, high: 160, volume: 1500, timestamp: "2023-01-01" },
      { close: 150, low: 140, open: 145, high: 160, volume: 1000, timestamp: "2023-01-02" },
      { close: 300, low: 290, open: 295, high: 310, volume: 2000, timestamp: "2023-01-03" },
    ];
    const result = sortByHeaderAscending(tableDataWithDuplicates, "close");
    expect(result).toEqual([
      { close: 150, low: 140, open: 145, high: 160, volume: 1500, timestamp: "2023-01-01" },
      { close: 150, low: 140, open: 145, high: 160, volume: 1000, timestamp: "2023-01-02" },
      { close: 300, low: 290, open: 295, high: 310, volume: 2000, timestamp: "2023-01-03" },
    ]);
  });
});
