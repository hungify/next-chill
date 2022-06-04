import React from "react";
import styles from "../styles/Point.module.css";

interface PointProps {
  playlistName: string;
  list: string[] | undefined;
}

export default function Point({ playlistName, list }: PointProps) {
  const pointPersist = localStorage.getItem("point");
  const defaultIndex = pointPersist ? pointPersist : 0;

  const [currentPlaylist, setPlaylist] = React.useState();
  const [currentIndex, setIndex] = React.useState(defaultIndex);
  const [videoUrl, setVideoUrl] = React.useState("");

  const handleOnClick = () => {
    // const playlistData = Utility.getVideoId(this.props.link);
    // const loadData = Utility.setLoadData(playlistData);
    // Utility.playPlaylist(loadData);
  };

  const handleVideoUrlChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(evt.target.value);
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // const playlistData = Utility.getVideoId(this.state.value);
    // if (playlistData === null) return; // URL was invalid.

    // const loadData = Utility.setLoadData(playlistData);
    // Utility.playPlaylist(loadData);
    // localStorage.setItem("currentPlaylist", "own");
    // localStorage.setItem("customUrl", this.state.value);
  };
  return (
    <div className={styles["wrapper"]}>
      {list ? (
        list.map((item, index) => (
          <React.Fragment key={index}>
            <p className={styles["episode"]} onClick={handleOnClick}>
              {index}
            </p>
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
