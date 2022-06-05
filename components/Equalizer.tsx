import styles from "../styles/Equalizer.module.css";

export default function Equalizer() {
  return (
    <div className={styles["container"]}>
      {Array(30)
        .fill(0)
        .map((_, i) => (
          <div className={styles["column"]} key={i}>
            <div className={styles["row"]} />
          </div>
        ))}
    </div>
  );
}
