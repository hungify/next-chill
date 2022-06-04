export type PlaylistType = "lofi" | "kpop" | "anime" | "own";

export type Playlist = {
  title: string;
  value: PlaylistType;
  list?: string[];
};
