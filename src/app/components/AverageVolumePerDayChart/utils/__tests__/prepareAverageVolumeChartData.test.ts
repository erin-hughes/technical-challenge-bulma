import { prepareAverageVolumeChartData } from "../prepareAverageVolumeChartData";
import { RowData } from "../../../../interfaces/RowData";
import { mockAverageVolumeData } from "./__data__/mockAverageVolumeData";

describe("prepareAverageVolumeChartData", () => {
  const mockNow = new Date("2023-01-05 16:15:00");
  jest.useFakeTimers().setSystemTime(mockNow); // Mock the current date

  it("calculates average volume for days with data", () => {
    const result = prepareAverageVolumeChartData([mockAverageVolumeData[5]]);
    expect(result).toEqual([
      { date: "2023-01-05", averageVolume: 8000 },
    ]);
  });

  it("includes missing dates with averageVolume: 0", () => {
    const result = prepareAverageVolumeChartData(mockAverageVolumeData);
    expect(result).toEqual([
      { date: "2023-01-01", averageVolume: 502 },
      { date: "2023-01-02", averageVolume: 0 },
      { date: "2023-01-03", averageVolume: 2500 },
      { date: "2023-01-04", averageVolume: 0 },
      { date: "2023-01-05", averageVolume: 8000 },
    ]);
  });

  it("returns an empty array is rowData is empty", () => {
    const result = prepareAverageVolumeChartData([]);
    expect(result).toEqual([]);
  });
});
