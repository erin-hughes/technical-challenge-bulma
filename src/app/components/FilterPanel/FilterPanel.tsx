"use client";
import { useTableContext } from "@/app/context/TableContext";
import { DateFilter } from "./DateFilter";

const FilterPanel = (): React.ReactElement => {
  const { dateFilter, setDateFilter } = useTableContext();

  const handleRadioClick = (selectedFilter: DateFilter): void => {
    setDateFilter(selectedFilter);
  };

  return (
    <section className="mb-3">
      Filter by date
      <div className="control">
        <label className="radio pr-2">
          <input
            type="radio"
            name="datefilter"
            checked={dateFilter === DateFilter.Today}
            onChange={() => handleRadioClick(DateFilter.Today)}
          />
          Today
        </label>
        <label className="radio pr-2">
          <input
            type="radio"
            name="datefilter"
            checked={dateFilter === DateFilter.Last3Days}
            onChange={() => handleRadioClick(DateFilter.Last3Days)}
          />
          Last 3 Days
        </label>
        <label className="radio pr-2">
          <input
            type="radio"
            name="datefilter"
            checked={dateFilter === DateFilter.Last5Days}
            onChange={() => handleRadioClick(DateFilter.Last5Days)}
          />
          Last 5 days
        </label>
      </div>
    </section>
  );
};

export default FilterPanel;
