import styled from "styled-components";
import { ITrack } from "../interfaces";
import Track from "./Track";

interface Props {
  tracks: ITrack[];
}

const TrackList = ({ tracks }: Props) => (
  <Container>
    {tracks.map((track) => (
      <Track key={track.id} track={track} />
    ))}
  </Container>
);

export default TrackList;

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 2px 0 0;
  overflow: auto;
  height: calc(100vh - 255px);
`;
