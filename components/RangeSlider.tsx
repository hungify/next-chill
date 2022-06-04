import React from "react";
import styles from "../styles/RangeSlider.module.css";

interface RangeSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  classes?: string;
}

function RangeSlider({ classes, onChange, value }: RangeSliderProps) {
  const [sliderValue, setSliderValue] = React.useState(0);
  const [mouseState, setMouseState] = React.useState<string>();

  React.useEffect(() => {
    setSliderValue(value);
  }, [value]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value));
  };

  React.useEffect(() => {
    if (mouseState === "up") {
      onChange(sliderValue);
    }
  }, [mouseState]);

  return (
    <div className={styles["range-slider"]}>
      <input
        type="range"
        value={sliderValue}
        className={`slider ${classes}`}
        id="myRange"
        onChange={handleOnChange}
        onMouseDown={() => setMouseState("down")}
        onMouseUp={() => setMouseState("up")}
      />
    </div>
  );
}

export default React.memo(RangeSlider);
