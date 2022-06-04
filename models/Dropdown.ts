import type { PlaylistType } from "~/models/Playlist";
import type { SoundType } from "~/models/Sound";

export type DropdownOption = {
  label: string;
  value: PlaylistType | SoundType;
};
