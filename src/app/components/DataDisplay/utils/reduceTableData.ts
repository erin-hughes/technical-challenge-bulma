import { PriceData } from "../../../interfaces/FetchedData";
import { RowData } from "../../../interfaces/RowData";

/**
 * util function to convert the raw data into a format more easily consummable by the DataTable
 * original format looks something like:
 * priceData: {
 *  open: [300+ entries]
 *  close: [300+ entries]
 *  timestamp [300+ entries]
 * }
 * reduced format will look like this:
 * priceData [
 *   {
 *      open: 21.1232123,
 *      close: 22.54654,
 *      timestamp: some timestamp
 *   },
 *   ...300+ objects
 * ]
 */
export const reduceTableData = (
  dataToReduce: PriceData,
  headers: string[],
): RowData[] => {
  // rowCount assumes that there will never be a case where a cell does not have any data in it
  // in the case that a cell should be empty, the response data would need a nullish value to represent that in order to preserve row order
  const rowCount = dataToReduce[headers[0] as keyof PriceData]?.length;

  const reducedTableData = Array.from({ length: rowCount }).map((_, index) =>
    headers.reduce((row, header) => {
      // @ts-expect-error - the headers for RowData are derived from PriceData, so we know they map properly
      row[header] = dataToReduce[header as keyof PriceData][index];
      return row;
    }, {} as RowData),
  );

  return reducedTableData;
};
