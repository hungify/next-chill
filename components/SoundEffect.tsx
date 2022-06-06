import React from "react";
import useGlobalStore from "~/app/stores/store";
import Dropdown from "~/components/elements/Dropdown";
import Switch from "~/components/elements/Switch";
import RangeSlider from "~/components/RangeSlider";
import sounds from "~/mocks/sounds";
import type { DropdownOption } from "~/models/Dropdown";
import type { SoundType } from "~/models/Sound";
import styles from "../styles/SoundEffect.module.css";

export default function SoundEffect() {
  const store = useGlobalStore();

  const [soundEffect, setSoundEffect] = React.useState<Array<DropdownOption>>();
  const [audio, setAudio] = React.useState<HTMLAudioElement>();

  React.useEffect(() => {
    setAudio(new Audio(store.sound?.url));
    const keys = Object.keys(sounds) as SoundType[];
    const titleAndValue = keys.map((key) => ({
      label: sounds[key].label,
      value: key,
    }));
    setSoundEffect(titleAndValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (audio) {
      audio.volume = store.soundVolume;
      if (store.isPlaying) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }, [store.isPlaying, store.soundVolume, audio]);

  const handleOnChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const value = evt.target.value as SoundType;
    const sound = sounds[value];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setAudio(new Audio(sound.url));
    store.setSound(sound);
  };

  const handleToggle = (isPlaying: boolean) => {
    store.setIsPlaying(isPlaying);
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  };

  const handleRangeSliderChange = (value: number) => {
    store.setSoundVolume(value / 100);
    if (audio) {
      audio.volume = value / 100;
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <audio loop />
      <p className="center">Sound Effect</p>
      {soundEffect && store.sound && (
        <Dropdown
          label={store.sound.label}
          options={soundEffect}
          value={store.sound.value}
          onChange={handleOnChange}
        />
      )}
      <div className={styles["play-sound"]}>
        <RangeSlider
          max={100}
          min={0}
          value={store.soundVolume * 100}
          onChange={handleRangeSliderChange}
        />
        <Switch onClick={handleToggle} value={store.isPlaying} />
      </div>
    </div>
  );
}
