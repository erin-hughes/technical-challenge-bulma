import { RowData } from "../../../interfaces/RowData";
import { DateFilter } from "../../FilterPanel/DateFilter";

export const applyDateFilter = (
  tableData: RowData[] | undefined,
  dateFilter: DateFilter,
): RowData[] => {
  const hourRange = 24 * dateFilter;
  const now = new Date();
  const cutoffDate = new Date(now.getTime() - hourRange * 60 * 60 * 1000);
  const filteredTableData = tableData?.filter((row) => {
    const rowDate = new Date(row.timestamp);
    return rowDate >= cutoffDate; // Include rows within the range
  });
  return filteredTableData || [];
};
