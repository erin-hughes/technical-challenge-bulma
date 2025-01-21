export interface PriceData {
  close: number[];
  high: number[];
  low: number[];
  open: number[];
  timestamp: string[];
  volume: number[];
}

export interface FetchedData {
  ticker: string;
  priceData: PriceData;
}
