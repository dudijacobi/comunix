import { SingleValue } from "react-select";

export interface ITrack {
  id: string;
  name: string;
  album: IAlbum;
  artists: IArtist[];
  disc_number: number;
  duration_ms: number;
  href: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

interface IAlbum {
  album_type: string;
  artists: IArtist[];
  available_markets: string[];
  href: string;
  id: string;
  images: IImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface IArtist {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface IImage {
  url: string;
  height: number;
  width: number;
}

export type Option = SingleValue<{
  value: FilterValue;
  label: string;
}>;

export enum FilterValue {
  None = "none",
  LessThen1 = "lessThen1",
  MoreThen1 = "moreThen1",
  MoreThen2 = "moreThen2",
  MoreThen3 = "moreThen3",
}
