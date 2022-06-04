import { StoreSlice } from "~/app/stores/store";
import type { Sound } from "~/models/Sound";
import sounds from "~/mocks/sounds";

export interface SoundSlice {
  sound: Sound | null;
  isPlaying: boolean;
  soundVolume: number;
  setSound: (sound: Sound) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setSoundVolume: (soundVolume: number) => void;
}

const initialState: SoundSlice = {
  sound: sounds.rain,
  isPlaying: false,
  soundVolume: 1,
  setSound: () => {},
  setIsPlaying: () => {},
  setSoundVolume: () => {},
};

const createSoundSlice: StoreSlice<SoundSlice> = (set) => ({
  ...initialState,
  setSound: (sound: Sound) => set((state) => ({ ...state, sound })),

  setIsPlaying: (isPlaying: boolean) => set((state) => ({ ...state, isPlaying })),

  setSoundVolume: (soundVolume: number) => set((state) => ({ ...state, soundVolume })),
});

export default createSoundSlice;
