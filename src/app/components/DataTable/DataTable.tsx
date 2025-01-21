"use client";
import Pagination from "../Pagination/Pagination";
import { useTableContext } from "../../context/TableContext";
import { RowData } from "../../interfaces/RowData";
import "./DataTable.scss";

const DataTable = (): React.ReactElement => {
  const {
    tableData,
    tableHeaders,
    currentPage,
    pageSize,
    totalPages,
    sortingHeader,
    setCurrentPage,
    setSortingHeader,
  } = useTableContext();

  const goToNextPage = (): void => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = (): void => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // util function to render rows based on the current page number
  const renderVisibleRows = (): React.ReactElement[] => {
    const startIndex: number = (currentPage - 1) * pageSize;
    const endIndex: number = currentPage * pageSize - 1;

    const rows: React.ReactElement[] = [];
    if (!tableData) return rows;
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= tableData?.length) break;
      else {
        rows.push(
          <tr key={`row-${i}`}>
            {tableHeaders.map((header) => {
              const currentRow: RowData = tableData[i];
              return (
                <td key={`row-${i}-${header}`}>
                  {currentRow[header as keyof RowData]}
                </td>
              );
            })}
          </tr>,
        );
      }
    }
    return rows;
  };

  const onHeaderClick = (e: React.MouseEvent<HTMLTableCellElement>): void => {
    setSortingHeader(e?.currentTarget?.title);
  };

  return (
    <div>
      <div className="table-container">
        <table className="table is-bordered is-striped is-fullwidth is-hoverable">
          <thead>
            <tr>
              {tableHeaders?.map((header: string) => (
                <th
                  key={header}
                  title={header}
                  onClick={onHeaderClick}
                  className="datatable-header"
                >
                  {header}
                  {sortingHeader === header && <span className="pl-2">⬆️</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{renderVisibleRows()}</tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextClick={goToNextPage}
        onPreviousClick={goToPreviousPage}
      />
    </div>
  );
};

export default DataTable;
