import styles from "../../styles/YoutubeEmbed.module.css";
import { generateEmbedYoutubeUrl } from "~/utils/youtube";

interface YoutubeEmbedProps {
  embedId: string;
  listId: string;
}

export default function YoutubeEmbed({ embedId, listId }: YoutubeEmbedProps) {
  const src = generateEmbedYoutubeUrl(embedId, listId);

  return (
    <div className={styles["wrapper"]}>
      <iframe
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Just chill"
      />
    </div>
  );
}
