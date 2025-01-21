import { RowData } from "../../../interfaces/RowData";
import { AverageVolumeChartData } from "../interfaces/AverageVolumeChartData";

/**
 * calculates the average volume of the data records for a given day
 * date range is from the earliest data record until today's date, with 0 returned for gaps
 */
export const prepareAverageVolumeChartData = (
  tableData: RowData[],
): AverageVolumeChartData[] => {
  if (!tableData.length) return [];

  // first determine the date range
  // start with the first data record as the table data is sorted by date by default
  const firstDate = new Date(tableData[0].timestamp.split(" ")[0]);
  let currentDate = new Date(firstDate);
  const today = new Date();

  const allDates: string[] = [];
  while (currentDate <= today) {
    allDates.push(currentDate.toISOString().split("T")[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return allDates.map((date: string) => {
    // need to keep an aggregate total and the total number of data records for each date to calculate the average
    let totalVolume = 0;
    let count = 0;

    for (const row of tableData) {
      const rowDate = row.timestamp.split(" ")[0];
      if (rowDate > date) break;
      if (rowDate === date) {
        totalVolume += row.volume;
        count++;
      }
    }

    const averageVolume = count > 0 ? Math.round(totalVolume / count) : 0;
    return { date, averageVolume };
  });
};
