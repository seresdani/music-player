export const audioPlayerReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_AUDIO_PLAYER":
      return action.payload;
    default:
      return state;
  }
};
