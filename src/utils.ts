export interface Track {
  id: string;
  name: string;
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  href: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface Artist {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface Image {
  url: number;
  height: number;
  width: number;
}

export const CLIENT_ID = "bd01ce1559da43ac9ac09594f842b399";
export const AUTHORIZE_URL = "https://accounts.spotify.com/authorize";
export const REDIRECT_URI = "http://localhost:3000";
export const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

export const REGISTRETION_URL = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getHash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial: any, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

export const restHash = () => (window.location.hash = "");
