import { applyDateFilter } from "../applyDateFilter";
import { RowData } from "../../../../interfaces/RowData";
import { mockData } from "./__data__/mockData";
import { DateFilter } from "../../../FilterPanel/DateFilter";

describe("applyDateFilter", () => {
  const mockNow = new Date("2023-01-05 16:15:00");
  jest.useFakeTimers().setSystemTime(mockNow);

  it("filters rows correctly for DateFilter.Today", () => {
    const result = applyDateFilter(mockData, DateFilter.Today);
    expect(result).toEqual([
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

  it("filters rows correctly for DateFilter.Last3Days", () => {
    const result = applyDateFilter(mockData, DateFilter.Last3Days);
    expect(result).toEqual([
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

  it("filters rows correctly for DateFilter.Last5Days", () => {
    const result = applyDateFilter(mockData, DateFilter.Last5Days);
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

  it("returns an empty array when no rows match the range", () => {
    const result = applyDateFilter([mockData[0]], DateFilter.Today);
    expect(result).toEqual([]);
  });

  // it("includes rows exactly on the boundary", () => {
  //   const result = applyDateFilter(tableData, 2); // 2 days
  //   expect(result).toContainEqual({
  //     close: 200,
  //     low: 190,
  //     open: 195,
  //     high: 210,
  //     volume: 2000,
  //     timestamp: "2023-01-02T12:00:00Z",
  //   });
  // });

  it("returns an empty array when tableData is undefined", () => {
    const result = applyDateFilter(undefined, DateFilter.Today);
    expect(result).toEqual([]);
  });

  it("returns an empty array for empty input", () => {
    const result = applyDateFilter([], DateFilter.Today);
    expect(result).toEqual([]);
  });
});
