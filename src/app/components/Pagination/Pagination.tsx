"use client";
import { PaginationProps } from "./PaginationProps";

const Pagination = ({
  currentPage,
  totalPages,
  onNextClick,
  onPreviousClick,
}: PaginationProps): React.ReactElement => {
  return (
    <nav
      className="pagination is-right"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        <li>
          <button
            onClick={onPreviousClick}
            className="pagination-previous"
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <li>
          <span className="pagination-link">{`Page ${currentPage} of ${totalPages}`}</span>
        </li>
        <li>
          <button
            onClick={onNextClick}
            className="pagination-next"
            disabled={currentPage >= totalPages}
          >
            Next page
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
