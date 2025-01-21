import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { DateFilter } from "../components/FilterPanel/DateFilter";
import { RowData } from "../interfaces/RowData";

interface TableContext {
  tableData: RowData[] | undefined;
  setTableData: Dispatch<SetStateAction<RowData[] | undefined>>;
  originalTableData: RowData[] | undefined;
  setOriginalTableData: Dispatch<SetStateAction<RowData[] | undefined>>;
  tableHeaders: string[];
  setTableHeaders: Dispatch<SetStateAction<string[]>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
  sortingHeader: string;
  setSortingHeader: Dispatch<SetStateAction<string>>;
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
  dateFilter: DateFilter | undefined;
  setDateFilter: Dispatch<SetStateAction<DateFilter | undefined>>;
}

const TableContext = createContext<TableContext | undefined>(undefined);

// Create the provider
export const TableProvider = ({ children }: { children: ReactNode }) => {
  const [tableData, setTableData] = useState<RowData[] | undefined>();
  const [originalTableData, setOriginalTableData] = useState<
    RowData[] | undefined
  >();
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [sortingHeader, setSortingHeader] = useState<string>("");
  const [searchString, setSearchString] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<DateFilter | undefined>(
    undefined,
  );

  return (
    <TableContext.Provider
      value={{
        tableData,
        setTableData,
        originalTableData,
        setOriginalTableData,
        tableHeaders,
        setTableHeaders,
        currentPage,
        setCurrentPage,
        pageSize,
        setPageSize,
        totalPages,
        setTotalPages,
        sortingHeader,
        setSortingHeader,
        searchString,
        setSearchString,
        dateFilter,
        setDateFilter,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

// Hook for consuming the context
export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTable must be used within a TableProvider");
  }
  return context;
};
