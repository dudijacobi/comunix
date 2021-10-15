import React from "react";
import styled from "styled-components";
import { Track } from "../utils";

interface Props {
  tracks: Track[];
}

const TrackList = ({ tracks }: Props) => {
  return (
    <Container>
      {tracks.map(({ id }) => (
        <li key={id}></li>
      ))}
    </Container>
  );
};

export default TrackList;

const Container = styled.ul`
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
