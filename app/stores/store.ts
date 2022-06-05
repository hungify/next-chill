import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";
import createPlayListSlice, { PlayListSlice } from "~/app/stores/playListSlice";
import createSoundSlice, { SoundSlice } from "~/app/stores/soundSlice";

export type StoreSlice<T extends object, E extends object = T> = (
  set: SetState<E extends T ? E : E & T>,
  get: GetState<E extends T ? E : E & T>
) => T;

export type MyState = SoundSlice & PlayListSlice;

const useGlobalStore = create<MyState>()(
  devtools((set, get) => ({
    ...createSoundSlice(set, get),
    ...createPlayListSlice(set, get),
  }))
);

export default useGlobalStore;
