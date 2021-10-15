import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogIn from "./components/LogIn";
import Search from "./components/Search";
import TrackList from "./components/TrackList";
import { getTracksByQueryAndType } from "./services";
import { getHash, restHash, Track } from "./utils";

const App = () => {
  const [token, setToken] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [tracks, setTracks] = useState<Track[]>([]);

  console.log(tracks);

  useEffect(() => {
    const _token = getHash.access_token;
    restHash();

    if (_token) {
      setToken(_token);
    }
  }, []);

  useEffect(() => {
    if (searchVal) {
      try {
        getTracksByQueryAndType(token, searchVal).then((tracks) =>
          setTracks(tracks || [])
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, [searchVal, token]);

  return (
    <Container>
      {!token ? (
        <LogIn />
      ) : (
        <Content>
          <Search onSearchClick={setSearchVal} />
          <TrackList tracks={tracks} />
        </Content>
      )}
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
`;

const Content = styled.div`
  padding-top: 50px;
`;
