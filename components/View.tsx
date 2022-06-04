import YoutubeEmbed from "~/components/elements/YoutubeEmbed";
import styles from "../styles/View.module.css";

export default function View() {
  return (
    <div className={styles["wrapper"]}>
      <YoutubeEmbed embedId="5qap5aO4i9A" />
    </div>
  );
}
