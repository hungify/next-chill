export type SoundType = "rain" | "forest" | "waves" | "cafe" | "city" | "river" | "inflight";

export type Sound = {
  label: string;
  value: SoundType;
  emoji: string;
  url: string;
};
