import React from "react";
import useGlobalStore from "~/app/stores/store";
import { getEmbedId, getListId } from "~/utils/youtube";
import styles from "../styles/Point.module.css";

interface PointProps {
  playlistName: string;
  list: string[] | undefined;
  onSubmit: (url: string) => void;
}

export default function Point({ list, onSubmit }: PointProps) {
  const store = useGlobalStore();

  const [videoUrl, setVideoUrl] = React.useState("");

  const handleOnClick = (url: string, index: number) => {
    return () => {
      store.setEpisode(index);

      const embedId = getEmbedId(url);
      const listId = getListId(url);

      if (embedId) {
        store.setEmbedId(embedId);
        store.setListId("");
      } else if (listId) {
        store.setEmbedId("");
        store.setListId(listId);
      }
    };
  };

  const handleVideoUrlChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(evt.target.value);
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit(videoUrl);
  };
  return (
    <div className={styles["wrapper"]}>
      {list ? (
        list.map((url, index) => (
          <React.Fragment key={index}>
            <button
              className={`${styles["episode"]} ${
                store.episode === index && styles["episode--active"]
              }`}
              onClick={handleOnClick(url, index)}
            >
              {index}
            </button>
          </React.Fragment>
        ))
      ) : (
        <form onSubmit={handleFormSubmit} autoComplete="off">
          <label className={styles["title"]}>
            Paste YouTube URL (playlist or video must be public)
          </label>
          <div className={styles["wrap-input"]}>
            <input
              className={styles["input"]}
              value={videoUrl}
              onChange={handleVideoUrlChange}
              type="text"
              placeholder="Enter your YouTube URL"
              spellCheck={false}
            />
          </div>
        </form>
      )}
    </div>
  );
}
