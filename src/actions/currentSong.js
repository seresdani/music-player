export const setCurrentSong = (currentSong) => {
  return {
    type: "SET_CURRENT_SONG",
    payload: currentSong,
  };
};
