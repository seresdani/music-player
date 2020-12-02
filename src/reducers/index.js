import { combineReducers } from "redux";

import { currentSongReducer } from "./currentSongReducer";
import { isPlayingReducer } from "./isPlayingReducer";
import { audioPlayerReducer } from "./audioPlayerReducer";
import { songListReducer } from "./songListReducer";
import { libraryStatusReducer } from "./libraryStatusReducer";

const allReducers = combineReducers({
    currentSong: currentSongReducer,
    isPlaying: isPlayingReducer,
    audioPlayer: audioPlayerReducer,
    songList: songListReducer,
    libraryStatus: libraryStatusReducer
});

export default allReducers;