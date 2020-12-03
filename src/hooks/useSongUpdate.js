import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong, setSongList } from "../actions";

export const useSongUpdate = () => {
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.songList);
  const isPlaying = useSelector((state) => state.isPlaying);
  const audioPlayer = useSelector((state) => state.audioPlayer);

  const updateSong = (song) => {
    dispatch(
      setSongList(
        songList.map((s) => {
          return { ...s, active: s.id === song.id };
        })
      )
    );
    dispatch(setCurrentSong({ ...song, active: true }));

    if (isPlaying) {
      const playPromise = audioPlayer.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioPlayer.play();
        });
      }
    }
  };

  return { updateSong };
};
