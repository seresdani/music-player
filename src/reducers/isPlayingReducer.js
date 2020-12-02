export const isPlayingReducer = (state = false, action) => {
    switch(action.type) {
        case "SET_PLAYING":
            return action.payload;
        default:
            return state;
    }
}