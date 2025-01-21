"use client";
import { useTableContext } from "@/app/context/TableContext";

const ResetButton = (): React.ReactElement => {
  const {
    originalTableData,
    pageSize,
    setTableData,
    setCurrentPage,
    setTotalPages,
    setSearchString,
    setSortingHeader,
    setDateFilter,
  } = useTableContext();

  const handleReset = (): void => {
    setTableData(originalTableData);
    setCurrentPage(1);
    if (originalTableData?.length)
      setTotalPages(Math.ceil(originalTableData.length / pageSize));
    setSearchString("");
    setSortingHeader("");
    setDateFilter(undefined);
  };

  return (
    <div className="is-flex is-justify-content-center mb-4">
      <button className="button is-primary is-dark" onClick={handleReset}>
        Reset application state
      </button>
    </div>
  );
};

export default ResetButton;
