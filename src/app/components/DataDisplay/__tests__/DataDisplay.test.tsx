import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useFetchData } from "../../../hooks/useFetchData";
import { useTableContext } from "../../../context/TableContext";
import DataDisplay from "../DataDisplay";
import "@testing-library/jest-dom";
import { DataTabProps } from "../../DataTabs/DataTabProps";

// Mock child components to simplify testing
/* eslint-disable react/display-name */
jest.mock("../../DataTable/DataTable", () => () => <div>Mocked DataTable</div>);
jest.mock("../../SearchBar/SearchBar", () => () => <div>Mocked SearchBar</div>);
jest.mock("../../FilterPanel/FilterPanel", () => () => (
  <div>Mocked FilterPanel</div>
));
jest.mock(
  "../../AverageVolumePerDayChart/AverageVolumePerDayChart",
  () => () => <div>Mocked AverageVolumeChart</div>,
);
jest.mock("../../ResetButton/ResetButton", () => () => (
  <button>Mocked ResetButton</button>
));
jest.mock(
  "../../DataTabs/DataTabs",
  () =>
    ({ activeTab, setActiveTab }: DataTabProps) => (
      <div>
        <button onClick={() => setActiveTab("Table")}>Table Tab</button>
        <button onClick={() => setActiveTab("Graph")}>Graph Tab</button>
        <div>Active Tab: {activeTab}</div>
      </div>
    ),
);
/* eslint-enable react/display-name */

// Mock hooks and context
jest.mock("../../../hooks/useFetchData");
jest.mock("../../../context/TableContext");

// Mock camelcase-keys package
jest.mock("camelcase-keys", () => jest.fn((data) => data));

describe("DataDisplay", () => {
  const mockSetTableData = jest.fn();
  const mockSetOriginalTableData = jest.fn();
  const mockSetTotalPages = jest.fn();
  const mockSetTableHeaders = jest.fn();
  const mockSetCurrentPage = jest.fn();

  const mockTableContext = {
    tableData: [],
    pageSize: 10,
    sortingHeader: "",
    searchString: "",
    dateFilter: 1,
    setTableData: mockSetTableData,
    setOriginalTableData: mockSetOriginalTableData,
    setTotalPages: mockSetTotalPages,
    setTableHeaders: mockSetTableHeaders,
    setCurrentPage: mockSetCurrentPage,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useTableContext as jest.Mock).mockReturnValue(mockTableContext);
  });

  it("renders loading state when loading is true", () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: undefined,
      error: "",
      loading: true,
    });
    render(<DataDisplay />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error message if the API call has returned an error message", () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: undefined,
      error: "API Error",
      loading: false,
    });
    render(<DataDisplay />);
    expect(screen.getByText("API Error")).toBeInTheDocument();
  });

  it("renders table components when API call succeeds and Table tab is active", () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: { priceData: {} },
      error: "",
      loading: false,
    });
    render(<DataDisplay />);

    // Check that the ResetButton and Table-related components render
    expect(screen.getByText("Mocked ResetButton")).toBeInTheDocument();
    expect(screen.getByText("Mocked DataTable")).toBeInTheDocument();
    expect(screen.getByText("Mocked FilterPanel")).toBeInTheDocument();
    expect(screen.getByText("Mocked SearchBar")).toBeInTheDocument();
  });

  it("renders the chart when Graph tab is active", () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: { priceData: {} },
      error: "",
      loading: false,
    });
    render(<DataDisplay />);

    // Click the Graph tab
    fireEvent.click(screen.getByText("Graph Tab"));

    // Check that the chart-related component renders
    expect(screen.getByText("Mocked AverageVolumeChart")).toBeInTheDocument();
  });
});
