import { RowData } from "../../../../../interfaces/RowData";

export const mockData: RowData[] = [
  {
    close: 100,
    low: 90,
    open: 95,
    high: 110,
    volume: 1000,
    timestamp: "2023-01-01 09:30:00",
  },
  {
    close: 200,
    low: 190,
    open: 195,
    high: 210,
    volume: 2000,
    timestamp: "2023-01-02 10:30:00",
  },
  {
    close: 300,
    low: 290,
    open: 295,
    high: 310,
    volume: 3000,
    timestamp: "2023-01-03 14:30:00",
  },
  {
    close: 440,
    low: 230,
    open: 450,
    high: 300,
    volume: 8000,
    timestamp: "2023-01-05 16:15:00",
  },
];

export const mockDataUnsorted: RowData[] = [
  {
    close: 440,
    low: 230,
    open: 450,
    high: 300,
    volume: 8000,
    timestamp: "2023-01-05 16:15:00",
  },
  {
    close: 200,
    low: 190,
    open: 195,
    high: 210,
    volume: 2000,
    timestamp: "2023-01-02 10:30:00",
  },
  {
    close: 300,
    low: 290,
    open: 295,
    high: 310,
    volume: 3000,
    timestamp: "2023-01-03 14:30:00",
  },
  {
    close: 100,
    low: 90,
    open: 95,
    high: 110,
    volume: 1000,
    timestamp: "2023-01-01 09:30:00",
  },
];

export const mockDataDupeHighValue: RowData[] = [
  {
    close: 440,
    low: 230,
    open: 450,
    high: 555,
    volume: 8000,
    timestamp: "2023-01-05 16:15:00",
  },
  {
    close: 200,
    low: 190,
    open: 195,
    high: 555,
    volume: 2000,
    timestamp: "2023-01-02 10:30:00",
  },
  {
    close: 300,
    low: 290,
    open: 295,
    high: 150,
    volume: 3000,
    timestamp: "2023-01-03 14:30:00",
  },
];
