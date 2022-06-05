import useGlobalStore from "~/app/stores/store";
import YoutubeEmbed from "~/components/elements/YoutubeEmbed";
import Equalizer from "~/components/Equalizer";
import styles from "../styles/View.module.css";

export default function View() {
  const store = useGlobalStore();

  return (
    <div className={styles["wrapper"]}>
      <YoutubeEmbed embedId={store.embedId} listId={store.listId} />
      {store.equalizer && <Equalizer />}
    </div>
  );
}
