import styled from "styled-components";
import { ITrack } from "../interfaces";
import { millisToMinutesAndSeconds } from "../utils";

interface Props {
  track: ITrack;
}

const Track = ({ track }: Props) => {
  const { name, artists, duration_ms, album, track_number, preview_url } =
    track;
  const artistNames = artists.map((artist) => artist.name);
  const imgUrl = album.images[album.images.length - 2].url;

  return (
    <Container>
      <Details>
        <TrackTitle>Track:</TrackTitle>
        <Item>
          <Title>Name: </Title>
          {name}
        </Item>
        <Item>
          <Title>Artist{artistNames.length > 1 && "s"}: </Title>
          {artistNames.join(",")}
        </Item>
        <Item>
          <Title>Duration: </Title>
          {millisToMinutesAndSeconds(duration_ms)}
        </Item>
        <Item>
          <Title>Album name: </Title>
          {album.name}
        </Item>
        <Item>
          <Title>Track number: </Title>
          {track_number}
        </Item>
      </Details>
      <ImageAndAudio>
        <IMG src={imgUrl} alt={album.name} />
        <Video controls={true}>
          <source type="audio/mpeg" src={preview_url} />
        </Video>
      </ImageAndAudio>
    </Container>
  );
};

export default Track;

const Container = styled.li`
  border: 1px solid lightgreen;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
`;

const Details = styled.section`
  flex: 1;
  width: 50%;
`;

const ImageAndAudio = styled.section`
  flex: 1;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

const TrackTitle = styled.h2`
  margin: 0 0 20px 0;
`;

const Item = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Video = styled.video`
  max-width: 100%;
`;

const IMG = styled.img`
  max-width: 75%;
`;
