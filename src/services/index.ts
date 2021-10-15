import axios from "axios";
import { Track } from "../utils";

export const getTracksByQueryAndType = async (token: string, query: string) => {
  try {
    const data = await axios
      .get<{ tracks: Track[] }>("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: query,
          type: "track",
        },
      })
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return data?.tracks || [];
  } catch (err) {
    console.log(err);
  }
};
