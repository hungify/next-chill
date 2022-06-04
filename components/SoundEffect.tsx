import React from "react";
import Dropdown from "~/components/elements/Dropdown";
import Switch from "~/components/elements/Switch";
import RangeSlider from "~/components/RangeSlider";
import backgroundData from "~/mocks/background";
import type { DropdownOption } from "~/models/Dropdown";
import type { Sound, SoundType } from "~/models/Sound";
import type { SwitchType } from "~/models/Switch";
import styles from "../styles/SoundEffect.module.css";

export default function SoundEffect() {
  const [currentBackground, setCurrentBackground] = React.useState<Sound>();
  const [background, setBackground] = React.useState<Array<DropdownOption>>();
  const [sliderValue, setSliderValue] = React.useState(0);

  React.useEffect(() => {
    const backgroundPersist = localStorage.getItem("currentSoundEffect") as SoundType;
    const defaultSelection = backgroundPersist
      ? backgroundData[backgroundPersist]
      : backgroundData.rain;

    setCurrentBackground(defaultSelection);

    const keys = Object.keys(backgroundData) as SoundType[];
    const titleAndValue = keys.map((key) => ({
      label: backgroundData[key].label,
      value: key,
    }));
    setBackground(titleAndValue);
  }, []);

  const handleOnChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const value = evt.target.value as SoundType;
    const background = backgroundData[value];
    setCurrentBackground(background);
  };

  const handleToggle = (value: SwitchType) => {
    console.log(value);
  };

  const handleRangeSliderChange = React.useCallback(() => {
    setSliderValue(sliderValue);
  }, [sliderValue]);

  return (
    <div className={styles["wrapper"]}>
      <audio className={styles["checkbox"]} id="backgroundAudio" src="" loop></audio>
      <p className="center">Sound Effect</p>
      {background && currentBackground && (
        <Dropdown
          label={currentBackground.label}
          options={background}
          value={currentBackground.value}
          onChange={handleOnChange}
        />
      )}
      <div className={styles["play-sound"]}>
        <p>Volume</p>
        <RangeSlider
          classes="additional-css-classes"
          min={0}
          max={100}
          value={sliderValue}
          onChange={handleRangeSliderChange}
        />
        <Switch onClick={handleToggle} />
      </div>
    </div>
  );
}
