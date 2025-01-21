export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextClick: () => void;
  onPreviousClick: () => void;
}
