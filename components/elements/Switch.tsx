import React from "react";
import PauseIcon from "~/components/icons/PauseIcon";
import PlayIcon from "~/components/icons/PlayIcon";
import styles from "../../styles/Switch.module.css";

interface SwitchProps {
  onClick: (isPlaying: boolean) => void;
  value: boolean;
}

export default function Switch({ onClick, value }: SwitchProps) {
  const [isPlaying, setIsPlaying] = React.useState(value);

  const handleSwitchChange = () => {
    onClick(!isPlaying);
    setIsPlaying(!isPlaying);
  };

  return (
    <button className={styles["btn"]} onClick={handleSwitchChange}>
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}
