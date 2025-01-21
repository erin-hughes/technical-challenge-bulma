import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useTableContext } from "../../../context/TableContext";
import SearchBar from "../SearchBar";
import "@testing-library/jest-dom";

// Mock for TableContext
jest.mock("../../../context/TableContext");

describe("SearchBar", () => {
  const mockSetSearchString = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useTableContext as jest.Mock).mockReturnValue({
      searchString: "initial value",
      setSearchString: mockSetSearchString,
    });
  });

  it("renders an empty input when searchString is empty", () => {
    (useTableContext as jest.Mock).mockReturnValue({
      searchString: "",
      setSearchString: mockSetSearchString,
    });

    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Enter text to search data");
    expect(input).toHaveValue("");
  });

  it("renders the searchString from context", () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Enter text to search data");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("initial value");
  });

  it("calls setSearchString when input value changes", () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Enter text to search data");

    fireEvent.change(input, { target: { value: "new value" } });

    expect(mockSetSearchString).toHaveBeenCalledWith("new value");
    expect(mockSetSearchString).toHaveBeenCalledTimes(1);
  });
});
