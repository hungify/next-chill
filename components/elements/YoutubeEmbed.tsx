import styles from "../../styles/YoutubeEmbed.module.css";

interface YoutubeEmbedProps {
  embedId: string;
}

export default function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  return (
    <div className={styles["wrapper"]}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}?autoplay=0&autohide=2&keyboard=1&modestbranding=1&fs=0&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&showsearch=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
``        title="Embedded youtube"
      />
    </div>
  );
}
