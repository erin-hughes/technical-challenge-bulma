import { RowData } from "../../../interfaces/RowData";

export const sortByHeaderAscending = (
  tableData: RowData[] | undefined,
  header: keyof RowData,
): RowData[] => {
  if (!tableData) return [];
  const sortedTableData = [...tableData];
  sortedTableData.sort((a, b) => {
    if (a[header] > b[header]) {
      return 1;
    } else if (a[header] < b[header]) {
      return -1;
    } else return 0;
  });
  return sortedTableData;
};
