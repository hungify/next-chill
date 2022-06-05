import React from "react";
import playlistData from "~/mocks/playlist";
import type { Playlist, PlaylistType } from "~/models/Playlist";
import Dropdown from "~/components/elements/Dropdown";
import type { DropdownOption } from "~/models/Dropdown";
import Point from "~/components/Point";
import styles from "../styles/Playlist.module.css";
import useGlobalStore from "~/app/stores/store";

export default function Playlist() {
  const [list, setList] = React.useState<Array<DropdownOption>>();

  const store = useGlobalStore();

  React.useEffect(() => {
    const keys = Object.keys(playlistData) as PlaylistType[];
    const titleAndValue = keys.map((key) => ({
      label: playlistData[key].title,
      value: key,
    }));
    setList(titleAndValue);
  }, []);

  const handleOnChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const value = evt.target.value as PlaylistType;
    const playlist = playlistData[value];
    store.setPlayList(playlist);
  };

  return (
    <div className={styles["wrapper"]}>
      <p className="center">Choose a playlist</p>
      {list && store.playList && (
        <Dropdown
          label={store.playList.title}
          value={store.playList.value}
          options={list}
          onChange={handleOnChange}
        />
      )}
      {store.playList && <Point playlistName={store.playList.value} list={store.playList.list} />}
    </div>
  );
}
