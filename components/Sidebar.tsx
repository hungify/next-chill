import Header from "~/components/elements/Header";
import Playlist from "~/components/Playlist";
import SoundEffect from "~/components/SoundEffect";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles["wrapper"]}>
      <Header />
      <Playlist />
      <SoundEffect />
    </div>
  );
}
