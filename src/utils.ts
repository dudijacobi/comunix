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

export const millisToMinutesAndSeconds = (miliSec: number) => {
  const minutes = Math.floor(miliSec / 60000);
  const seconds = +((miliSec % 60000) / 1000).toFixed(0);
  return seconds === 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const compare = (a: string, b: string, asc: boolean) => {
  if (a < b) return asc ? -1 : 1;
  if (a > b) return asc ? 1 : -1;
  return 0;
};
