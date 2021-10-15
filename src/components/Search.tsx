import { useRef } from "react";
import Select from "react-select";
import styled from "styled-components";
import { FilterValue, Option } from "../interfaces";

interface Props {
  sortAsc: boolean;
  filter: Option;
  toggleSort: () => void;
  onFilterChange: (newValue: Option) => void;
  onSearchClick: (value: string) => void;
}

export const noFilter = { value: FilterValue.None, label: "No filter" };

const Search = ({
  filter,
  sortAsc,
  toggleSort,
  onFilterChange,
  onSearchClick,
}: Props) => {
  const textInput = useRef<HTMLInputElement>(null);

  const onSubmit = () => onSearchClick(textInput.current?.value || "");

  const filterOptions = [
    noFilter,
    { value: FilterValue.LessThen1, label: "Less then 1 min" },
    { value: FilterValue.MoreThen1, label: "More then 1 min" },
    { value: FilterValue.MoreThen2, label: "More then 2 min" },
    { value: FilterValue.MoreThen3, label: "More then 3 min" },
  ];

  return (
    <Container className="app">
      <Title htmlFor="search-input">Search Tracks:</Title>
      <SearchInput
        ref={textInput}
        type="search"
        name="search-input"
        placeholder="Search tracks..."
        onClick={() => textInput.current?.focus()}
      />
      <ButtonsWrapper>
        <button onClick={onSubmit}>Search</button>
        <button onClick={toggleSort}>Sort: {sortAsc ? "A-Z" : "Z-A"}</button>
        <Select
          className="select"
          value={filter}
          options={filterOptions}
          onChange={onFilterChange}
        />
      </ButtonsWrapper>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 1px solid gray;
  padding-bottom: 15px;
  margin-bottom: 15px;

  label,
  input {
    margin-bottom: 5px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  place-content: space-between;

  button,
  .select {
    flex: 1;
  }

  button {
    background: white;
  }
`;

const Title = styled.label`
  font-size: 50px;
`;

const SearchInput = styled.input`
  height: 35px;
  font-size: 22px;
`;
