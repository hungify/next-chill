import React from "react";
import playlistData from "~/mocks/playlist";
import type { Playlist, PlaylistType } from "~/models/Playlist";
import Dropdown from "~/components/elements/Dropdown";
import type { DropdownOption } from "~/models/Dropdown";
import Point from "~/components/Point";
import styles from "../styles/Playlist.module.css";

export default function Playlist() {
  const [currentPlaylist, setCurrentPlaylist] = React.useState<Playlist>();
  const [playlist, setPlaylist] = React.useState<Array<DropdownOption>>();

  React.useEffect(() => {
    const listTypePersist: PlaylistType = localStorage.getItem("listType") as PlaylistType;
    const defaultSelection = listTypePersist ? playlistData[listTypePersist] : playlistData.lofi;
    setCurrentPlaylist(defaultSelection);

    const keys = Object.keys(playlistData) as PlaylistType[];
    const titleAndValue = keys.map((key) => ({
      label: playlistData[key].title,
      value: key,
    }));
    setPlaylist(titleAndValue);
  }, []);

  const handleOnChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const value = evt.target.value as PlaylistType;
    const playlist = playlistData[value];
    setCurrentPlaylist(playlist);
  };

  return (
    <div className={styles["wrapper"]}>
      <p className="center">Choose a playlist</p>
      {playlist && currentPlaylist && (
        <Dropdown
          label={currentPlaylist.title}
          value={currentPlaylist.value}
          options={playlist}
          onChange={handleOnChange}
          // select={{ value: currentPlaylist.value }}
          // arrowUpIcon={<ArrowUpIcon />}
          // arrowDownIcon={<ArrowDownIcon />}
        />
      )}
      {currentPlaylist && (
        <Point
          playlistName={currentPlaylist.value}
          list={playlistData[currentPlaylist.value].list}
        />
      )}
    </div>
  );
}
