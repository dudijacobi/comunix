import { useState, useEffect } from "react";
import styled from "styled-components";
import LogIn from "./components/LogIn";
import Search, { noFilter } from "./components/Search";
import TrackList from "./components/TrackList";
import { FilterValue, ITrack, Option } from "./interfaces";
import { getTracksByQueryAndType } from "./services";
import { compare, getHash, restHash } from "./utils";

const App = () => {
  const [token, setToken] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [filter, setFilter] = useState<Option>(noFilter);

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
        getTracksByQueryAndType(token, searchVal).then((data) =>
          setTracks(data || [])
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, [searchVal, token]);

  let sortedAndFilteredTracks = tracks;
  sortedAndFilteredTracks = sortedAndFilteredTracks.filter(
    ({ duration_ms }) => {
      switch (filter?.value) {
        case FilterValue.LessThen1:
          return duration_ms < 60000;
        case FilterValue.MoreThen1:
          return duration_ms > 60000;
        case FilterValue.MoreThen2:
          return duration_ms > 60000 * 2;
        case FilterValue.MoreThen3:
          return duration_ms > 60000 * 3;
        case FilterValue.None:
        default:
          return true;
      }
    }
  );
  sortedAndFilteredTracks = sortedAndFilteredTracks.sort((a, b) =>
    compare(a.name, b.name, sortAsc)
  );

  return (
    <Container>
      <AppWrapper>
        {!token ? (
          <LogIn />
        ) : (
          <Content>
            <Search
              sortAsc={sortAsc}
              filter={filter}
              toggleSort={() => setSortAsc((prev) => !prev)}
              onFilterChange={(newValue: Option) => setFilter(newValue)}
              onSearchClick={setSearchVal}
            />
            <TrackList tracks={sortedAndFilteredTracks} />
          </Content>
        )}
      </AppWrapper>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100vh;
  background-color: black;
`;

const AppWrapper = styled.div`
  display: flex;
  // width: 500px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  background-color: black;
`;

const Content = styled.div`
  padding-top: 50px;
  width: 100%;
  margin: 0 25px;
`;
