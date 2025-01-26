"use client";
import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { useTableContext } from "../../context/TableContext";
import DataTable from "../DataTable/DataTable";
import SearchBar from "../SearchBar/SearchBar";
import ResetButton from "../ResetButton/ResetButton";
import FilterPanel from "../FilterPanel/FilterPanel";
import { RowData } from "../../interfaces/RowData";
import { reduceTableData } from "./utils/reduceTableData";
import { sortByHeaderAscending } from "./utils/sortByHeaderAscending";
import { applySearchString } from "./utils/applySearchString";
import { applyDateFilter } from "./utils/applyDateFilter";
import DataTabs from "../DataTabs/DataTabs";
import AverageVolumePerDayChart from "../AverageVolumePerDayChart/AverageVolumePerDayChart";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const DataDisplay = (): React.ReactElement => {
  const { data, error, loading } = useFetchData();
  const {
    tableData,
    pageSize,
    sortingHeader,
    searchString,
    dateFilter,
    setTableData,
    setOriginalTableData,
    setTotalPages,
    setTableHeaders,
    setCurrentPage,
  } = useTableContext();

  const [activeTab, setActiveTab] = useState<string>("Table");

  // useEffect to format the data when the API call returns
  useEffect(() => {
    if (data?.priceData) {
      const headers = Object.keys(data.priceData);
      setTableHeaders(headers);
      const reducedTableData = reduceTableData(data.priceData, headers);
      setTableData(reducedTableData);
      setOriginalTableData(reducedTableData);

      // rowCount assumes that there will never be a case where a cell does not have any data in it
      // in the case that a cell should be empty, the response data would need a nullish value to represent that in order to preserve row order
      const rowCount = data.priceData?.open?.length || 0;
      setTotalPages(Math.ceil(rowCount / pageSize));
    }
  }, [
    data,
    pageSize,
    setTableHeaders,
    setTableData,
    setOriginalTableData,
    setTotalPages,
  ]);

  // useEffect to sort the data when a table header is clicked
  useEffect(() => {
    if (!!sortingHeader) {
      const sortedTableData = sortByHeaderAscending(
        tableData,
        sortingHeader as keyof RowData,
      );
      setTableData(sortedTableData);
    }
  }, [sortingHeader, setTableData]);

  // useEffect to apply search string when entered into the search bar
  useEffect(() => {
    if (!!searchString) {
      const searchedTableData = applySearchString(tableData, searchString);
      setTableData(searchedTableData);
      setCurrentPage(1);
      setTotalPages(Math.ceil(searchedTableData.length / pageSize));
    }
  }, [searchString, pageSize, setTableData, setCurrentPage, setTotalPages]);

  // useEffect to apply data range filter when the corresponding radio button is clicked
  useEffect(() => {
    if (!!dateFilter) {
      const filteredTableData = applyDateFilter(tableData, dateFilter);
      setTableData(filteredTableData);
      setCurrentPage(1);
      setTotalPages(Math.ceil(filteredTableData.length / pageSize));
    }
  }, [dateFilter, pageSize, setTableData, setCurrentPage, setTotalPages]);

  // Render logic
  if (loading) return <div>Loading...</div>;
  else if (data) {
    return (
      <div>
        <ResetButton />
        <DataTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Table" && (
          <div>
            <FilterPanel />
            <SearchBar />
            <DataTable />
          </div>
        )}
        {activeTab === "Graph" && <AverageVolumePerDayChart />}
      </div>
    );
  } else
    return (
      <div>
        <ErrorMessage message={error} />
      </div>
    );
};

export default DataDisplay;
