export interface MusicType {
  kind: string;
  artistName: string;
  trackName: string;
  trackViewUrl: string;
  trackPrice: number;
  artworkUrl100: string;
}

export interface VideoType {
  kind: string;
  artistName: string;
  trackName: string;
  trackPrice: number;
}

export interface PodcastType {}

export interface GenericType {
  kind: string;
  artistName: string;
  trackName: string;
  trackPrice: number;
  artworkUrl100?: string;
  previewUrl?: string;
}

export interface ResType {
  results: GenericType[];
  resultCount: number;
}
