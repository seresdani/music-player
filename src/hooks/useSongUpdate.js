import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, setSongList } from "../actions";

export const useSongUpdate = () => {
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.songList);
  const isPlaying = useSelector((state) => state.isPlaying);
  const audioPlayer = useSelector((state) => state.audioPlayer);

  const updateSong = async (song) => {
    dispatch(
      setSongList(
        songList.map((s) => {
          return { ...s, active: s.id === song.id };
        })
      )
    );
    await dispatch(setCurrentSong({ ...song, active: true }));

    if (isPlaying) audioPlayer.play();
  };

  return { updateSong };
};
