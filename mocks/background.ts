import type { SoundType, Sound } from "~/models/Sound";

const soundEffect: Record<SoundType, Sound> = {
  rain: {
    label: "Rain",
    value: "rain",
    emoji: "🌧️",
    url: "https://chill-mood-club.s3.us-west-1.amazonaws.com/rain.mp3",
  },
  forest: {
    label: "Forest",
    value: "forest",
    emoji: "🌲",
    url: "https://chill-mood-club.s3.us-west-1.amazonaws.com/nature.mp3",
  },
  waves: {
    label: "Waves",
    value: "waves",
    emoji: "🌊",
    url: "https://chill-mood-club.s3.us-west-1.amazonaws.com/waves.mp3",
  },
  cafe: {
    label: "Cafe",
    value: "cafe",
    emoji: "☕",
    url: "https://chill-mood-club.s3.us-west-1.amazonaws.com/cafe.mp3",
  },
  city: {
    label: "City",
    value: "city",
    emoji: "🏙️",
    url: "https://chill-mood-club.s3.us-west-1.amazonaws.com/city.mp3",
  },
  river: {
    label: "River",
    value: "river",
    emoji: "🏞️",
    url: "https://chill-mood-club.s3.us-west-1.amazonaws.com/river.mp3",
  },
  inflight: {
    label: "In-flight",
    value: "inflight",
    emoji: "✈️",
    url: "https://chill-mood-club.s3.us-west-1.amazonaws.com/inflight.mp3",
  },
};

export default soundEffect;
