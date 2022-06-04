import type { SoundType, Sound } from "~/models/Sound";

const soundEffect: Record<SoundType, Sound> = {
  rain: {
    label: "Rain",
    value: "rain",
    emoji: "🌧️",
    url: "https://document-khh.s3.ap-northeast-2.amazonaws.com/sounds/rain.mp3",
  },
  forest: {
    label: "Forest",
    value: "forest",
    emoji: "🌲",
    url: "https://document-khh.s3.ap-northeast-2.amazonaws.com/sounds/nature.mp3",
  },
  waves: {
    label: "Waves",
    value: "waves",
    emoji: "🌊",
    url: "https://document-khh.s3.ap-northeast-2.amazonaws.com/sounds/waves.mp3",
  },
  cafe: {
    label: "Cafe",
    value: "cafe",
    emoji: "☕",
    url: "https://document-khh.s3.ap-northeast-2.amazonaws.com/sounds/cafe.mp3",
  },
  city: {
    label: "City",
    value: "city",
    emoji: "🏙️",
    url: "https://document-khh.s3.ap-northeast-2.amazonaws.com/sounds/city.mp3",
  },
  river: {
    label: "River",
    value: "river",
    emoji: "🏞️",
    url: "https://document-khh.s3.ap-northeast-2.amazonaws.com/sounds/river.mp3",
  },
  inflight: {
    label: "In-flight",
    value: "inflight",
    emoji: "✈️",
    url: "https://document-khh.s3.ap-northeast-2.amazonaws.com/sounds/inflight.mp3",
  },
};

export default soundEffect;
