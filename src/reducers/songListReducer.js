export const songListReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_SONG_LIST": 
            return action.payload;
        default:
            return state;
    }
}