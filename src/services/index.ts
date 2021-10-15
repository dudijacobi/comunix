import axios from "axios";
import { ITrack } from "../interfaces";

export const getTracksByQueryAndType = async (token: string, query: string) => {
  try {
    const data = await axios
      .get<{ tracks: { items: ITrack[] } }>(
        "https://api.spotify.com/v1/search",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            q: query,
            type: "track",
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return data?.tracks.items || [];
  } catch (err) {
    console.log(err);
  }
};
