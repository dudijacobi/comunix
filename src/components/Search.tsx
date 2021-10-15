import React, { useRef } from "react";
import styled from "styled-components";

interface Props {
  onSearchClick: (value: string) => void;
}

const Search = ({ onSearchClick }: Props) => {
  const textInput = useRef<HTMLInputElement>(null);

  const onSubmit = () => onSearchClick(textInput.current?.value || "");

  return (
    <Container>
      <label htmlFor="search-input">Search:</label>
      <input
        ref={textInput}
        type="search"
        name="search-input"
        onClick={() => textInput.current?.focus()}
      />
      <button onClick={onSubmit}>Search</button>
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
