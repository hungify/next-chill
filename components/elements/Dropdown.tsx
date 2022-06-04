import type { DropdownOption } from "~/models/Dropdown";
import type { PlaylistType } from "~/models/Playlist";
import type { SoundType } from "~/models/Sound";
import styles from "../../styles/Dropdown.module.css";

interface DropdownProps {
  label: string;
  value: PlaylistType | SoundType;
  options: Array<DropdownOption>;
  onChange: (option: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Dropdown({ label, value, options, onChange }: DropdownProps) {
  return (
    <>
      <div className={styles["select"]}>
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value} className={styles["option"]}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
