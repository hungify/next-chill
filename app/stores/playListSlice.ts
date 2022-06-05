import type { Playlist } from "~/models/Playlist";
import { StoreSlice } from "~/app/stores/store";
import playlist from "~/mocks/playlist";

export interface PlayListSlice {
  playList: Playlist;
  episode: number;
  embedId: string;
  listId: string;
  setPlayList: (playList: Playlist) => void;
  setEpisode: (episode: number) => void;
  setEmbedId: (embedId: string) => void;
  setListId: (listId: string) => void;
}

const initialState: PlayListSlice = {
  playList: playlist.lofi,
  episode: 0,
  embedId: "5qap5aO4i9A",
  listId: "",
  setPlayList: () => {},
  setEpisode: () => {},
  setEmbedId: () => {},
  setListId: () => {},
};

const createPlayListSlice: StoreSlice<PlayListSlice> = (set) => ({
  ...initialState,
  setPlayList: (playList) => set((state) => ({ ...state, playList })),
  setEpisode: (episode) => set((state) => ({ ...state, episode })),
  setEmbedId: (embedId) => set((state) => ({ ...state, embedId })),
  setListId: (listId) => set((state) => ({ ...state, listId })),
});

export default createPlayListSlice;
