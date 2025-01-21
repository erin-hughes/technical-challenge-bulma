import { RowData } from "../../../interfaces/RowData";

export const applySearchString = (
  tableData: RowData[] | undefined,
  searchString: string,
): RowData[] => {
  const searchedTableData = tableData?.filter((row) => {
    return Object.values(row).find((value) => {
      return value.toString().includes(searchString);
    });
  });
  return searchedTableData || [];
};
