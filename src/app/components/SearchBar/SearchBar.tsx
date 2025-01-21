"use client";
import { useTableContext } from "../../context/TableContext";

const SearchBar = (): React.ReactElement => {
  const { searchString, setSearchString } = useTableContext();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchString(e.target.value);
  };

  return (
    <p className="control">
      <input
        className="input"
        type="text"
        placeholder="Enter text to search data"
        onChange={handleOnChange}
        value={searchString}
      />
    </p>
  );
};

export default SearchBar;
