import React from "react";
import PauseIcon from "~/components/icons/PauseIcon";
import PlayIcon from "~/components/icons/PlayIcon";
import type { SwitchType } from "~/models/Switch";
import styles from "../../styles/Switch.module.css";

interface SwitchProps {
  onClick: (value: SwitchType) => void;
}

export default function Switch({ onClick }: SwitchProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const handleSwitchChange = () => {
    setIsPlaying(!isPlaying);
    onClick({
      play: isPlaying,
      pause: !isPlaying,
    });
  };
  return (
    <button className={styles["btn"]} onClick={handleSwitchChange}>
      {isPlaying ? <PlayIcon /> : <PauseIcon />}
    </button>
  );
}
